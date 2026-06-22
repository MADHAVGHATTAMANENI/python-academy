import re

with open('PythonAcademy/styles.css', 'r') as f:
    css = f.read()

# We need to find the old media query block from line 1299 to 1328 and replace it.
old_media_query = """/* Responsive Scaling: stack layout vertically on smaller screens */
@media (max-width: 1024px) {
    .main-layout {
        flex-direction: column;
        overflow-y: auto;
    }
    .sidebar {
        width: 100%;
        height: auto;
        border-right: none;
        border-bottom: 1px solid var(--border-color);
    }
    .workspace {
        flex-direction: column;
        height: auto;
        overflow: visible;
    }
    .lesson-pane {
        max-width: 100%;
        border-right: none;
        border-bottom: 1px solid var(--border-color);
        height: auto;
    }
    .playground-pane {
        height: auto;
    }
    body {
        overflow: auto;
    }
}"""

# New massive responsive block
new_media_query = """/* ============================================================ */
/* MOBILE RESPONSIVENESS OVERRIDES */
/* ============================================================ */

/* Mobile Menu Button - Hidden on desktop */
.btn-mobile-menu {
    display: none;
    background: none;
    border: none;
    color: var(--text-primary);
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 1rem;
    padding: 0.5rem;
}

@media (max-width: 1024px) {
    /* Base Body Constraints to prevent mobile Safari bounce/horizontal scroll */
    body {
        overflow: hidden; /* App-like container */
        position: fixed;
        width: 100%;
        height: 100%;
    }

    .btn-mobile-menu {
        display: block;
    }

    /* Header Wrap */
    .app-header {
        flex-wrap: wrap;
        height: auto;
        padding: 0.75rem 1rem;
        gap: 1rem;
    }
    
    .header-progress {
        order: 3;
        width: 100%;
        max-width: 100%;
    }
    
    .header-status {
        order: 2;
        gap: 0.5rem;
    }

    .btn-header {
        margin-right: 0;
        padding: 0.5rem;
        font-size: 0.8rem;
    }

    /* Main Layout into column */
    .main-layout {
        flex-direction: column;
        position: relative;
    }

    /* Off-Canvas Sidebar */
    .sidebar {
        position: absolute;
        top: 0;
        left: -320px;
        width: 320px;
        max-width: 80vw;
        height: 100%;
        z-index: 100;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 5px 0 15px rgba(0,0,0,0.5);
    }
    .sidebar.mobile-open {
        transform: translateX(320px);
    }

    /* Workspace */
    .workspace {
        flex-direction: column;
        height: 100%;
        flex: 1;
        overflow: hidden; /* Let inner panes scroll */
    }

    .workspace-pane {
        width: 100%;
        max-width: 100vw;
    }

    /* Lesson Pane Height Constraint */
    .lesson-pane {
        height: 50%;
        border-right: none;
        border-bottom: 2px solid var(--border-color);
        max-width: 100vw;
    }

    /* Playground Area */
    .playground-pane {
        height: 50%;
        min-height: 250px;
    }
    
    .editor-container {
        height: calc(100% - 150px);
    }

    /* Modals */
    .modal-content, .dsa-modal-content {
        width: 95vw;
        max-width: 95vw;
        margin: 0 auto;
        height: 90vh;
    }
    
    /* Reference Modal Split Pane becomes Vertical Stack */
    .modal-body {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        padding: 0;
    }
    .modal-nav {
        border-right: none;
        border-bottom: 1px solid var(--border-color);
        padding: 0.5rem;
        display: flex;
        overflow-x: auto;
        white-space: nowrap;
        scrollbar-width: none; /* Hide scrollbar for clean look */
    }
    .modal-nav::-webkit-scrollbar { display: none; }
    
    .modal-nav ul {
        display: flex;
        gap: 0.5rem;
    }
    .modal-nav li {
        margin-bottom: 0;
    }
    .modal-nav a {
        background: var(--bg-card);
        white-space: nowrap;
    }

    .modal-content-area {
        padding: 1rem;
    }

    /* Touch Targets (Minimum 44px for Apple HIG) */
    .btn-primary, .btn-secondary, .lesson-nav-tab, .btn-header {
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

/* Very small screens (iPhone SE, etc) */
@media (max-width: 400px) {
    .header-logo span {
        font-size: 1rem;
    }
    .btn-header span {
        display: none; /* Icon only on very small screens */
    }
    .dsa-problems-grid {
        grid-template-columns: 1fr;
    }
}"""

if old_media_query in css:
    new_css = css.replace(old_media_query, new_media_query)
    with open('PythonAcademy/styles.css', 'w') as f:
        f.write(new_css)
    print("Replaced CSS media queries!")
else:
    print("Could not find the exact old media query block.")
