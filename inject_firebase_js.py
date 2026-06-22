import re

with open('PythonAcademy/app.js', 'r') as f:
    js = f.read()

firebase_logic = """
// ============================================================
//  FIREBASE AUTHENTICATION & CLOUD SYNC
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyCY4CqX8KPaDXlFFr92PUNL4WfDSjqitM8",
  authDomain: "pythonacademy-2bcf8.firebaseapp.com",
  projectId: "pythonacademy-2bcf8",
  storageBucket: "pythonacademy-2bcf8.firebasestorage.app",
  messagingSenderId: "228109376452",
  appId: "1:228109376452:web:3a1cdb286a4d4913a76291",
  measurementId: "G-BDWTDLSD0K"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();

    // DOM Elements
    const btnLoginHeader = document.getElementById('btn-login-header');
    const userProfile = document.getElementById('user-profile');
    const userAvatar = document.getElementById('user-avatar');
    const userEmail = document.getElementById('user-email');
    const btnLogout = document.getElementById('btn-logout');
    
    const authModal = document.getElementById('auth-modal');
    const btnCloseAuth = document.getElementById('btn-close-auth');
    const btnGoogleLogin = document.getElementById('btn-google-login');
    const btnEmailLogin = document.getElementById('btn-email-login');
    const btnEmailSignup = document.getElementById('btn-email-signup');
    const authEmailInput = document.getElementById('auth-email');
    const authPasswordInput = document.getElementById('auth-password');
    const authErrorMsg = document.getElementById('auth-error-msg');

    function showAuthError(msg) {
        authErrorMsg.textContent = msg;
        authErrorMsg.style.display = 'block';
    }

    // Modal Toggles
    if (btnLoginHeader) {
        btnLoginHeader.addEventListener('click', () => {
            authModal.style.display = 'flex';
            authErrorMsg.style.display = 'none';
        });
    }
    if (btnCloseAuth) {
        btnCloseAuth.addEventListener('click', () => {
            authModal.style.display = 'none';
        });
    }

    // Google Sign-In
    if (btnGoogleLogin) {
        btnGoogleLogin.addEventListener('click', async () => {
            try {
                const provider = new firebase.auth.GoogleAuthProvider();
                await auth.signInWithPopup(provider);
                authModal.style.display = 'none';
            } catch (error) {
                showAuthError(error.message);
            }
        });
    }

    // Email Login
    if (btnEmailLogin) {
        btnEmailLogin.addEventListener('click', async () => {
            try {
                await auth.signInWithEmailAndPassword(authEmailInput.value, authPasswordInput.value);
                authModal.style.display = 'none';
            } catch (error) {
                showAuthError(error.message);
            }
        });
    }

    // Email Signup
    if (btnEmailSignup) {
        btnEmailSignup.addEventListener('click', async () => {
            try {
                await auth.createUserWithEmailAndPassword(authEmailInput.value, authPasswordInput.value);
                authModal.style.display = 'none';
            } catch (error) {
                showAuthError(error.message);
            }
        });
    }

    // Logout
    if (btnLogout) {
        btnLogout.addEventListener('click', async () => {
            await auth.signOut();
            // Clear local progress on logout so users don't mix state
            localStorage.removeItem('pythonAcademyProgress');
            window.location.reload();
        });
    }

    // Auth State Observer
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            // User is signed in
            btnLoginHeader.style.display = 'none';
            userProfile.style.display = 'flex';
            userEmail.textContent = user.email ? user.email.split('@')[0] : 'User';
            if (user.photoURL) {
                userAvatar.src = user.photoURL;
                userAvatar.style.display = 'block';
            } else {
                userAvatar.style.display = 'none';
            }

            // Sync cloud progress down to local
            try {
                const docRef = db.collection('users').doc(user.uid);
                const docSnap = await docRef.get();
                if (docSnap.exists) {
                    const cloudData = docSnap.data().progress || {};
                    const localData = getProgress();
                    // Merge local into cloud (in case they did lessons while logged out, then logged in)
                    const merged = { ...cloudData, ...localData };
                    localStorage.setItem('pythonAcademyProgress', JSON.stringify(merged));
                    
                    // Push back to cloud just to ensure it's up to date
                    await docRef.set({ progress: merged }, { merge: true });
                } else {
                    // First time login, push whatever local progress they have
                    await docRef.set({ progress: getProgress() });
                }
                updateProgressUI();
                buildSidebar(); // Re-render the checkmarks
            } catch (e) {
                console.error("Error syncing progress:", e);
            }

        } else {
            // User is signed out
            btnLoginHeader.style.display = 'flex';
            userProfile.style.display = 'none';
        }
    });

    // We need to patch saveProgress to also write to Firestore!
    const originalSaveProgress = window.saveProgress;
    // Actually wait, saveProgress is a global function. Let's redefine it by injecting an override below.
}
"""

if 'firebaseConfig' not in js:
    # Inject it right inside the DOMContentLoaded
    # Find the top of DOMContentLoaded
    target = 'document.addEventListener('DOMContentLoaded', async () => {'
    if target in js:
        js = js.replace(target, target + '\n' + firebase_logic)

# Patch saveProgress
old_save_progress = """function saveProgress(progress) {
    localStorage.setItem('pythonAcademyProgress', JSON.stringify(progress));
    updateProgressUI();
}"""

new_save_progress = """function saveProgress(progress) {
    localStorage.setItem('pythonAcademyProgress', JSON.stringify(progress));
    updateProgressUI();
    
    // Cloud Sync
    if (typeof firebase !== 'undefined' && firebase.auth) {
        const user = firebase.auth().currentUser;
        if (user) {
            firebase.firestore().collection('users').doc(user.uid).set({
                progress: progress,
                lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true }).catch(err => console.error("Cloud save failed:", err));
        }
    }
}"""

if new_save_progress not in js:
    js = js.replace(old_save_progress, new_save_progress)

with open('PythonAcademy/app.js', 'w') as f:
    f.write(js)

print("Injected Firebase logic into app.js!")
