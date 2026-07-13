/* ================================================================
   FIREBASE CONFIG — shared by index.html and control-panel.html
   ================================================================
   This is the ONE file you need to edit to connect both pages to a
   shared, free, cloud database so control-panel.html can change
   settings for every customer everywhere (not just one browser).

   ---------------- ONE-TIME SETUP (about 5 minutes) ---------------- 
   1. Go to https://console.firebase.google.com and sign in with any
      Google account.
   2. Click "Add project" → give it any name (e.g. "amruthadharanam")
      → you can turn OFF Google Analytics, it isn't needed → Create.
   3. In the left sidebar, click "Build" → "Realtime Database".
      Click "Create Database" → choose any location → start in
      "Test mode" (we'll explain the security trade-off below).
   4. In the left sidebar, click the gear icon → "Project settings".
      Scroll to "Your apps" → click the "</>" (Web) icon → give the
      app any nickname → "Register app".
   5. Firebase will show you a code block that looks like:

         const firebaseConfig = {
           apiKey: "AIza...",
           authDomain: "your-project.firebaseapp.com",
           databaseURL: "https://your-project-default-rtdb.firebaseio.com",
           projectId: "your-project",
           storageBucket: "your-project.appspot.com",
           messagingSenderId: "...",
           appId: "..."
         };

      Copy those values into FIREBASE_CONFIG below, replacing the
      placeholder text.
   6. Save this file and re-upload it alongside index.html and
      control-panel.html on your hosting (same folder as both).

   ---------------- SECURITY NOTE ----------------
   "Test mode" means anyone with your databaseURL can read AND write
   this data — there's no login system here, since adding one would
   need real backend/auth work. For a small ordering terminal's
   settings (announcement text, store open/closed, sold-out items,
   coupon codes), that's a reasonable trade-off, but it does mean:
     - Don't put anything truly sensitive in here (passwords, etc.)
     - Don't publicly link/share control-panel.html's URL
     - After the 30-day test-mode window, Firebase will lock reads/
       writes unless you update the Realtime Database "Rules" tab to:
         { "rules": { ".read": true, ".write": true } }
       (Rules tab is right next to the Data tab in Realtime Database.)
       This keeps working the same way — open read/write — permanently.
   ================================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyBPNZGZUxGc691mSCBDkBg_O1Qw2bZMdho",
  authDomain: "amruthadharanam.firebaseapp.com",
  databaseURL: "https://amruthadharanam-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "amruthadharanam",
  storageBucket: "amruthadharanam.firebasestorage.app",
  messagingSenderId: "794364958034",
  appId: "1:794364958034:web:abdd80510e07702af9d68b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Where all shared settings live inside the database — no need to change this.
const FIREBASE_SETTINGS_PATH = "amruthadharanam_settings";
