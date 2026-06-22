const fs = require('fs');
const jsCode = fs.readFileSync('PythonAcademy/app.js', 'utf8');
const match = jsCode.match(/function highlightPython[\s\S]*?return html;\n}/);
if (match) {
    eval(match[0] + "\n\nfunction escapeHtml(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }\n\nconst PY_KEYWORDS = new Set(['def']);\nconst PY_BUILTINS = new Set(['print']);\nconsole.log(highlightPython('print(\"\")'));\nconsole.log(highlightPython('print(\"a\")'));\n");
} else {
    console.log("Could not find highlightPython");
}
