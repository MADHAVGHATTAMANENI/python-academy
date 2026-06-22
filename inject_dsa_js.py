import re

with open('PythonAcademy/app.js', 'r') as f:
    js = f.read()

# 1. Add globals
if 'let isDsaMode =' not in js:
    js = js.replace(
        'let selectedQuizAnswers = {};',
        'let selectedQuizAnswers = {};\nlet isDsaMode = false;\nlet currentDsaProblem = null;'
    )

# 2. Add DSA DOM References
dsa_dom = """const dsaModal           = document.getElementById('dsa-modal');
const btnDsaPractice     = document.getElementById('btn-dsa-practice');
const btnCloseDsaModal   = document.getElementById('btn-close-dsa-modal');
const dsaProblemsList    = document.getElementById('dsa-problems-list');
const btnBackToDsaMenu   = document.getElementById('btn-back-to-dsa-menu');
const dsaFilters         = document.querySelectorAll('.dsa-filters .btn-filter');
"""
if 'const dsaModal' not in js:
    js = js.replace(
        'const progressCount    = document.getElementById(\'progress-completed-count\');',
        'const progressCount    = document.getElementById(\'progress-completed-count\');\n' + dsa_dom
    )

# 3. Patch handleSubmitChallenge
submit_old = """async function handleSubmitChallenge() {
    if (!currentLessonData) return;"""

submit_new = """async function handleSubmitChallenge() {
    if (isDsaMode && currentDsaProblem) {
        return runDsaTests();
    }
    if (!currentLessonData) return;"""

if 'if (isDsaMode && currentDsaProblem)' not in js:
    js = js.replace(submit_old, submit_new)

# 4. Add the massive block of DSA functions at the bottom
dsa_logic = """
// ============================================================
//  DSA PRACTICE ARENA LOGIC
// ============================================================

function renderDsaProblems(filter = 'all') {
    dsaProblemsList.innerHTML = '';
    DSA_PROBLEMS.forEach(p => {
        if (filter !== 'all' && p.difficulty !== filter) return;
        
        const card = document.createElement('div');
        card.className = 'dsa-problem-card';
        card.innerHTML = `
            <div class="dsa-card-header">
                <h4 class="dsa-card-title">${p.title}</h4>
                <span class="dsa-tag ${p.difficulty.toLowerCase()}">${p.difficulty}</span>
            </div>
            <div class="dsa-topic"><i class="fa-solid fa-tag"></i> ${p.topic}</div>
        `;
        card.addEventListener('click', () => {
            dsaModal.style.display = 'none';
            enterDsaMode(p);
        });
        dsaProblemsList.appendChild(card);
    });
}

function enterDsaMode(problem) {
    isDsaMode = true;
    currentDsaProblem = problem;
    sandboxMode = false;
    
    // UI layout shifts
    document.querySelector('.main-layout').classList.add('dsa-mode-active');
    document.querySelector('.main-layout').classList.remove('sandbox-active');
    
    document.getElementById('dsa-difficulty-tag').textContent = problem.difficulty;
    document.getElementById('dsa-difficulty-tag').className = `module-tag ${problem.difficulty.toLowerCase()}`;
    document.getElementById('dsa-topic-tag').textContent = problem.topic;
    document.getElementById('dsa-title').textContent = problem.title;
    document.getElementById('dsa-description').innerHTML = problem.description;
    
    codeEditor.value = problem.starterCode;
    updateLineNumbers();
    
    testResultsPanel.style.display = 'none';
    terminalOutput.innerHTML = '';
}

function exitDsaMode() {
    isDsaMode = false;
    currentDsaProblem = null;
    document.querySelector('.main-layout').classList.remove('dsa-mode-active');
    
    // Reload current curriculum lesson into editor
    if (currentLessonData) {
        codeEditor.value = currentLessonData.exercise.starterCode;
        updateLineNumbers();
        testResultsPanel.style.display = 'none';
    }
}

async function runDsaTests() {
    const btn = document.getElementById('btn-submit-solution');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Testing...';

    testResultsPanel.style.display = 'block';
    testResultsList.innerHTML = '<div class="terminal-line system-msg">Running hidden test suite...</div>';

    const userCode = codeEditor.value;
    const combined = userCode + '\\n\\n' + currentDsaProblem.tests;

    const result = await runPythonCode(combined);

    let parsed = null;
    const allOutput = result.output || '';
    const marker = '__TEST_RESULT__:';
    const markerIdx = allOutput.indexOf(marker);

    if (markerIdx !== -1) {
        try {
            parsed = JSON.parse(allOutput.substring(markerIdx + marker.length));
        } catch { parsed = null; }
    }

    const userOutput = markerIdx !== -1 ? allOutput.substring(0, markerIdx).trim() : allOutput;
    
    if (userOutput) {
        testResultsList.innerHTML += `<div class="terminal-line stdout-msg"><b>Output:</b><br>${userOutput.replace(/\\n/g, '<br>')}</div>`;
    }

    if (result.error) {
        const tb = result.error.replace(/\\n/g, '<br>');
        testResultsList.innerHTML += `<div class="terminal-line error-msg"><b>Error:</b><br>${tb}</div>`;
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-play"></i> Run Tests';
        return;
    }

    if (!parsed) {
        testResultsList.innerHTML += '<div class="terminal-line error-msg">Test suite failed to execute correctly. Check your syntax.</div>';
    } else {
        let html = '';
        parsed.results.forEach(tr => {
            if (tr.success) {
                html += `<div class="terminal-line success-msg"><i class="fa-solid fa-check"></i> ${tr.name}</div>`;
            } else {
                html += `<div class="terminal-line error-msg"><i class="fa-solid fa-xmark"></i> ${tr.name} — Expected: ${tr.expected}, Got: ${tr.got}</div>`;
            }
        });
        
        if (parsed.passed) {
            html += '<div class="terminal-line success-msg" style="margin-top:10px; font-weight:bold;">🎉 All DSA test cases passed! Great job!</div>';
        } else {
            html += '<div class="terminal-line error-msg" style="margin-top:10px; font-weight:bold;">❌ Some tests failed. Keep trying!</div>';
        }
        testResultsList.innerHTML += html;
    }

    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-play"></i> Run Tests';
}

// DSA Event Listeners
btnDsaPractice.addEventListener('click', () => {
    renderDsaProblems();
    dsaModal.style.display = 'flex';
});

btnCloseDsaModal.addEventListener('click', () => {
    dsaModal.style.display = 'none';
});

btnBackToDsaMenu.addEventListener('click', () => {
    exitDsaMode();
    dsaModal.style.display = 'flex';
});

dsaFilters.forEach(btn => {
    btn.addEventListener('click', (e) => {
        dsaFilters.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderDsaProblems(e.target.dataset.filter);
    });
});

"""

if 'runDsaTests' not in js:
    js += dsa_logic

with open('PythonAcademy/app.js', 'w') as f:
    f.write(js)

print("Injected DSA logic into app.js")
