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
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// DOM Elements
const authTitle = document.getElementById('auth-title');
const authSubtitle = document.getElementById('auth-subtitle');
const btnSubmit = document.getElementById('btn-submit');
const btnGoogle = document.getElementById('btn-google');
const btnToggleMode = document.getElementById('btn-toggle-mode');
const toggleText = document.getElementById('toggle-text');
const btnForgotPassword = document.getElementById('btn-forgot-password');

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordGroup = document.getElementById('confirm-password-group');
const confirmPasswordInput = document.getElementById('confirm-password');

const authError = document.getElementById('auth-error');
const authSuccess = document.getElementById('auth-success');

// State
let isSignUpMode = false;

// Helpers
function showError(msg) {
    authSuccess.style.display = 'none';
    authError.textContent = msg;
    authError.style.display = 'block';
}

function showSuccess(msg) {
    authError.style.display = 'none';
    authSuccess.textContent = msg;
    authSuccess.style.display = 'block';
}

function clearMessages() {
    authError.style.display = 'none';
    authSuccess.style.display = 'none';
}

// Toggle between Sign In and Sign Up
btnToggleMode.addEventListener('click', () => {
    isSignUpMode = !isSignUpMode;
    clearMessages();
    emailInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';

    if (isSignUpMode) {
        authTitle.textContent = 'Create an Account';
        authSubtitle.textContent = 'Join Python Academy and track your progress.';
        btnSubmit.textContent = 'Sign Up';
        toggleText.textContent = 'Already have an account?';
        btnToggleMode.textContent = 'Sign in';
        confirmPasswordGroup.style.display = 'flex';
        btnForgotPassword.style.display = 'none';
    } else {
        authTitle.textContent = 'Welcome Back';
        authSubtitle.textContent = 'Sign in to sync your progress across devices.';
        btnSubmit.textContent = 'Sign In';
        toggleText.textContent = 'Don\'t have an account?';
        btnToggleMode.textContent = 'Create one';
        confirmPasswordGroup.style.display = 'none';
        btnForgotPassword.style.display = 'block';
    }
});

// Google Sign-In
btnGoogle.addEventListener('click', () => {
    clearMessages();
    const provider = new firebase.auth.GoogleAuthProvider();
    
    auth.signInWithPopup(provider)
        .then((result) => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            btnGoogle.disabled = false;
            btnGoogle.innerHTML = '<img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google"> Sign in with Google';
            
            // Handle common popup errors gracefully
            if (error.code === 'auth/popup-closed-by-user') {
                showError('The Google sign-in window was closed. Please click the button to try again.');
            } else if (error.code === 'auth/popup-blocked') {
                showError('Your browser blocked the Google sign-in popup. Please allow popups for this site and try again.');
            } else {
                showError(error.message);
            }
        });
});

// Email/Password Submit
btnSubmit.addEventListener('click', async () => {
    clearMessages();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        return showError('Please fill in all fields.');
    }

    if (isSignUpMode) {
        // Validation
        const confirmPassword = confirmPasswordInput.value;
        if (password !== confirmPassword) {
            return showError('Passwords do not match.');
        }
        if (password.length < 6) {
            return showError('Password must be at least 6 characters long.');
        }

        try {
            btnSubmit.disabled = true;
            btnSubmit.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Creating...';
            
            await auth.createUserWithEmailAndPassword(email, password);
            // On success, Firebase auto-logs the user in, so we just redirect.
            window.location.href = 'index.html';
        } catch (error) {
            showError(error.message);
            btnSubmit.disabled = false;
            btnSubmit.textContent = 'Sign Up';
        }
    } else {
        // Sign In Flow
        try {
            btnSubmit.disabled = true;
            btnSubmit.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Signing In...';
            
            await auth.signInWithEmailAndPassword(email, password);
            window.location.href = 'index.html';
        } catch (error) {
            showError(error.message);
            btnSubmit.disabled = false;
            btnSubmit.textContent = 'Sign In';
        }
    }
});

// Forgot Password
btnForgotPassword.addEventListener('click', async () => {
    clearMessages();
    const email = emailInput.value.trim();
    if (!email) {
        return showError('Please enter your email address first, then click "Forgot Password".');
    }

    try {
        await auth.sendPasswordResetEmail(email);
        showSuccess('Password reset email sent! Check your inbox.');
    } catch (error) {
        showError(error.message);
    }
});

// If they are already logged in, redirect them to index.html immediately
auth.onAuthStateChanged((user) => {
    if (user) {
        window.location.href = 'index.html';
    }
});
