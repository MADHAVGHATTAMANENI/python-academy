import re

with open('PythonAcademy/index.html', 'r') as f:
    html = f.read()

login_modal = """
    <!-- LOGIN / AUTH MODAL -->
    <div id="auth-modal" class="modal-overlay" style="display: none; z-index: 1000;">
        <div class="modal-content" style="max-width: 400px; padding: 2rem; border-radius: var(--radius-lg); background: var(--bg-card); color: var(--text-primary); box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
            <div class="modal-header" style="border-bottom: none; justify-content: center; padding: 0 0 1.5rem 0; display: flex; position: relative;">
                <h2 style="font-size: 1.5rem; margin: 0;"><i class="fa-solid fa-user-lock" style="color: var(--accent-primary);"></i> Welcome Back</h2>
                <button id="btn-close-auth" class="btn-icon" style="position: absolute; right: -1rem; top: -1.5rem; background: none; border: none; color: var(--text-secondary); font-size: 1.5rem; cursor: pointer;"><i class="fa-solid fa-xmark"></i></button>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <button id="btn-google-login" class="btn-secondary" style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: white; color: #333; font-weight: 600; padding: 0.75rem; border-radius: var(--radius-md); border: none; cursor: pointer; transition: opacity 0.2s;">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" style="width: 18px;">
                    Sign in with Google
                </button>
                
                <div style="display: flex; align-items: center; text-align: center; color: var(--text-secondary); margin: 0.5rem 0;">
                    <div style="flex: 1; height: 1px; background: var(--border-color);"></div>
                    <span style="padding: 0 1rem; font-size: 0.85rem;">OR</span>
                    <div style="flex: 1; height: 1px; background: var(--border-color);"></div>
                </div>

                <div id="auth-error-msg" style="color: #ef4444; font-size: 0.85rem; text-align: center; display: none; padding: 0.5rem; background: rgba(239, 68, 68, 0.1); border-radius: var(--radius-sm);"></div>

                <input type="email" id="auth-email" placeholder="Email Address" class="custom-input" style="padding: 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: var(--bg-primary); color: white; width: 100%; box-sizing: border-box;">
                <input type="password" id="auth-password" placeholder="Password" class="custom-input" style="padding: 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: var(--bg-primary); color: white; width: 100%; box-sizing: border-box;">
                
                <button id="btn-email-login" class="btn-primary" style="padding: 0.75rem; justify-content: center; text-align: center; border-radius: var(--radius-md); cursor: pointer; border: none; background: var(--accent-primary); color: white; font-weight: 600;">Login</button>
                <button id="btn-email-signup" class="btn-secondary" style="padding: 0.75rem; justify-content: center; text-align: center; border-radius: var(--radius-md); cursor: pointer; border: 1px solid var(--border-color); background: transparent; color: var(--text-secondary); font-weight: 600;">Create Account</button>
            </div>
        </div>
    </div>
"""

if 'id="auth-modal"' not in html:
    # Inject it before the closing body tag
    html = html.replace('</body>', login_modal + '\n</body>')
    with open('PythonAcademy/index.html', 'w') as f:
        f.write(html)
    print("Injected auth modal!")
else:
    print("Modal already exists!")
