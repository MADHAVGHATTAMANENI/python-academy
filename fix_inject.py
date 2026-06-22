with open('inject_firebase_js.py', 'r') as f:
    code = f.read()

code = code.replace("target = 'document.addEventListener(\"DOMContentLoaded\", () => {'", "target = \"document.addEventListener('DOMContentLoaded', async () => {\"")

with open('inject_firebase_js.py', 'w') as f:
    f.write(code)
