/* ============================================================
   Firebase Configuration
   ============================================================ */

window.firebaseConfig = {
  apiKey: "AIzaSyBPNZGZUxGc691mSCBDkBg_O1Qw2bZMdho",
  authDomain: "amruthadharanam.firebaseapp.com",
  databaseURL: "https://amruthadharanam-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "amruthadharanam",
  storageBucket: "amruthadharanam.firebasestorage.app",
  messagingSenderId: "794364958034",
  appId: "1:794364958034:web:abdd80510e07702af9d68b"
};

// Initialize Firebase (only once)
if (typeof firebase !== "undefined") {
    if (!firebase.apps.length) {
        firebase.initializeApp(window.firebaseConfig);
    }
} else {
    console.error("Firebase SDK not loaded.");
}

// Database reference
window.firebaseDatabase = firebase.database();

// Path used by remote-store.js
window.FIREBASE_SETTINGS_PATH = "amruthadharanam_settings";
