import re

with open('PythonAcademy/index.html', 'r') as f:
    html = f.read()

# 1. Inject Firebase SDKs
firebase_scripts = """    <!-- Firebase Compat SDKs -->
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js"></script>"""
if 'firebase-app-compat' not in html:
    html = html.replace('<!-- Main Style -->', firebase_scripts + '\n    <!-- Main Style -->')

# 2. Inject Header Auth Buttons
auth_buttons = """                <!-- AUTH UI -->
                <button id="btn-login-header" class="btn-primary btn-header" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                    <i class="fa-solid fa-user"></i> <span>Login</span>
                </button>
                <div id="user-profile" style="display: none; align-items: center; gap: 0.5rem; background: var(--bg-card); padding: 0.25rem 0.75rem; border-radius: var(--radius-full); border: 1px solid var(--border-color);">
                    <img id="user-avatar" src="" style="width: 24px; height: 24px; border-radius: 50%; display: none;">
                    <span id="user-email" style="font-size: 0.8rem; font-weight: 500; color: var(--text-primary);"></span>
                    <button id="btn-logout" style="background: none; border: none; color: var(--text-secondary); cursor: pointer; margin-left: 0.5rem;" title="Logout"><i class="fa-solid fa-right-from-bracket"></i></button>
                </div>"""
if 'btn-login-header' not in html:
    html = html.replace('<div id="pyodide-status" class="status-badge loading">', auth_buttons + '\n                <div id="pyodide-status" class="status-badge loading">')

# 3. Inject Login Modal
login_modal = """
    <!-- LOGIN / AUTH MODAL -->
    <div id="auth-modal" class="modal-overlay">
        <div class="modal-content" style="max-width: 400px; padding: 2rem;">
            <div class="modal-header" style="border-bottom: none; justify-content: center; padding: 0 0 1.5rem 0;">
                <h2 style="font-size: 1.5rem;"><i class="fa-solid fa-user-lock" style="color: var(--accent-primary);"></i> Welcome Back</h2>
                <button id="btn-close-auth" class="btn-icon" style="position: absolute; right: 1rem; top: 1rem;"><i class="fa-solid fa-xmark"></i></button>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <button id="btn-google-login" class="btn-secondary" style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: white; color: #333; font-weight: 600; padding: 0.75rem;">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" style="width: 18px;">
                    Sign in with Google
                </button>
                
                <div style="display: flex; align-items: center; text-align: center; color: var(--text-secondary); margin: 0.5rem 0;">
                    <div style="flex: 1; height: 1px; background: var(--border-color);"></div>
                    <span style="padding: 0 1rem; font-size: 0.85rem;">OR</span>
                    <div style="flex: 1; height: 1px; background: var(--border-color);"></div>
                </div>

                <div id="auth-error-msg" style="color: #ef4444; font-size: 0.85rem; text-align: center; display: none;"></div>

                <input type="email" id="auth-email" placeholder="Email Address" class="custom-input" style="padding: 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: var(--bg-primary); color: white;">
                <input type="password" id="auth-password" placeholder="Password" class="custom-input" style="padding: 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: var(--bg-primary); color: white;">
                
                <button id="btn-email-login" class="btn-primary" style="padding: 0.75rem; justify-content: center;">Login</button>
                <button id="btn-email-signup" class="btn-secondary" style="padding: 0.75rem; justify-content: center;">Create Account</button>
            </div>
        </div>
    </div>
"""
if 'id="auth-modal"' not in html:
    html = html.replace('<!-- DSA PROBLEM MODAL -->', login_modal + '\n    <!-- DSA PROBLEM MODAL -->')

with open('PythonAcademy/index.html', 'w') as f:
    f.write(html)

print("Injected UI to index.html")
