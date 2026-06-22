import re

# Read index.html
with open("PythonAcademy/index.html", "r") as f:
    content = f.read()

# The modal starts at <!-- REFERENCE MODAL -->
# and ends right before <!-- Import Curriculum Data and App Engine -->

modal_html = """    <!-- REFERENCE MODAL -->
    <div id="reference-modal" class="modal-overlay" style="display: none;">
        <div class="modal-content">
            <div class="modal-header">
                <h2><i class="fa-solid fa-book-bookmark"></i> Python Reference Guide</h2>
                <button id="btn-close-modal" class="btn-close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <nav class="modal-nav">
                    <ul>
                        <li><a href="#ref-basics">1. Basics & Syntax</a></li>
                        <li><a href="#ref-datatypes">2. Core Data Types</a></li>
                        <li><a href="#ref-operators">3. Operators & Math</a></li>
                        <li><a href="#ref-flow">4. Control Flow (If/Loops)</a></li>
                        <li><a href="#ref-collections">5. Collections (Lists/Dicts)</a></li>
                        <li><a href="#ref-functions">6. Functions & Lambdas</a></li>
                        <li><a href="#ref-oop">7. Object-Oriented</a></li>
                        <li><a href="#ref-errors">8. Error Handling</a></li>
                        <li><a href="#ref-comprehensions">9. Comprehensions</a></li>
                    </ul>
                </nav>
                <div class="modal-content-area">
                    
                    <h3 id="ref-basics">1. Basics & Syntax</h3>
                    <p>Python is designed to be highly readable. It uses indentation (spaces) rather than curly braces to define blocks of code.</p>
                    <pre><code><span class="syntax-comment"># This is a single-line comment</span>
<span class="syntax-func">print</span>(<span class="syntax-string">"Hello, World!"</span>)

<span class="syntax-comment"># Variables are dynamically typed</span>
name = <span class="syntax-string">"Alice"</span>
age = <span class="syntax-number">25</span></code></pre>

                    <h3 id="ref-datatypes">2. Core Data Types</h3>
                    <p>Python has several built-in data types that handle text, numbers, and boolean logic.</p>
                    <pre><code><span class="syntax-comment"># Strings (str)</span>
text = <span class="syntax-string">"Hello"</span>
multi = <span class="syntax-string">'''Line 1
Line 2'''</span>

<span class="syntax-comment"># Numbers (int, float)</span>
integer_num = <span class="syntax-number">42</span>
floating_num = <span class="syntax-number">3.14159</span>

<span class="syntax-comment"># Booleans (bool)</span>
is_active = <span class="syntax-keyword">True</span>
is_empty = <span class="syntax-keyword">False</span>

<span class="syntax-comment"># NoneType</span>
empty_val = <span class="syntax-keyword">None</span></code></pre>

                    <h3 id="ref-operators">3. Operators & Math</h3>
                    <p>Python supports standard mathematical operations and logic comparisons.</p>
                    <pre><code><span class="syntax-comment"># Arithmetic</span>
add = <span class="syntax-number">5</span> + <span class="syntax-number">3</span>      <span class="syntax-comment"># 8</span>
sub = <span class="syntax-number">5</span> - <span class="syntax-number">3</span>      <span class="syntax-comment"># 2</span>
mul = <span class="syntax-number">5</span> * <span class="syntax-number">3</span>      <span class="syntax-comment"># 15</span>
div = <span class="syntax-number">10</span> / <span class="syntax-number">3</span>     <span class="syntax-comment"># 3.3333333333333335 (Float division)</span>
floor = <span class="syntax-number">10</span> // <span class="syntax-number">3</span>  <span class="syntax-comment"># 3 (Floor division)</span>
mod = <span class="syntax-number">10</span> % <span class="syntax-number">3</span>     <span class="syntax-comment"># 1 (Remainder)</span>
exp = <span class="syntax-number">2</span> ** <span class="syntax-number">3</span>     <span class="syntax-comment"># 8 (Exponentiation)</span>

<span class="syntax-comment"># Logical</span>
<span class="syntax-keyword">and</span>, <span class="syntax-keyword">or</span>, <span class="syntax-keyword">not</span></code></pre>

                    <h3 id="ref-flow">4. Control Flow</h3>
                    <p>Control the execution path of your program using conditional logic and loops.</p>
                    <pre><code><span class="syntax-comment"># Conditionals</span>
<span class="syntax-keyword">if</span> score >= <span class="syntax-number">90</span>:
    <span class="syntax-func">print</span>(<span class="syntax-string">"A"</span>)
<span class="syntax-keyword">elif</span> score >= <span class="syntax-number">80</span>:
    <span class="syntax-func">print</span>(<span class="syntax-string">"B"</span>)
<span class="syntax-keyword">else</span>:
    <span class="syntax-func">print</span>(<span class="syntax-string">"C"</span>)

<span class="syntax-comment"># For Loop (iterating sequences)</span>
<span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> <span class="syntax-func">range</span>(<span class="syntax-number">5</span>):
    <span class="syntax-func">print</span>(i) <span class="syntax-comment"># 0, 1, 2, 3, 4</span>

<span class="syntax-comment"># While Loop</span>
count = <span class="syntax-number">5</span>
<span class="syntax-keyword">while</span> count > <span class="syntax-number">0</span>:
    count -= <span class="syntax-number">1</span></code></pre>

                    <h3 id="ref-collections">5. Collections</h3>
                    <p>Lists, Tuples, Sets, and Dictionaries store multiple items.</p>
                    <pre><code><span class="syntax-comment"># List (Ordered, Mutable)</span>
fruits = [<span class="syntax-string">"apple"</span>, <span class="syntax-string">"banana"</span>]
fruits.append(<span class="syntax-string">"orange"</span>)

<span class="syntax-comment"># Tuple (Ordered, Immutable)</span>
coords = (<span class="syntax-number">10.0</span>, <span class="syntax-number">20.0</span>)

<span class="syntax-comment"># Set (Unordered, Unique)</span>
unique_nums = {<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>} <span class="syntax-comment"># Results in {1, 2, 3}</span>

<span class="syntax-comment"># Dictionary (Key-Value Pairs)</span>
user = {<span class="syntax-string">"name"</span>: <span class="syntax-string">"John"</span>, <span class="syntax-string">"age"</span>: <span class="syntax-number">30</span>}
<span class="syntax-func">print</span>(user.get(<span class="syntax-string">"name"</span>))</code></pre>

                    <h3 id="ref-functions">6. Functions & Lambdas</h3>
                    <p>Functions allow for code reuse. Lambdas are small anonymous functions.</p>
                    <pre><code><span class="syntax-comment"># Standard Function</span>
<span class="syntax-keyword">def</span> <span class="syntax-func">greet</span>(name, greeting=<span class="syntax-string">"Hello"</span>):
    <span class="syntax-keyword">return</span> <span class="syntax-string">f"{greeting}, {name}!"</span>

<span class="syntax-comment"># Lambda Function (Anonymous)</span>
multiply = <span class="syntax-keyword">lambda</span> x, y: x * y
<span class="syntax-func">print</span>(multiply(<span class="syntax-number">5</span>, <span class="syntax-number">4</span>)) <span class="syntax-comment"># 20</span></code></pre>

                    <h3 id="ref-oop">7. Object-Oriented Programming</h3>
                    <p>Classes map software objects to real-world entities.</p>
                    <pre><code><span class="syntax-keyword">class</span> <span class="syntax-func">Animal</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-func">__init__</span>(self, name):
        self.name = name
        
    <span class="syntax-keyword">def</span> <span class="syntax-func">speak</span>(self):
        <span class="syntax-keyword">pass</span>

<span class="syntax-keyword">class</span> <span class="syntax-func">Dog</span>(Animal): <span class="syntax-comment"># Inheritance</span>
    <span class="syntax-keyword">def</span> <span class="syntax-func">speak</span>(self):
        <span class="syntax-keyword">return</span> <span class="syntax-string">f"{self.name} says Woof!"</span>

dog = Dog(<span class="syntax-string">"Rex"</span>)
<span class="syntax-func">print</span>(dog.speak())</code></pre>

                    <h3 id="ref-errors">8. Error Handling</h3>
                    <p>Handle exceptions gracefully so your program doesn't crash unexpectedly.</p>
                    <pre><code><span class="syntax-keyword">try</span>:
    result = <span class="syntax-number">10</span> / <span class="syntax-number">0</span>
<span class="syntax-keyword">except</span> ZeroDivisionError:
    <span class="syntax-func">print</span>(<span class="syntax-string">"Cannot divide by zero!"</span>)
<span class="syntax-keyword">except</span> Exception <span class="syntax-keyword">as</span> e:
    <span class="syntax-func">print</span>(<span class="syntax-string">f"Unexpected error: {e}"</span>)
<span class="syntax-keyword">finally</span>:
    <span class="syntax-func">print</span>(<span class="syntax-string">"This runs no matter what."</span>)</code></pre>

                    <h3 id="ref-comprehensions">9. Comprehensions</h3>
                    <p>A concise way to create lists, dictionaries, or sets based on existing iterables.</p>
                    <pre><code><span class="syntax-comment"># List Comprehension: Create a list of squares</span>
squares = [x**<span class="syntax-number">2</span> <span class="syntax-keyword">for</span> x <span class="syntax-keyword">in</span> <span class="syntax-func">range</span>(<span class="syntax-number">5</span>)]
<span class="syntax-comment"># [0, 1, 4, 9, 16]</span>

<span class="syntax-comment"># Dict Comprehension</span>
square_dict = {x: x**<span class="syntax-number">2</span> <span class="syntax-keyword">for</span> x <span class="syntax-keyword">in</span> <span class="syntax-func">range</span>(<span class="syntax-number">5</span>)}
<span class="syntax-comment"># {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}</span></code></pre>
                </div>
            </div>
        </div>
    </div>
"""

start_marker = "<!-- REFERENCE MODAL -->"
end_marker = "<!-- Import Curriculum Data and App Engine -->"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

new_content = content[:start_idx] + modal_html + "\n    " + content[end_idx:]

with open("PythonAcademy/index.html", "w") as f:
    f.write(new_content)

print("Updated index.html modal!")
