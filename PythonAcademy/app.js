// ============================================================
//  PYTHON ACADEMY - APP ENGINE
// ============================================================

// ---- State ----
let pyodide = null;
let currentLessonData = null;
let currentModuleIndex = 0;
let currentLessonIndex = 0;
let selectedQuizAnswers = {};

// ---- DOM References ----
const pyodideStatus  = document.getElementById('pyodide-status');
const curriculumMenu = document.getElementById('curriculum-menu');
const codeEditor     = document.getElementById('code-editor');
const lineNumbers    = document.getElementById('line-numbers');
const terminalOutput = document.getElementById('terminal-output');
const testResultsPanel = document.getElementById('test-results-panel');
const testResultsList  = document.getElementById('test-results-list');
const progressFill     = document.getElementById('progress-fill');
const progressPercent  = document.getElementById('progress-percent');
const progressCount    = document.getElementById('progress-completed-count');

// ============================================================
//  PROGRESS PERSISTENCE (localStorage)
// ============================================================
function getProgress() {
    try {
        return JSON.parse(localStorage.getItem('pythonAcademyProgress') || '{}');
    } catch { return {}; }
}

function markLessonComplete(moduleId, lessonId) {
    const progress = getProgress();
    if (!progress[moduleId]) progress[moduleId] = {};
    progress[moduleId][lessonId] = true;
    localStorage.setItem('pythonAcademyProgress', JSON.stringify(progress));
    updateProgressBar();
}

function isLessonComplete(moduleId, lessonId) {
    const progress = getProgress();
    return !!(progress[moduleId] && progress[moduleId][lessonId]);
}

function isLessonUnlocked(moduleIdx, lessonIdx) {
    if (moduleIdx === 0 && lessonIdx === 0) return true;
    const progress = getProgress();
    // Check previous lesson completion
    if (lessonIdx > 0) {
        const mod = CURRICULUM[moduleIdx];
        const prevLesson = mod.lessons[lessonIdx - 1];
        return isLessonComplete(mod.id, prevLesson.id);
    } else {
        // First lesson of a module — check last lesson of previous module
        const prevMod = CURRICULUM[moduleIdx - 1];
        const prevLesson = prevMod.lessons[prevMod.lessons.length - 1];
        return isLessonComplete(prevMod.id, prevLesson.id);
    }
}

function getTotalLessons() {
    return CURRICULUM.reduce((sum, mod) => sum + mod.lessons.length, 0);
}

function getCompletedCount() {
    const progress = getProgress();
    let count = 0;
    CURRICULUM.forEach(mod => {
        mod.lessons.forEach(lesson => {
            if (progress[mod.id] && progress[mod.id][lesson.id]) count++;
        });
    });
    return count;
}

function updateProgressBar() {
    const total = getTotalLessons();
    const done  = getCompletedCount();
    const pct   = total > 0 ? Math.round((done / total) * 100) : 0;
    progressFill.style.width = pct + '%';
    progressPercent.textContent = pct + '%';
    progressCount.textContent = `${done}/${total} Lessons`;
    // Re-render sidebar icons
    renderSidebarIcons();
}

// ============================================================
//  SIDEBAR RENDERING
// ============================================================
function buildSidebar() {
    curriculumMenu.innerHTML = '';
    CURRICULUM.forEach((mod, mIdx) => {
        const group = document.createElement('div');
        group.className = 'module-group';
        if (mIdx === currentModuleIndex) group.classList.add('expanded');

        const header = document.createElement('button');
        header.className = 'module-header';
        header.innerHTML = `
            <div class="module-title-box">
                <span class="module-meta">Module ${mIdx + 1}</span>
                <span>${mod.title}</span>
            </div>
            <i class="fa-solid fa-chevron-down"></i>`;
        header.addEventListener('click', () => {
            group.classList.toggle('expanded');
        });

        const ul = document.createElement('ul');
        ul.className = 'lesson-list';

        mod.lessons.forEach((lesson, lIdx) => {
            const li = document.createElement('li');
            const unlocked = isLessonUnlocked(mIdx, lIdx);
            const completed = isLessonComplete(mod.id, lesson.id);
            const active = mIdx === currentModuleIndex && lIdx === currentLessonIndex;

            li.className = 'lesson-item';
            if (active) li.classList.add('active');
            if (!unlocked) li.classList.add('locked-state');

            let icon = '';
            if (completed) {
                icon = '<i class="fa-solid fa-circle-check lesson-status-icon completed"></i>';
            } else if (unlocked) {
                icon = '<i class="fa-regular fa-circle lesson-status-icon unlocked"></i>';
            } else {
                icon = '<i class="fa-solid fa-lock lesson-status-icon locked"></i>';
            }

            li.innerHTML = `<span class="lesson-title-text">${lesson.id}. ${lesson.title}</span>${icon}`;

            if (unlocked) {
                li.addEventListener('click', () => loadLesson(mIdx, lIdx));
            }
            ul.appendChild(li);
        });

        group.appendChild(header);
        group.appendChild(ul);
        curriculumMenu.appendChild(group);
    });
}

function renderSidebarIcons() {
    const items = curriculumMenu.querySelectorAll('.lesson-item');
    let idx = 0;
    CURRICULUM.forEach((mod, mIdx) => {
        mod.lessons.forEach((lesson, lIdx) => {
            const li = items[idx];
            if (!li) { idx++; return; }
            const unlocked = isLessonUnlocked(mIdx, lIdx);
            const completed = isLessonComplete(mod.id, lesson.id);
            const iconEl = li.querySelector('.lesson-status-icon');
            if (!iconEl) { idx++; return; }
            iconEl.className = 'lesson-status-icon';
            if (completed) {
                iconEl.className += ' fa-solid fa-circle-check completed';
            } else if (unlocked) {
                iconEl.className += ' fa-regular fa-circle unlocked';
            } else {
                iconEl.className += ' fa-solid fa-lock locked';
            }
            idx++;
        });
    });
}

// ============================================================
//  LESSON LOADING
// ============================================================
function loadLesson(modIdx, lesIdx) {
    currentModuleIndex = modIdx;
    currentLessonIndex = lesIdx;
    selectedQuizAnswers = {};

    const mod    = CURRICULUM[modIdx];
    const lesson = mod.lessons[lesIdx];
    currentLessonData = lesson;

    // Update breadcrumb tags
    document.getElementById('lesson-module-tag').textContent = `Module ${modIdx + 1}`;
    document.getElementById('lesson-index-tag').textContent  = `Lesson ${lesson.id}`;
    document.getElementById('lesson-title').textContent      = lesson.title;

    // Explanation tab
    document.getElementById('lesson-content-body').innerHTML = lesson.description;
    document.getElementById('lesson-sample-code').textContent = lesson.sampleCode;

    // Quiz tab
    buildQuiz(lesson.quiz);

    // Exercise tab
    document.getElementById('exercise-instructions').innerHTML = lesson.exercise.instruction;
    document.getElementById('lesson-hint').textContent = lesson.hint;

    // Load starter code into editor
    setEditorCode(lesson.exercise.starterCode);

    // Reset terminal
    terminalOutput.innerHTML = `
        <div class="terminal-line system-msg">Python Academy Interactive Environment v1.0.0</div>
        <div class="terminal-line prompt">>>> Loaded: ${lesson.title}</div>`;

    // Hide test results panel
    testResultsPanel.style.display = 'none';

    // Switch to learn tab
    switchTab('tab-learn');

    // Update nav buttons
    updateNavButtons();

    // Rebuild sidebar
    buildSidebar();
}

function updateNavButtons() {
    const prevBtn = document.getElementById('btn-prev-lesson');
    const nextBtn = document.getElementById('btn-next-lesson');

    const isFirst = currentModuleIndex === 0 && currentLessonIndex === 0;
    prevBtn.disabled = isFirst;

    // Calculate absolute lesson counts
    const totalMods = CURRICULUM.length;
    const lastMod   = CURRICULUM[totalMods - 1];
    const isLast    = currentModuleIndex === totalMods - 1 &&
                      currentLessonIndex === lastMod.lessons.length - 1;
    nextBtn.disabled = isLast;
}

function gotoAdjacentLesson(direction) {
    const mod = CURRICULUM[currentModuleIndex];
    let mIdx  = currentModuleIndex;
    let lIdx  = currentLessonIndex + direction;

    if (lIdx < 0) {
        mIdx--;
        if (mIdx < 0) return;
        lIdx = CURRICULUM[mIdx].lessons.length - 1;
    } else if (lIdx >= mod.lessons.length) {
        mIdx++;
        if (mIdx >= CURRICULUM.length) return;
        lIdx = 0;
    }

    if (isLessonUnlocked(mIdx, lIdx)) {
        loadLesson(mIdx, lIdx);
    }
}

// ============================================================
//  QUIZ
// ============================================================
function buildQuiz(questions) {
    const container = document.getElementById('quiz-questions-list');
    container.innerHTML = '';
    const fb = document.getElementById('quiz-feedback');
    fb.style.display = 'none';

    questions.forEach((q, qIdx) => {
        const card = document.createElement('div');
        card.className = 'quiz-question-card';
        card.innerHTML = `<div class="quiz-q-num">Question ${qIdx + 1}</div>
                          <div class="quiz-q-text">${q.question}</div>`;
        const opts = document.createElement('div');
        opts.className = 'quiz-options';

        q.options.forEach((opt, oIdx) => {
            const el = document.createElement('div');
            el.className = 'quiz-option';
            el.innerHTML = `<div class="quiz-radio"></div><span>${opt}</span>`;
            el.addEventListener('click', () => {
                // Deselect siblings
                opts.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
                el.classList.add('selected');
                selectedQuizAnswers[qIdx] = oIdx;
            });
            opts.appendChild(el);
        });

        card.appendChild(opts);
        container.appendChild(card);
    });
}

function submitQuiz() {
    const questions = currentLessonData.quiz;
    let score = 0;

    const cards = document.querySelectorAll('.quiz-question-card');
    cards.forEach((card, qIdx) => {
        const opts = card.querySelectorAll('.quiz-option');
        const correct = questions[qIdx].answerIndex;
        const chosen  = selectedQuizAnswers[qIdx];

        opts.forEach((opt, oIdx) => {
            opt.classList.remove('correct', 'incorrect', 'selected');
            if (oIdx === correct) opt.classList.add('correct');
            else if (oIdx === chosen && chosen !== correct) opt.classList.add('incorrect');
        });

        if (chosen === correct) score++;
    });

    const fb = document.getElementById('quiz-feedback');
    fb.style.display = 'block';
    if (score === questions.length) {
        fb.className = 'feedback-box success';
        fb.innerHTML = `<strong>✅ Perfect score!</strong> You got ${score}/${questions.length} correct.`;
        // Badge on quiz tab
        document.getElementById('quiz-badge').style.display = 'none';
    } else {
        fb.className = 'feedback-box error';
        fb.innerHTML = `<strong>❌ Score: ${score}/${questions.length}.</strong> Review the highlighted answers above and try again!`;
    }
}

// ============================================================
//  PYTHON SYNTAX HIGHLIGHTER (tokenizer)
// ============================================================
const PY_KEYWORDS = new Set([
    'def','class','if','elif','else','for','while','return','import','from',
    'try','except','finally','with','as','in','not','and','or','is','True',
    'False','None','pass','break','continue','lambda','yield','raise','del',
    'global','nonlocal','assert','async','await'
]);
const PY_BUILTINS = new Set([
    'print','len','range','type','int','str','float','list','dict','set',
    'tuple','input','open','enumerate','zip','map','filter','sorted','reversed',
    'sum','min','max','abs','round','bool','id','isinstance','hasattr','getattr',
    'setattr','super','object','property','staticmethod','classmethod','repr',
    'vars','dir','help','hash','hex','oct','bin','chr','ord','pow','eval',
    'exec','format','any','all','iter','next',
    'Exception','ValueError','TypeError','KeyError','IndexError','NameError',
    'ZeroDivisionError','AttributeError','FileNotFoundError','IOError',
    'RuntimeError','StopIteration','NotImplementedError'
]);

function escapeHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function highlightPython(src) {
    // Tokenise the source, then emit coloured spans
    const toks = [];
    let i = 0;

    while (i < src.length) {
        // ── Comment ─────────────────────────────────────────
        if (src[i] === '#') {
            let j = i;
            while (j < src.length && src[j] !== '\n') j++;
            toks.push({ t: 'comment', v: src.slice(i, j) });
            i = j;
            continue;
        }

        // ── Triple-quoted strings ────────────────────────────
        const tri = src.slice(i, i + 3);
        if (tri === '"""' || tri === "'''") {
            let j = i + 3;
            while (j < src.length && src.slice(j, j + 3) !== tri) j++;
            j += 3;
            toks.push({ t: 'string', v: src.slice(i, j) });
            i = j;
            continue;
        }

        // ── Single/double-quoted strings ─────────────────────
        if (src[i] === '"' || src[i] === "'") {
            const q = src[i];
            let j = i + 1;
            while (j < src.length && src[j] !== q && src[j] !== '\n') {
                if (src[j] === '\\') j++;   // skip escape char
                j++;
            }
            j++;  // include closing quote
            toks.push({ t: 'string', v: src.slice(i, j) });
            i = j;
            continue;
        }

        // ── Decorator  @identifier ───────────────────────────
        if (src[i] === '@' && /[a-zA-Z_]/.test(src[i + 1] || '')) {
            let j = i + 1;
            while (j < src.length && /[\w.]/.test(src[j])) j++;
            toks.push({ t: 'decorator', v: src.slice(i, j) });
            i = j;
            continue;
        }

        // ── Numbers ──────────────────────────────────────────
        if (/[0-9]/.test(src[i])) {
            let j = i;
            while (j < src.length && /[0-9._xXoObBaAfFeEjJ]/.test(src[j])) j++;
            toks.push({ t: 'number', v: src.slice(i, j) });
            i = j;
            continue;
        }

        // ── Identifiers / keywords ───────────────────────────
        if (/[a-zA-Z_]/.test(src[i])) {
            let j = i;
            while (j < src.length && /[\w]/.test(src[j])) j++;
            toks.push({ t: 'word', v: src.slice(i, j) });
            i = j;
            continue;
        }

        // ── Anything else ────────────────────────────────────
        toks.push({ t: 'other', v: src[i] });
        i++;
    }

    // Emit HTML
    let html = '';
    let lastKeyword = null;   // track 'def'/'class' to colour the following name

    for (let k = 0; k < toks.length; k++) {
        const tok = toks[k];
        const esc = escapeHtml(tok.v);

        if (tok.t === 'comment') {
            html += `<span class="hl-comment">${esc}</span>`;
            lastKeyword = null;
        } else if (tok.t === 'string') {
            html += `<span class="hl-string">${esc}</span>`;
            lastKeyword = null;
        } else if (tok.t === 'number') {
            html += `<span class="hl-number">${esc}</span>`;
        } else if (tok.t === 'decorator') {
            html += `<span class="hl-decorator">${esc}</span>`;
            lastKeyword = null;
        } else if (tok.t === 'word') {
            if (lastKeyword === 'def') {
                html += `<span class="hl-funcname">${esc}</span>`;
                lastKeyword = null;
            } else if (lastKeyword === 'class') {
                html += `<span class="hl-classname">${esc}</span>`;
                lastKeyword = null;
            } else if (PY_KEYWORDS.has(tok.v)) {
                html += `<span class="hl-keyword">${esc}</span>`;
                lastKeyword = (tok.v === 'def' || tok.v === 'class') ? tok.v : null;
            } else if (PY_BUILTINS.has(tok.v)) {
                html += `<span class="hl-builtin">${esc}</span>`;
                lastKeyword = null;
            } else {
                html += esc;
                lastKeyword = null;
            }
        } else {
            // whitespace/punctuation — reset lastKeyword only on non-whitespace
            if (tok.v.trim()) lastKeyword = null;
            html += esc;
        }
    }

    return html;
}

// ============================================================
//  CODE EDITOR (Line Numbers + Highlight sync)
// ============================================================
const editorHighlightCode = document.getElementById('editor-highlight-code');
const editorHighlight     = document.getElementById('editor-highlight');

function syncHighlight() {
    // Keep the pre-layer in sync with textarea content
    // Trailing newline prevents last empty line from collapsing
    editorHighlightCode.innerHTML = highlightPython(codeEditor.value) + '\n';
}

function setEditorCode(code) {
    codeEditor.value = code;
    updateLineNumbers();
    syncHighlight();
}

function updateLineNumbers() {
    const lines = codeEditor.value.split('\n').length;
    lineNumbers.textContent = Array.from({ length: lines }, (_, i) => i + 1).join('\n');
}

codeEditor.addEventListener('input', () => {
    updateLineNumbers();
    syncHighlight();
});
codeEditor.addEventListener('scroll', () => {
    lineNumbers.scrollTop  = codeEditor.scrollTop;
    // Mirror horizontal scroll into the highlight layer
    editorHighlight.scrollLeft = codeEditor.scrollLeft;
    editorHighlight.scrollTop  = codeEditor.scrollTop;
});

// ============================================================
//  EDITOR AUTO-PAIR (quotes, brackets) + TAB INDENT
// ============================================================
const AUTO_PAIRS = {
    '"':  '"',
    "'":  "'",
    '`':  '`',
    '(':  ')',
    '[':  ']',
    '{':  '}',
};
// Closing chars — pressing these should "jump over" an existing closing char
const CLOSING_CHARS = new Set(['"', "'", '`', ')', ']', '}']);

codeEditor.addEventListener('keydown', (e) => {
    const start = codeEditor.selectionStart;
    const end   = codeEditor.selectionEnd;
    const val   = codeEditor.value;
    const charAfter = val[start]; // character right after the cursor

    // ── Tab: insert 4 spaces ──────────────────────────────────
    if (e.key === 'Tab') {
        e.preventDefault();
        codeEditor.value = val.substring(0, start) + '    ' + val.substring(end);
        codeEditor.selectionStart = codeEditor.selectionEnd = start + 4;
        updateLineNumbers();
        return;
    }

    // ── Backspace: remove pair if cursor is between them ─────
    if (e.key === 'Backspace' && start === end) {
        const charBefore = val[start - 1];
        const closing = AUTO_PAIRS[charBefore];
        if (closing && charAfter === closing) {
            e.preventDefault();
            codeEditor.value = val.substring(0, start - 1) + val.substring(start + 1);
            codeEditor.selectionStart = codeEditor.selectionEnd = start - 1;
            updateLineNumbers();
            return;
        }
    }

    // ── Jump-over: if user types a closing char that already exists ──
    if (CLOSING_CHARS.has(e.key) && charAfter === e.key && start === end) {
        // For quote chars only jump over if they were auto-inserted (charBefore is the matching open)
        const isQuote = (e.key === '"' || e.key === "'" || e.key === '`');
        if (!isQuote || val[start - 1] !== e.key) {
            e.preventDefault();
            codeEditor.selectionStart = codeEditor.selectionEnd = start + 1;
            return;
        }
    }

    // ── Auto-pair: insert open + closing, place cursor between ──
    if (AUTO_PAIRS[e.key]) {
        // Don't auto-pair if user has text selected (let default replace work)
        if (start !== end) return;

        // For quotes: don't auto-pair if the char after is alphanumeric (avoid disrupting mid-word)
        const isQuote = (e.key === '"' || e.key === "'" || e.key === '`');
        if (isQuote && charAfter && /\w/.test(charAfter)) return;

        e.preventDefault();
        const open  = e.key;
        const close = AUTO_PAIRS[e.key];
        codeEditor.value = val.substring(0, start) + open + close + val.substring(end);
        codeEditor.selectionStart = codeEditor.selectionEnd = start + 1;
        updateLineNumbers();
    }
});

// ============================================================
//  TERMINAL UTILITIES
// ============================================================
function appendTerminal(text, cls = 'output') {
    const line = document.createElement('div');
    line.className = `terminal-line ${cls}`;
    line.textContent = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function clearTerminal() {
    terminalOutput.innerHTML = `
        <div class="terminal-line system-msg">Python Academy Interactive Environment v1.0.0</div>
        <div class="terminal-line prompt">>>> Console cleared.</div>`;
}

// ============================================================
//  PYODIDE INTEGRATION
// ============================================================
async function initPyodide() {
    try {
        pyodide = await loadPyodide();
        pyodideStatus.className = 'status-badge ready';
        pyodideStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i><span>Python Ready ✓</span>';
    } catch (err) {
        pyodideStatus.className = 'status-badge error';
        pyodideStatus.innerHTML = '<i class="fa-solid fa-circle-xmark"></i><span>Python Failed to load</span>';
        console.error(err);
    }
}

async function runPythonCode(code, captureOutput = true) {
    if (!pyodide) {
        appendTerminal('Python is still loading. Please wait...', 'error');
        return { success: false, output: '' };
    }

    let captured = '';
    try {
        // Redirect stdout to capture print() calls
        pyodide.setStdout({ batched: (text) => { captured += text + '\n'; } });
        pyodide.setStderr({ batched: (text) => { captured += '[stderr] ' + text + '\n'; } });

        await pyodide.runPythonAsync(code);
        return { success: true, output: captured };
    } catch (err) {
        return { success: false, output: captured, error: err.message };
    }
}

// Run button handler
async function handleRunCode() {
    const btn = document.getElementById('btn-run-code');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Running...';

    appendTerminal('>>> Running code...', 'prompt');

    const code = codeEditor.value;
    const result = await runPythonCode(code);

    if (result.output) {
        result.output.split('\n').forEach(line => {
            if (line) appendTerminal(line, 'output');
        });
    }
    if (!result.success && result.error) {
        appendTerminal('Error: ' + result.error, 'error');
    }

    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-play"></i> Run Code';
}

// Submit challenge handler
async function handleSubmitChallenge() {
    if (!currentLessonData) return;

    const btn = document.getElementById('btn-submit-solution');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Testing...';

    testResultsPanel.style.display = 'block';
    testResultsList.innerHTML = '<div class="terminal-line system-msg">Running tests...</div>';

    const userCode = codeEditor.value;
    const testCode = currentLessonData.exercise.tests;

    // Combine user code + test suite
    const combined = userCode + '\n\n' + testCode;

    const result = await runPythonCode(combined);

    // Parse test results from special marker in output
    let parsed = null;
    const allOutput = result.output || '';
    const marker = '__TEST_RESULT__:';
    const markerIdx = allOutput.indexOf(marker);

    if (markerIdx !== -1) {
        try {
            parsed = JSON.parse(allOutput.substring(markerIdx + marker.length));
        } catch { parsed = null; }
    }

    // Show user stdout (before the marker)
    const userOutput = markerIdx !== -1 ? allOutput.substring(0, markerIdx).trim() : allOutput;
    if (userOutput) {
        appendTerminal('>>> Running challenge...', 'prompt');
        userOutput.split('\n').forEach(line => { if (line) appendTerminal(line, 'output'); });
    }

    if (!result.success && result.error) {
        appendTerminal('Error: ' + result.error, 'error');
    }

    // Render test result list
    testResultsList.innerHTML = '';
    if (parsed && parsed.results) {
        parsed.results.forEach(test => {
            const item = document.createElement('div');
            item.className = `test-item ${test.success ? 'pass' : 'fail'}`;
            item.innerHTML = `
                <span class="test-item-title">
                    ${test.success ? '✅' : '❌'} ${test.name}
                </span>
                <span class="test-status-badge">${test.success ? 'PASS' : 'FAIL'}</span>`;
            if (!test.success) {
                const detail = document.createElement('div');
                detail.style.cssText = 'font-size:0.75rem;margin-top:4px;opacity:0.8;';
                detail.textContent = `Expected: ${test.expected} | Got: ${test.got}`;
                item.appendChild(detail);
            }
            testResultsList.appendChild(item);
        });

        if (parsed.passed) {
            markLessonComplete(CURRICULUM[currentModuleIndex].id, currentLessonData.id);
            appendTerminal('✅ All tests passed! Lesson complete!', 'success');
            triggerConfetti();
            // Unlock next button
            document.getElementById('btn-next-lesson').disabled = false;
            renderSidebarIcons();
        } else {
            appendTerminal('❌ Some tests failed. Review your code and try again.', 'error');
        }
    } else if (!result.success) {
        testResultsList.innerHTML = '<div class="test-item fail"><span>❌ Code could not execute. Fix syntax errors first.</span></div>';
    } else {
        testResultsList.innerHTML = '<div class="test-item pass"><span>✅ Code ran without errors.</span></div>';
        markLessonComplete(CURRICULUM[currentModuleIndex].id, currentLessonData.id);
        triggerConfetti();
    }

    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Submit Challenge';
}

// ============================================================
//  CONFETTI CELEBRATION
// ============================================================
function triggerConfetti() {
    if (typeof confetti !== 'undefined') {
        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#8b5cf6', '#06b6d4', '#f97316', '#22c55e', '#f59e0b']
        });
    }
}

// ============================================================
//  TAB SWITCHING
// ============================================================
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === tabId);
    });
}

// ============================================================
//  EVENT LISTENERS
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
    // Build sidebar
    buildSidebar();
    updateProgressBar();

    // Load first lesson
    loadLesson(0, 0);

    // Start Pyodide
    await initPyodide();

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Run Code
    document.getElementById('btn-run-code').addEventListener('click', handleRunCode);

    // Submit Challenge
    document.getElementById('btn-submit-solution').addEventListener('click', handleSubmitChallenge);

    // Submit Quiz
    document.getElementById('btn-submit-quiz').addEventListener('click', submitQuiz);

    // Prev / Next lesson
    document.getElementById('btn-prev-lesson').addEventListener('click', () => gotoAdjacentLesson(-1));
    document.getElementById('btn-next-lesson').addEventListener('click', () => gotoAdjacentLesson(1));

    // Reset code to starter
    document.getElementById('btn-reset-code').addEventListener('click', () => {
        if (currentLessonData) setEditorCode(currentLessonData.exercise.starterCode);
    });

    // Clear console
    document.getElementById('btn-clear-console').addEventListener('click', clearTerminal);

    // Close results panel
    document.getElementById('btn-close-results').addEventListener('click', () => {
        testResultsPanel.style.display = 'none';
    });

    // Copy sample code to editor
    document.getElementById('btn-copy-sample').addEventListener('click', () => {
        if (currentLessonData) {
            setEditorCode(currentLessonData.sampleCode);
            switchTab('tab-exercise');
        }
    });

    // Reset all progress
    document.getElementById('btn-reset-progress').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset ALL your progress? This cannot be undone.')) {
            localStorage.removeItem('pythonAcademyProgress');
            updateProgressBar();
            buildSidebar();
            loadLesson(0, 0);
        }
    });

    // Hints accordion
    const hintToggle = document.getElementById('hint-toggle');
    hintToggle.addEventListener('click', () => {
        hintToggle.closest('.hints-accordion').classList.toggle('open');
    });
});
