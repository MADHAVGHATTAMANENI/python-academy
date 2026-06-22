import re

with open('PythonAcademy/app.js', 'r') as f:
    js = f.read()

# 1. Add mobile menu references and event listener
mobile_logic = """
    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================
    const btnMobileMenu = document.getElementById('btn-mobile-menu');
    const sidebar = document.querySelector('.sidebar');
    
    if (btnMobileMenu && sidebar) {
        btnMobileMenu.addEventListener('click', () => {
            sidebar.classList.toggle('mobile-open');
        });
    }
"""

if 'btnMobileMenu' not in js:
    # Inject it before the end of the DOMContentLoaded block
    # We'll just look for '// NEW FEATURE: PYTHON REFERENCE MODAL' and put it right before that.
    target = '// NEW FEATURE: PYTHON REFERENCE MODAL'
    if target in js:
        js = js.replace(target, mobile_logic + '\n    ' + target)

# 2. Make lesson clicks auto-close the sidebar on mobile
old_click = "li.addEventListener('click', () => loadLesson(mIdx, lIdx));"
new_click = """li.addEventListener('click', () => {
                    loadLesson(mIdx, lIdx);
                    if (window.innerWidth <= 1024) {
                        const sb = document.querySelector('.sidebar');
                        if (sb) sb.classList.remove('mobile-open');
                    }
                });"""

if new_click not in js:
    js = js.replace(old_click, new_click)

with open('PythonAcademy/app.js', 'w') as f:
    f.write(js)

print("Injected mobile JS logic!")
