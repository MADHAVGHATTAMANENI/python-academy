const CURRICULUM = [
    {
        id: "mod1",
        title: "Coding Foundations",
        lessons: [
            {
                id: "1.1",
                title: "Hello Python & The Print Statement",
                description: `
                    <p>Welcome to Python Academy! Python is a high-level, readable, and incredibly powerful programming language used by top tech companies like Google, Meta, and Netflix for web apps, artificial intelligence, data science, and more.</p>
                    <p>In programming, the first thing we learn is how to output text to the screen. In Python, this is done using the <code>print()</code> statement.</p>
                    <h3>Syntax</h3>
                    <p>To print text, you place the text inside matching quotation marks (either single <code>'</code> or double <code>"</code>) inside the parentheses:</p>
                    <pre><code>print("Hello, World!")</code></pre>
                    <div class="callout">
                        <div class="callout-title"><i class="fa-solid fa-triangle-exclamation"></i> Syntax Note</div>
                        Python is case-sensitive! <code>print</code> must be all lowercase. Writing <code>Print</code> or <code>PRINT</code> will result in an error.
                    </div>
                `,
                sampleCode: `# This is a comment. Python ignores lines starting with '#'
print("Hello, Python learner!")
print('Single quotes work too!')`,
                hint: "Write: print(\"Learning Python is fun!\") exactly as shown.",
                exercise: {
                    instruction: "Use the <code>print()</code> function to output the exact sentence: <code>Learning Python is fun!</code>",
                    starterCode: `# Write your print statement below this line
`,
                    tests: `
import json
tests_passed = False
results = []
try:
    # We will check if the stdout captured from Pyodide matches
    # Since stdout is checked in app.js, we also do a basic check here.
    tests_passed = True
    results.append({"name": "Syntax Check", "success": True, "got": "Compiled", "expected": "Compiled"})
except Exception as e:
    results.append({"name": "Execution Check", "success": False, "got": str(e), "expected": "Successful run"})

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "What function is used to output text to the screen in Python?",
                        options: ["output()", "display()", "print()", "write()"],
                        answerIndex: 2
                    },
                    {
                        question: "Which of the following is a valid print statement in Python?",
                        options: ["print(Hello World)", "print 'Hello World'", "print(\"Hello World\")", "Print(\"Hello World\")"],
                        answerIndex: 2
                    },
                    {
                        question: "How does Python treat comments starting with '#'",
                        options: ["It executes them as fast code", "It completely ignores them", "It prints them to the terminal", "It throws an error"],
                        answerIndex: 1
                    }
                ]
            },
            {
                id: "1.2",
                title: "Variables & Data Types",
                description: `
                    <p>A <strong>variable</strong> is a labeled container used to store data in computer memory. You can think of it like a storage box with a label on it.</p>
                    <p>In Python, you create a variable simply by assigning a value to a label using the equals sign (<code>=</code>):</p>
                    <pre><code>x = 5
name = "Alice"</code></pre>
                    <h3>Basic Data Types</h3>
                    <ul>
                        <li><strong>String (str)</strong>: Text values enclosed in quotes. E.g., <code>"Python"</code></li>
                        <li><strong>Integer (int)</strong>: Whole numbers without decimals. E.g., <code>42</code>, <code>-7</code></li>
                        <li><strong>Float (float)</strong>: Decimals. E.g., <code>3.14</code>, <code>0.001</code></li>
                        <li><strong>Boolean (bool)</strong>: Logical values. E.g., <code>True</code> or <code>False</code></li>
                    </ul>
                `,
                sampleCode: `user_name = "Charlie"
user_age = 30
is_active = True
score = 94.5

print(user_name)
print(type(user_age))  # type() tells you the variable type`,
                hint: "Assign name = \"Pythonist\", age = 25, and is_programmer = True. Pay attention to spelling and capital letters for True/False.",
                exercise: {
                    instruction: `Create three variables:
                    <ol>
                        <li><code>name</code> set to the string <code>"Pythonist"</code></li>
                        <li><code>age</code> set to the integer <code>25</code></li>
                        <li><code>is_programmer</code> set to the boolean value <code>True</code></li>
                    </ol>`,
                    starterCode: `# Declare your three variables here
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

# Check 'name'
try:
    run_test("name exists", 'name' in globals(), 'name' in globals(), True)
    if 'name' in globals():
        run_test("name is 'Pythonist'", name == "Pythonist", name, "Pythonist")
        run_test("name is type str", isinstance(name, str), type(name), "<class 'str'>")
except Exception as e:
    run_test("name Check Error", False, str(e), "No errors")

# Check 'age'
try:
    run_test("age exists", 'age' in globals(), 'age' in globals(), True)
    if 'age' in globals():
        run_test("age is 25", age == 25, age, 25)
        run_test("age is type int", isinstance(age, int) and not isinstance(age, bool), type(age), "<class 'int'>")
except Exception as e:
    run_test("age Check Error", False, str(e), "No errors")

# Check 'is_programmer'
try:
    run_test("is_programmer exists", 'is_programmer' in globals(), 'is_programmer' in globals(), True)
    if 'is_programmer' in globals():
        run_test("is_programmer is True", is_programmer is True, is_programmer, True)
        run_test("is_programmer is type bool", isinstance(is_programmer, bool), type(is_programmer), "<class 'bool'>")
except Exception as e:
    run_test("is_programmer Check Error", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "Which operator is used to assign a value to a variable?",
                        options: ["==", "=", ":=", "->"],
                        answerIndex: 1
                    },
                    {
                        question: "What is the data type of the value 42.0?",
                        options: ["int", "float", "double", "decimal"],
                        answerIndex: 1
                    },
                    {
                        question: "How do you write boolean values in Python?",
                        options: ["true and false", "True and False", "1 and 0", "yes and no"],
                        answerIndex: 1
                    }
                ]
            },
            {
                id: "1.3",
                title: "Math & Basic Arithmetic Operators",
                description: `
                    <p>Python makes it very easy to perform math calculations. You can use standard arithmetic operators:</p>
                    <ul>
                        <li><code>+</code> Addition</li>
                        <li><code>-</code> Subtraction</li>
                        <li><code>*</code> Multiplication</li>
                        <li><code>/</code> Division (always returns a float!)</li>
                        <li><code>//</code> Floor Division (rounds down to the nearest integer)</li>
                        <li><code>%</code> Modulo (returns the remainder of a division)</li>
                        <li><code>**</code> Exponentiation (raising to a power)</li>
                    </ul>
                `,
                sampleCode: `a = 10
b = 3

print("Addition:", a + b)
print("Division:", a / b)
print("Floor Division:", a // b)
print("Remainder (Modulo):", a % b)
print("Exponent:", a ** b)  # 10 raised to the power of 3`,
                hint: "Assign variables sum_val = a + b, diff_val = a - b, prod_val = a * b, div_val = a / b.",
                exercise: {
                    instruction: `We have provided two variables <code>a</code> and <code>b</code>. Do not delete them. Calculate their arithmetic solutions and assign them to:
                    <ul>
                        <li><code>sum_val</code>: a plus b</li>
                        <li><code>diff_val</code>: a minus b</li>
                        <li><code>prod_val</code>: a multiplied by b</li>
                        <li><code>div_val</code>: a divided by b (float division)</li>
                    </ul>`,
                    starterCode: `a = 15
b = 4

# Write your equations below
sum_val = 0
diff_val = 0
prod_val = 0
div_val = 0
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

try:
    run_test("sum_val is 19", sum_val == 19, sum_val, 19)
    run_test("diff_val is 11", diff_val == 11, diff_val, 11)
    run_test("prod_val is 60", prod_val == 60, prod_val, 60)
    run_test("div_val is 3.75", div_val == 3.75, div_val, 3.75)
except Exception as e:
    run_test("Calculation check", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "What is the output of 5 ** 2 in Python?",
                        options: ["10", "25", "7", "32"],
                        answerIndex: 1
                    },
                    {
                        question: "Which operator is used to calculate the remainder of division?",
                        options: ["/", "//", "%", "rem"],
                        answerIndex: 2
                    },
                    {
                        question: "What does 9 // 2 return?",
                        options: ["4.5", "5", "4", "1"],
                        answerIndex: 2
                    }
                ]
            }
        ]
    },
    {
        id: "mod2",
        title: "Decision Making & Loops",
        lessons: [
            {
                id: "2.1",
                title: "Conditional Statements (If, Elif, Else)",
                description: `
                    <p>Programs need to make decisions. In Python, we use <code>if</code>, <code>elif</code> (else-if), and <code>else</code> blocks to run code conditionally.</p>
                    <p>To check conditions, we use **comparison operators**: 
                    <code>&gt;</code> (greater than), <code>&lt;</code> (less than), <code>==</code> (equal to), <code>!=</code> (not equal to), <code>&gt;=</code>, and <code>&lt;=</code>.</p>
                    <h3>Indentation is Critical!</h3>
                    <p>Unlike other languages that use brackets <code>{}</code>, Python uses **indentation** (usually 4 spaces) to mark which lines of code belong to which conditional block.</p>
                    <pre><code>age = 18
if age >= 18:
    print("You are an adult!")
else:
    print("You are a minor.")</code></pre>
                `,
                sampleCode: `num = -5

if num > 0:
    print("The number is positive.")
elif num < 0:
    print("The number is negative.")
else:
    print("The number is exactly zero.")`,
                hint: "Your function should check if n is greater than 0, less than 0, or equal to 0, and return the correct string.",
                exercise: {
                    instruction: `Write a function named <code>check_number(n)</code> that takes a number <code>n</code> and:
                    <ul>
                        <li>Returns the string <code>"Positive"</code> if <code>n</code> is greater than 0</li>
                        <li>Returns the string <code>"Negative"</code> if <code>n</code> is less than 0</li>
                        <li>Returns the string <code>"Zero"</code> if <code>n</code> is exactly 0</li>
                    </ul>`,
                    starterCode: `def check_number(n):
    # Write your logic here
    pass
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

try:
    run_test("check_number exists", 'check_number' in globals(), 'check_number' in globals(), True)
    if 'check_number' in globals():
        res1 = check_number(10)
        run_test("check_number(10) -> 'Positive'", res1 == "Positive", res1, "Positive")
        res2 = check_number(-5)
        run_test("check_number(-5) -> 'Negative'", res2 == "Negative", res2, "Negative")
        res3 = check_number(0)
        run_test("check_number(0) -> 'Zero'", res3 == "Zero", res3, "Zero")
except Exception as e:
    run_test("Function check", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "How does Python define the scope of code blocks (e.g. inside an if-statement)?",
                        options: ["Using curly braces {}", "Using parentheses ()", "Using indentation (spaces/tabs)", "Using keywords 'begin' and 'end'"],
                        answerIndex: 2
                    },
                    {
                        question: "What is the equivalent of 'else if' in Python?",
                        options: ["elseif", "elif", "else_if", "case"],
                        answerIndex: 1
                    },
                    {
                        question: "What is the comparison operator for checking equality?",
                        options: ["=", "==", "===", "eq"],
                        answerIndex: 1
                    }
                ]
            },
            {
                id: "2.2",
                title: "While Loops",
                description: `
                    <p>Loops are used to execute a block of code repeatedly. A <code>while</code> loop continues executing as long as a specified condition remains <code>True</code>.</p>
                    <pre><code>count = 1
while count <= 5:
    print(count)
    count = count + 1  # Increments count by 1</code></pre>
                    <div class="callout tip">
                        <div class="callout-title"><i class="fa-regular fa-lightbulb"></i> Infinite Loops</div>
                        Be careful! If the loop's condition never becomes False, the program will run forever. Ensure your loop makes progress toward a terminating condition.
                    </div>
                `,
                sampleCode: `# Countdown example
timer = 3
while timer > 0:
    print("T-minus", timer)
    timer -= 1  # Shortcut for: timer = timer - 1
print("Blast off! 🚀")`,
                hint: "Create a variable to store the sum (starts at 0) and another for the current number (starts at 1). Increment the counter until it exceeds n.",
                exercise: {
                    instruction: "Write a function <code>sum_up_to(n)</code> that takes a positive integer <code>n</code> and calculates the sum of all integers from 1 up to and including <code>n</code> using a <code>while</code> loop. E.g. <code>sum_up_to(5)</code> should calculate <code>1 + 2 + 3 + 4 + 5 = 15</code> and return 15.",
                    starterCode: `def sum_up_to(n):
    total = 0
    # Write a while loop to add numbers from 1 to n to 'total'
    
    return total
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

try:
    run_test("sum_up_to exists", 'sum_up_to' in globals(), 'sum_up_to' in globals(), True)
    if 'sum_up_to' in globals():
        res1 = sum_up_to(5)
        run_test("sum_up_to(5) is 15", res1 == 15, res1, 15)
        res2 = sum_up_to(10)
        run_test("sum_up_to(10) is 55", res2 == 55, res2, 55)
        res3 = sum_up_to(1)
        run_test("sum_up_to(1) is 1", res3 == 1, res3, 1)
except Exception as e:
    run_test("Loop Check Error", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "What statement can be used to stop a loop immediately, even if the condition is still True?",
                        options: ["stop", "break", "exit", "terminate"],
                        answerIndex: 1
                    },
                    {
                        question: "What happens if a while loop's condition is False from the very beginning?",
                        options: ["It runs once", "It runs forever", "It is skipped completely", "It raises a syntax error"],
                        answerIndex: 2
                    },
                    {
                        question: "What is the shortcut operator to add 1 to a variable 'x'?",
                        options: ["x++", "x += 1", "x =+ 1", "x.add(1)"],
                        answerIndex: 1
                    }
                ]
            },
            {
                id: "2.3",
                title: "For Loops & Range",
                description: `
                    <p>A <code>for</code> loop is used to iterate over a sequence (such as a list of items, characters in a string, or a range of numbers).</p>
                    <p>The <code>range(start, stop, step)</code> function is commonly used to generate sequences of numbers. Note: the loop stops <strong>before</strong> the stop number is reached.</p>
                    <pre><code># Prints numbers 0, 1, 2, 3, 4
for i in range(5):
    print(i)</code></pre>
                `,
                sampleCode: `# Iterate over a sequence of numbers starting at 1 up to 10 by steps of 2
for number in range(1, 11, 2):
    print("Odd number:", number)

# Loop through characters in a string
for char in "Python":
    print("Letter:", char)`,
                hint: "Initialize count = 0. Iterate through each element in 'numbers' using a for loop. Check if `num % 2 == 0`, and if so, increment count.",
                exercise: {
                    instruction: "Write a function <code>count_evens(numbers)</code> that takes a list of integers named <code>numbers</code> and returns the total count of **even numbers** in that list using a <code>for</code> loop.",
                    starterCode: `def count_evens(numbers):
    count = 0
    # Loop through 'numbers' using a for loop
    
    return count
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

try:
    run_test("count_evens exists", 'count_evens' in globals(), 'count_evens' in globals(), True)
    if 'count_evens' in globals():
        res1 = count_evens([1, 2, 3, 4, 5, 6])
        run_test("count_evens([1, 2, 3, 4, 5, 6]) -> 3", res1 == 3, res1, 3)
        res2 = count_evens([1, 3, 5, 7])
        run_test("count_evens([1, 3, 5, 7]) -> 0", res2 == 0, res2, 0)
        res3 = count_evens([10, -2, 4, 0, 9])
        run_test("count_evens([10, -2, 4, 0, 9]) -> 4", res3 == 4, res3, 4)
except Exception as e:
    run_test("For Loop Check Error", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "What values will range(1, 4) generate?",
                        options: ["1, 2, 3, 4", "1, 2, 3", "2, 3, 4", "1, 3"],
                        answerIndex: 1
                    },
                    {
                        question: "Which keyword is used to skip the rest of the code in the current iteration and move to the next loop cycle?",
                        options: ["skip", "break", "continue", "pass"],
                        answerIndex: 2
                    },
                    {
                        question: "What sequence is generated by range(0, 10, 5)?",
                        options: ["0, 5", "0, 5, 10", "5, 10", "1, 2, 3, 4, 5, 6, 7, 8, 9"],
                        answerIndex: 0
                    }
                ]
            }
        ]
    },
    {
        id: "mod3",
        title: "Functions & Scope",
        lessons: [
            {
                id: "3.1",
                title: "Defining Functions & Return Values",
                description: `
                    <p>A <strong>function</strong> is a reusable block of organized code designed to perform a single, related action. Functions help make our programs modular and prevent repeating code.</p>
                    <p>Functions are defined using the <code>def</code> keyword, followed by the function name, parentheses <code>()</code> containing parameters, and a colon <code>:</code>.</p>
                    <pre><code>def greet(name):
    return "Hello, " + name + "!"</code></pre>
                    <div class="callout warning">
                        <div class="callout-title"><i class="fa-solid fa-triangle-exclamation"></i> print() vs. return</div>
                        <code>print()</code> writes text to the console display. <code>return</code> exits the function and sends a data value back to whatever code called it. Do not confuse the two!
                    </div>
                `,
                sampleCode: `def add_numbers(x, y):
    result = x + y
    return result

# Call the function and store output in a variable
val = add_numbers(5, 7)
print("The sum is:", val)`,
                hint: "Implement returning weight_kg / (height_m ** 2).",
                exercise: {
                    instruction: "Write a function <code>calculate_bmi(weight_kg, height_m)</code> that takes a person's weight in kilograms and height in meters, calculates their Body Mass Index (BMI) using the formula: <code>BMI = weight / (height ** 2)</code>, and **returns** the calculated BMI value.",
                    starterCode: `def calculate_bmi(weight_kg, height_m):
    # Calculate BMI and return it
    pass
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

try:
    run_test("calculate_bmi exists", 'calculate_bmi' in globals(), 'calculate_bmi' in globals(), True)
    if 'calculate_bmi' in globals():
        res1 = calculate_bmi(70, 1.75)
        expected1 = 70 / (1.75 ** 2)
        run_test("calculate_bmi(70, 1.75) -> 22.86", abs(res1 - expected1) < 0.001, res1, expected1)
        
        res2 = calculate_bmi(50, 1.60)
        expected2 = 50 / (1.60 ** 2)
        run_test("calculate_bmi(50, 1.60) -> 19.53", abs(res2 - expected2) < 0.001, res2, expected2)
except Exception as e:
    run_test("Function Test Error", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "Which keyword is used to define a function in Python?",
                        options: ["func", "function", "def", "define"],
                        answerIndex: 2
                    },
                    {
                        question: "What is the purpose of the return statement?",
                        options: ["To write text to the console", "To send a value back to the caller and stop the function", "To import a library", "To restart the function"],
                        answerIndex: 1
                    },
                    {
                        question: "What will a function return if there is no explicit return statement?",
                        options: ["0", "False", "None", "An empty string"],
                        answerIndex: 2
                    }
                ]
            },
            {
                id: "3.2",
                title: "Variable Scope (Local vs. Global)",
                description: `
                    <p>Not all variables are accessible from everywhere in a program. The parts of a program where a variable is accessible is called its <strong>scope</strong>.</p>
                    <ul>
                        <li><strong>Local Variables</strong>: Variables created inside a function. They only exist inside that function and cannot be accessed from outside.</li>
                        <li><strong>Global Variables</strong>: Variables created in the main body of the script. They can be read from anywhere, including inside functions.</li>
                    </ul>
                    <pre><code>x = 10  # Global

def func():
    y = 5  # Local
    print(x)  # Works (reading global)
    
func()
print(y)  # NameError! y does not exist here</code></pre>
                `,
                sampleCode: `score = 100  # Global variable

def update_score():
    global score  # Use the 'global' keyword to modify a global variable
    score = score + 5

update_score()
print(score)  # score is now 105`,
                hint: "Inside increase_counter, write global counter, then increment it counter += 1.",
                exercise: {
                    instruction: "We have provided a global variable <code>counter</code> set to 0. Write a function <code>increase_counter()</code> that uses the <code>global</code> keyword to increment this global <code>counter</code> variable by 1.",
                    starterCode: `counter = 0

def increase_counter():
    # Use global keyword to modify 'counter'
    pass
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

try:
    run_test("increase_counter exists", 'increase_counter' in globals(), 'increase_counter' in globals(), True)
    if 'increase_counter' in globals():
        global counter
        counter = 0
        increase_counter()
        run_test("Counter is 1 after first call", counter == 1, counter, 1)
        increase_counter()
        run_test("Counter is 2 after second call", counter == 2, counter, 2)
except Exception as e:
    run_test("Scope Check Error", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "What is a local variable?",
                        options: ["A variable declared outside any functions", "A variable that can only be used inside the function where it is created", "A variable that is imported from a module", "A variable that stores numerical values only"],
                        answerIndex: 1
                    },
                    {
                        question: "What keyword allows you to modify a global variable inside a function?",
                        options: ["global", "outer", "public", "nonlocal"],
                        answerIndex: 0
                    },
                    {
                        question: "What error occurs if you try to read a local variable from outside its function?",
                        options: ["TypeError", "ValueError", "NameError", "SyntaxError"],
                        answerIndex: 2
                    }
                ]
            }
        ]
    },
    {
        id: "mod4",
        title: "Core Data Structures",
        lessons: [
            {
                id: "4.1",
                title: "Lists",
                description: `
                    <p>A <strong>List</strong> is a collection of ordered, mutable (changeable) elements. Lists are written with square brackets <code>[]</code> and values are separated by commas.</p>
                    <h3>Common Actions</h3>
                    <ul>
                        <li><strong>Indexing</strong>: Access elements starting at index <code>0</code>. E.g. <code>my_list[0]</code>. Negatives index from the end: <code>my_list[-1]</code>.</li>
                        <li><strong>Slicing</strong>: Access sub-lists with <code>my_list[start:stop]</code>.</li>
                        <li><strong>Modifying</strong>: Use <code>.append(item)</code> to add to the end, <code>.insert(idx, item)</code> to insert, and <code>.pop()</code> or <code>.remove(item)</code> to delete.</li>
                    </ul>
                `,
                sampleCode: `fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print("First item:", fruits[0])
print("Last item:", fruits[-1])
print("List length:", len(fruits))`,
                hint: "Initialize min_val and max_val as the first item of list (lst[0]), then loop through the rest to update them. Or return (min(lst), max(lst)).",
                exercise: {
                    instruction: "Write a function <code>get_extremes(lst)</code> that takes a non-empty list of numbers <code>lst</code> and returns a tuple containing the minimum and maximum values in the format: <code>(minimum, maximum)</code>.",
                    starterCode: `def get_extremes(lst):
    # Find the min and max values and return them as (min, max)
    pass
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

try:
    run_test("get_extremes exists", 'get_extremes' in globals(), 'get_extremes' in globals(), True)
    if 'get_extremes' in globals():
        res1 = get_extremes([4, 2, 9, 7, 1])
        run_test("get_extremes([4, 2, 9, 7, 1]) -> (1, 9)", res1 == (1, 9), res1, (1, 9))
        res2 = get_extremes([-5, 0, 10, -20])
        run_test("get_extremes([-5, 0, 10, -20]) -> (-20, 10)", res2 == (-20, 10), res2, (-20, 10))
        res3 = get_extremes([42])
        run_test("get_extremes([42]) -> (42, 42)", res3 == (42, 42), res3, (42, 42))
except Exception as e:
    run_test("List Extremes Test Error", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "What is the index of the first item in a Python list?",
                        options: ["1", "0", "-1", "Index starts arbitrarily"],
                        answerIndex: 1
                    },
                    {
                        question: "Which method is used to add an item to the end of a list?",
                        options: ["add()", "push()", "insert()", "append()"],
                        answerIndex: 3
                    },
                    {
                        question: "What is returned by list values expression my_list[-1]?",
                        options: ["The first element", "An empty list", "The last element", "A copy of the list backwards"],
                        answerIndex: 2
                    }
                ]
            },
            {
                id: "4.2",
                title: "Dictionaries",
                description: `
                    <p>A <strong>Dictionary</strong> is a collection of key-value pairs. Think of it like a real dictionary or phone book: you search for a unique "key" (word) to get its "value" (definition).</p>
                    <p>Dictionaries are unordered, mutable, and written with curly braces <code>{}</code>.</p>
                    <pre><code>phone_book = {
    "Alice": "555-0199",
    "Bob": "555-0143"
}
print(phone_book["Alice"])  # outputs 555-0199</code></pre>
                `,
                sampleCode: `user = {
    "username": "coder99",
    "level": 5,
    "skills": ["python", "javascript"]
}

# Modifying and adding keys
user["level"] = 6
user["email"] = "coder99@example.com"
print(user)`,
                hint: "Split the sentence into words using text.split(). Then loop through each word, incrementing its key in a dictionary count = {}.",
                exercise: {
                    instruction: "Write a function <code>word_count(text)</code> that takes a string of words separated by spaces (named <code>text</code>) and returns a dictionary counting the occurrences of each word. Ignore case by converting text to lowercase first.",
                    starterCode: `def word_count(text):
    words = text.lower().split()
    counts = {}
    # Count frequencies of each word
    
    return counts
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

try:
    run_test("word_count exists", 'word_count' in globals(), 'word_count' in globals(), True)
    if 'word_count' in globals():
        res1 = word_count("hello world hello")
        run_test("word_count('hello world hello') key count", len(res1) == 2, len(res1), 2)
        run_test("hello frequency", res1.get("hello") == 2, res1.get("hello"), 2)
        run_test("world frequency", res1.get("world") == 1, res1.get("world"), 1)
        
        res2 = word_count("Python is great and Python is fun")
        run_test("python freq case insensitive", res2.get("python") == 2, res2.get("python"), 2)
        run_test("fun freq", res2.get("fun") == 1, res2.get("fun"), 1)
except Exception as e:
    run_test("Dict Check Error", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "Which of the following describes a key in a dictionary?",
                        options: ["Must be mutable", "Must be unique", "Must be an integer", "Can have duplicate values"],
                        answerIndex: 1
                    },
                    {
                        question: "How do you access the value associated with key 'age' in a dictionary 'd'?",
                        options: ["d('age')", "d['age']", "d.age", "d{-age-}"],
                        answerIndex: 1
                    },
                    {
                        question: "What method returns a collection of all keys in a dictionary?",
                        options: ["d.keys()", "d.get_keys()", "d.list()", "d.names()"],
                        answerIndex: 0
                    }
                ]
            }
        ]
    },
    {
        id: "mod5",
        title: "Object-Oriented Programming",
        lessons: [
            {
                id: "5.1",
                title: "Classes & Objects",
                description: `
                    <p>Object-Oriented Programming (OOP) is a coding paradigm where you structure code around <strong>Objects</strong> that group related data (attributes) and behaviors (methods).</p>
                    <ul>
                        <li><strong>Class</strong>: A blueprint or template for creating objects.</li>
                        <li><strong>Object</strong>: An instance of a class.</li>
                    </ul>
                    <p>The <code>__init__</code> method is a special method called a **constructor**. It initializes new objects with starting values. The <code>self</code> parameter represents the specific object being created.</p>
                    <pre><code>class Dog:
    def __init__(self, name):
        self.name = name  # Attribute
        
    def bark(self):  # Method
        return self.name + " says Woof!"</code></pre>
                `,
                sampleCode: `class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score
        
    def passes(self):
        return self.score >= 50

s1 = Student("Dave", 85)
s2 = Student("Emma", 45)
print(s1.name, "passes:", s1.passes())
print(s2.name, "passes:", s2.passes())`,
                hint: "Define class Car. In __init__(self, make, model, year), assign these to self.make, self.model, self.year. In get_description(self), return f\"{self.year} {self.make} {self.model}\".",
                exercise: {
                    instruction: `Create a class named <code>Car</code>. It should have:
                    <ol>
                        <li>An constructor <code>__init__(self, make, model, year)</code> to initialize attributes <code>make</code>, <code>model</code>, and <code>year</code></li>
                        <li>A method <code>get_description(self)</code> that returns a string formatted exactly as: <code>"year make model"</code> (e.g. <code>"2020 Tesla Model 3"</code>)</li>
                    </ol>`,
                    starterCode: `class Car:
    # Define constructor and get_description method
    pass
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

try:
    run_test("Car class exists", 'Car' in globals(), 'Car' in globals(), True)
    if 'Car' in globals():
        my_car = Car("Toyota", "Corolla", 2018)
        run_car = my_car.get_description()
        run_test("make assigned", my_car.make == "Toyota", my_car.make, "Toyota")
        run_test("model assigned", my_car.model == "Corolla", my_car.model, "Corolla")
        run_test("year assigned", my_car.year == 2018, my_car.year, 2018)
        run_test("get_description format", run_car == "2018 Toyota Corolla", run_car, "2018 Toyota Corolla")
except Exception as e:
    run_test("Class Check Error", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "What is a constructor in Python?",
                        options: ["A function that deletes objects", "The __init__ method that sets up initial attributes", "A loop that builds class systems", "A module compiler"],
                        answerIndex: 1
                    },
                    {
                        question: "What does the 'self' parameter represent in a class method?",
                        options: ["The class itself", "A private global variable", "The specific object instance calling the method", "The python interpreter"],
                        answerIndex: 2
                    },
                    {
                        question: "Which keyword is used to create a class?",
                        options: ["def", "object", "struct", "class"],
                        answerIndex: 3
                    }
                ]
            }
        ]
    },
    {
        id: "mod6",
        title: "Intermediate Python Concepts",
        lessons: [
            {
                id: "6.1",
                title: "Exceptions (Try / Except)",
                description: `
                    <p>Errors happen. Program errors in Python are called <strong>Exceptions</strong>. If exceptions are not handled, the program will crash.</p>
                    <p>We use <code>try</code> and <code>except</code> blocks to handle exceptions gracefully, keeping our program running.</p>
                    <pre><code>try:
    x = 1 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")</code></pre>
                `,
                sampleCode: `# Attempting to convert bad user input
input_str = "abc"

try:
    num = int(input_str)
    print("Number is:", num)
except ValueError:
    print("Error: Could not convert text to an integer.")`,
                hint: "Use try: return a / b, except ZeroDivisionError: return None.",
                exercise: {
                    instruction: "Write a function <code>safe_divide(a, b)</code> that performs division <code>a / b</code> and returns the result. If a division by zero error occurs (<code>ZeroDivisionError</code>), catch it and return <code>None</code>.",
                    starterCode: `def safe_divide(a, b):
    # Use try/except to divide a by b
    pass
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

try:
    run_test("safe_divide exists", 'safe_divide' in globals(), 'safe_divide' in globals(), True)
    if 'safe_divide' in globals():
        res1 = safe_divide(10, 2)
        run_test("safe_divide(10, 2) -> 5.0", res1 == 5.0, res1, 5.0)
        res2 = safe_divide(10, 0)
        run_test("safe_divide(10, 0) -> None", res2 is None, res2, None)
except Exception as e:
    run_test("Exception Test Error", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "What block is used to enclose code that might cause an error?",
                        options: ["try", "catch", "except", "error"],
                        answerIndex: 0
                    },
                    {
                        question: "Which block is executed always at the end, whether an error occurred or not?",
                        options: ["else", "finally", "except", "end"],
                        answerIndex: 1
                    },
                    {
                        question: "What exception occurs when accessing a dictionary key that doesn't exist?",
                        options: ["IndexError", "ValueError", "KeyError", "NameError"],
                        answerIndex: 2
                    }
                ]
            }
        ]
    },
    {
        id: "mod7",
        title: "Data Structures & Algorithms (DSA)",
        lessons: [
            {
                id: "7.1",
                title: "Introduction to DSA & Big O Notation",
                description: `
                    <p>Now that you know Python, welcome to the professional stage! <strong>Data Structures</strong> are ways to store and organize data in a computer, and <strong>Algorithms</strong> are step-by-step instructions to solve problems.</p>
                    <p>To measure the efficiency of algorithms, we use <strong>Big O Notation</strong>, which measures how running time or memory usage scales as the input size (N) grows.</p>
                    <h3>Common Time Complexities</h3>
                    <ul>
                        <li><strong>O(1) - Constant Time</strong>: Runs in the same time regardless of size. E.g., getting a list item by index.</li>
                        <li><strong>O(N) - Linear Time</strong>: Time grows directly with input size. E.g., searching a list element by element.</li>
                        <li><strong>O(N²) - Quadratic Time</strong>: Slow, usually nested loops. E.g., bubble sort.</li>
                        <li><strong>O(log N) - Logarithmic Time</strong>: Fast, cuts search space in half. E.g., binary search.</li>
                    </ul>
                `,
                sampleCode: `# O(1) Example
def get_first(lst):
    return lst[0]

# O(N) Example
def find_sum(lst):
    total = 0
    for num in lst:
        total += num
    return total`,
                hint: "This lesson has no coding exercise, just press Submit to verify understanding of Big O!",
                exercise: {
                    instruction: "To pass this introductory lesson, write a function <code>dsa_ready()</code> that simply returns <code>True</code>.",
                    starterCode: `def dsa_ready():
    return True
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

try:
    run_test("dsa_ready exists", 'dsa_ready' in globals(), 'dsa_ready' in globals(), True)
    if 'dsa_ready' in globals():
        res = dsa_ready()
        run_test("dsa_ready() returns True", res is True, res, True)
except Exception as e:
    run_test("Intro Test Error", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "What does Big O notation measure?",
                        options: ["How many lines of code are written", "The speed of the CPU processor", "How running time or space scales with input size", "The size of a database"],
                        answerIndex: 2
                    },
                    {
                        question: "Which of the following time complexities is the most efficient for large inputs?",
                        options: ["O(N)", "O(1)", "O(N²)", "O(N log N)"],
                        answerIndex: 1
                    },
                    {
                        question: "If an algorithm has a nested loop where both loops run N times, what is the complexity?",
                        options: ["O(2N)", "O(N)", "O(N²)", "O(log N)"],
                        answerIndex: 2
                    }
                ]
            },
            {
                id: "7.2",
                title: "Linear Structures: Stacks",
                description: `
                    <p>A <strong>Stack</strong> is a linear data structure that follows the <strong>LIFO (Last In, First Out)</strong> principle. Think of it like a stack of plates: you place (push) new plates on top, and you remove (pop) plates from the top first.</p>
                    <h3>Core Methods</h3>
                    <ul>
                        <li><code>push(item)</code>: Add item to the top.</li>
                        <li><code>pop()</code>: Remove and return the top item.</li>
                        <li><code>peek()</code>: View the top item without removing it.</li>
                        <li><code>is_empty()</code>: Check if stack is empty.</li>
                    </ul>
                `,
                sampleCode: `# Python lists can easily act as stacks
stack = []
stack.append("plate1")  # push
stack.append("plate2")  # push
print("Popped:", stack.pop())  # pops plate2 (last in, first out)
print("Top item:", stack[-1])  # peek`,
                hint: "Use list methods. push is self.items.append(item). pop is self.items.pop() (check if empty!). peek is self.items[-1]. is_empty is len(self.items) == 0.",
                exercise: {
                    instruction: `Implement a <code>Stack</code> class using a Python list internally. It must support:
                    <ul>
                        <li><code>push(item)</code>: appends item to stack list</li>
                        <li><code>pop()</code>: removes and returns top item (return <code>None</code> if stack is empty)</li>
                        <li><code>peek()</code>: returns top item without removing (return <code>None</code> if stack is empty)</li>
                        <li><code>is_empty()</code>: returns boolean True if empty, False otherwise</li>
                    </ul>`,
                    starterCode: `class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        pass

    def pop(self):
        pass

    def peek(self):
        pass

    def is_empty(self):
        pass
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

try:
    run_test("Stack exists", 'Stack' in globals(), 'Stack' in globals(), True)
    if 'Stack' in globals():
        s = Stack()
        run_test("Initially empty", s.is_empty() is True, s.is_empty(), True)
        run_test("Pop on empty stack returns None", s.pop() is None, s.pop(), None)
        run_test("Peek on empty stack returns None", s.peek() is None, s.peek(), None)
        
        s.push(10)
        s.push(20)
        run_test("Not empty after push", s.is_empty() is False, s.is_empty(), False)
        run_test("Peek returns top (20)", s.peek() == 20, s.peek(), 20)
        
        pop1 = s.pop()
        run_test("Pop returns 20", pop1 == 20, pop1, 20)
        run_test("Peek after pop returns 10", s.peek() == 10, s.peek(), 10)
except Exception as e:
    run_test("Stack Test Error", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "What principle does a Stack follow?",
                        options: ["FIFO (First In, First Out)", "LIFO (Last In, First Out)", "LILO (Last In, Last Out)", "Random Selection"],
                        answerIndex: 1
                    },
                    {
                        question: "Which of the following actions represents 'peek' in a stack?",
                        options: ["Removing the top item", "Adding an item to the bottom", "Viewing the top item without removing it", "Clearing all items"],
                        answerIndex: 2
                    },
                    {
                        question: "What is the time complexity of pushing an element onto a stack?",
                        options: ["O(N)", "O(1)", "O(log N)", "O(N²)"],
                        answerIndex: 1
                    }
                ]
            },
            {
                id: "7.3",
                title: "Linked Lists",
                description: `
                    <p>In standard arrays/lists, items are stored side-by-side in continuous memory. A <strong>Linked List</strong> is different: it is a sequence of **Node** objects, where each node contains its **data** and a **pointer (next)** reference to the next node in the chain.</p>
                    <p>Linked lists are dynamic and let you insert or delete elements in O(1) time without restructuring the whole list, though searching elements is slower O(N).</p>
                    <pre><code>class Node:
    def __init__(self, data):
        self.data = data
        self.next = None  # Reference to next node</code></pre>
                `,
                sampleCode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Manual Linked List creation
head = Node(10)
second = Node(20)
head.next = second  # Node(10) -> Node(20) -> None

print("Head data:", head.data)
print("Second data:", head.next.data)`,
                hint: "In append: create Node(data). If head is None, set head = new_node. Otherwise, traverse to the last node (where temp.next is None) and set temp.next = new_node. In to_list: walk through temp = temp.next, appending temp.data to a python list.",
                exercise: {
                    instruction: `Complete the <code>LinkedList</code> class. Write these two methods:
                    <ul>
                        <li><code>append(data)</code>: appends a new Node containing <code>data</code> to the end of the linked list.</li>
                        <li><code>to_list()</code>: traverses the linked list and returns a normal Python list of all data elements.</li>
                    </ul>`,
                    starterCode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        # Create a Node and add it to the end of the list
        pass

    def to_list(self):
        # Return a Python list containing all node data in order
        result = []
        
        return result
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

try:
    run_test("LinkedList exists", 'LinkedList' in globals(), 'LinkedList' in globals(), True)
    if 'LinkedList' in globals():
        ll = LinkedList()
        run_test("Empty list as Python list", ll.to_list() == [], ll.to_list(), [])
        
        ll.append(5)
        run_test("List after single append", ll.to_list() == [5], ll.to_list(), [5])
        
        ll.append(10)
        ll.append(15)
        run_test("List after multiple appends", ll.to_list() == [5, 10, 15], ll.to_list(), [5, 10, 15])
except Exception as e:
    run_test("LinkedList Test Error", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "What is a node in a Linked List?",
                        options: ["An index lookup number", "An object containing data and a reference to the next node", "The terminal loop command", "A computer terminal hardware port"],
                        answerIndex: 1
                    },
                    {
                        question: "What is the time complexity of searching for an element in a singly linked list of size N?",
                        options: ["O(1)", "O(log N)", "O(N)", "O(N²)"],
                        answerIndex: 2
                    },
                    {
                        question: "What does the 'next' pointer of the last node in a linked list point to?",
                        options: ["The head node", "0", "None (or null)", "itself"],
                        answerIndex: 2
                    }
                ]
            },
            {
                id: "7.4",
                title: "Algorithms: Recursion & Binary Search",
                description: `
                    <p><strong>Recursion</strong> is a programming technique where a function calls itself. A recursive function must have two parts:</p>
                    <ol>
                        <li><strong>Base Case</strong>: The simple condition where the function stops calling itself. Without this, you get infinite loops (Stack Overflow!).</li>
                        <li><strong>Recursive Step</strong>: The function calls itself with a smaller input.</li>
                    </ol>
                    <p><strong>Binary Search</strong> is a highly efficient O(log N) algorithm to find a target in a **sorted** list. It works by checking the middle element, and slicing the search range in half each step.</p>
                `,
                sampleCode: `# Recursive countdown
def countdown(n):
    if n <= 0:  # Base Case
        print("Done!")
    else:
        print(n)
        countdown(n - 1)  # Recursive Step`,
                hint: "Initialize low = 0 and high = len(arr) - 1. While low <= high: mid = (low + high) // 2. If arr[mid] == target, return mid. If arr[mid] < target, low = mid + 1. Else high = mid - 1. Return -1.",
                exercise: {
                    instruction: "Write an iterative function <code>binary_search(arr, target)</code> that searches for a <code>target</code> value inside a sorted list <code>arr</code>. Return the **index** of the target if found, or <code>-1</code> if the target is not in the list.",
                    starterCode: `def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    
    # Write a while loop to perform binary search
    
    return -1
`,
                    tests: `
import json
tests_passed = True
results = []

def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({"name": name, "success": success, "got": str(got), "expected": str(expected)})

try:
    run_test("binary_search exists", 'binary_search' in globals(), 'binary_search' in globals(), True)
    if 'binary_search' in globals():
        arr = [1, 3, 5, 7, 9, 11]
        res1 = binary_search(arr, 5)
        run_test("binary_search(arr, 5) -> index 2", res1 == 2, res1, 2)
        
        res2 = binary_search(arr, 1)
        run_test("binary_search(arr, 1) -> index 0", res2 == 0, res2, 0)
        
        res3 = binary_search(arr, 11)
        run_test("binary_search(arr, 11) -> index 5", res3 == 5, res3, 5)
        
        res4 = binary_search(arr, 4)
        run_test("binary_search(arr, 4) -> -1 (not found)", res4 == -1, res4, -1)
except Exception as e:
    run_test("Binary Search Test Error", False, str(e), "No errors")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    {
                        question: "What is the crucial case that stops a recursive function from calling itself forever?",
                        options: ["Recursive Case", "Initial Case", "Base Case", "Crash Case"],
                        answerIndex: 2
                    },
                    {
                        question: "What requirement must a list meet to perform Binary Search on it?",
                        options: ["It must be empty", "It must contain unique elements only", "It must be sorted", "It must have a length of a power of 2"],
                        answerIndex: 2
                    },
                    {
                        question: "What is the time complexity of Binary Search?",
                        options: ["O(N)", "O(log N)", "O(N²)", "O(1)"],
                        answerIndex: 1
                    }
                ]
            }
        ]
    }
];
