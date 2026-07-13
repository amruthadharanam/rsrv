/* ================================================================
   REMOTE STORE — thin helper around Firebase Realtime Database.
   Used by both index.html and control-panel.html so they talk to
   the exact same shared settings, on any device, anywhere.

   Depends on firebase-config.js being loaded first, plus the
   Firebase compat SDK scripts (firebase-app-compat.js and
   firebase-database-compat.js) being included in the page.
================================================================ */

const RemoteStore = {
    _db: null,
    _configured: false,

    isConfigured() {
        try {
            return typeof FIREBASE_CONFIG !== "undefined" && !!FIREBASE_CONFIG.apiKey && !FIREBASE_CONFIG.apiKey.startsWith("REPLACE_WITH");
        } catch (e) {
            return false;
        }
    },

    // Returns one of: "ok", "not_configured", "missing_config_file",
    // "missing_sdk" — lets callers show a specific, actionable message
    // instead of a generic failure.
    diagnose() {
        if (typeof FIREBASE_CONFIG === "undefined") return "missing_config_file";
        if (typeof firebase === "undefined") return "missing_sdk";
        if (!this.isConfigured()) return "not_configured";
        return "ok";
    },

    init() {
        try {
            this._configured = this.isConfigured();
            if (!this._configured) return false;
            if (!firebase.apps || !firebase.apps.length) {
                firebase.initializeApp(FIREBASE_CONFIG);
            }
            this._db = firebase.database();
            return true;
        } catch (e) {
            console.warn("Firebase failed to initialize:", e);
            this._configured = false;
            return false;
        }
    },

    // Fetches the whole settings object once. Resolves to {} if
    // unconfigured, unreachable, or empty — callers should treat that
    // as "use hardcoded defaults", never throw.
    async getAll(timeoutMs = 5000) {
        if (!this._configured) return {};
        try {
            const ref = this._db.ref(FIREBASE_SETTINGS_PATH);
            const snap = await Promise.race([
                ref.once("value"),
                new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), timeoutMs))
            ]);
            return snap.val() || {};
        } catch (e) {
            console.warn("RemoteStore.getAll failed, using local fallback:", e);
            return null; // null = "couldn't reach it", distinct from {} = "reached it, empty"
        }
    },

    // Writes one key under the settings path. value === null removes it.
    async set(key, value) {
        if (!this._configured) return false;
        try {
            const ref = this._db.ref(`${FIREBASE_SETTINGS_PATH}/${key}`);
            if (value === null || value === undefined) {
                await ref.remove();
            } else {
                await ref.set(value);
            }
            return true;
        } catch (e) {
            console.warn(`RemoteStore.set(${key}) failed:`, e);
            return false;
        }
    },

    // Live updates — calls callback(allSettings) whenever anything changes.
    // Used by index.html so a page left open picks up changes without a
    // manual refresh (e.g. store just closed, item just sold out).
    watch(callback) {
        if (!this._configured) return () => {};
        const ref = this._db.ref(FIREBASE_SETTINGS_PATH);
        const handler = (snap) => callback(snap.val() || {});
        ref.on("value", handler);
        return () => ref.off("value", handler);
    }
};
