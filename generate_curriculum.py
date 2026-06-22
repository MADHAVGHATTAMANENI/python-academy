import json
import re

# We will read the first part of the curriculum (Module 1) and append the rest.
with open("PythonAcademy/curriculum.js", "r") as f:
    lines = f.readlines()

# Extract lines up to the end of module 1
# module 1 ends right before module 2 starts
mod2_idx = 0
for i, line in enumerate(lines):
    if 'id: "mod2"' in line:
        mod2_idx = i - 1 # The curly brace before id: mod2
        break

header = "".join(lines[:mod2_idx])

# Now we define the JSON for Modules 2-7
modules_js = r"""    {
        id: "mod2",
        title: "Decision Making & Loops",
        lessons: [
            {
                id: "2.1",
                title: "Conditional Statements (If, Elif, Else)",
                description: `
                    <p>In programming, we often need to make decisions based on certain conditions. We use <code>if</code>, <code>elif</code> (else if), and <code>else</code> statements for this.</p>
                    <p>Python relies on <strong>indentation</strong> (spaces or tabs) to define blocks of code inside an if-statement.</p>
                    <pre><code>age = 18
if age >= 18:
    print("You can vote!")
elif age == 17:
    print("Next year!")
else:
    print("Too young.")</code></pre>
                `,
                sampleCode: `temperature = 25

if temperature > 30:
    print("It's a hot day")
elif temperature > 20:
    print("It's a nice day")
else:
    print("It's cold")`,
                hint: "Write an if/else block checking if age >= 18. Indent the print statements with 4 spaces.",
                exercise: {
                    instruction: "Create a variable <code>age = 20</code>. Write an <code>if</code> statement that prints <code>Adult movie ticket</code> if age is 18 or older, and an <code>else</code> statement that prints <code>Child movie ticket</code> if younger.",
                    starterCode: `# Define age and write your if/else statement below
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
    run_test("age exists", 'age' in globals(), 'age' in globals(), True)
    if 'age' in globals():
        run_test("age is 20", age == 20, age, 20)
except Exception as e:
    run_test("Variables error", False, str(e), "No error")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    { question: "Which keyword is used to check an alternative condition if the first 'if' fails?", options: ["else if", "elif", "elseif", "then"], answerIndex: 1 },
                    { question: "How does Python know which lines of code belong inside an if-statement?", options: ["Curly braces {}", "Parentheses ()", "Indentation (spaces)", "Semicolons ;"], answerIndex: 2 },
                    { question: "What is the output if x=5 and we check 'if x > 10'?", options: ["True", "False", "Error", "Nothing executes in the if-block"], answerIndex: 3 }
                ]
            },
            {
                id: "2.2",
                title: "While Loops",
                description: `
                    <p>A <strong>while loop</strong> executes a block of code repeatedly as long as a condition remains <code>True</code>.</p>
                    <pre><code>count = 3
while count > 0:
    print(count)
    count = count - 1
print("Go!")</code></pre>
                    <div class="callout">
                        <div class="callout-title"><i class="fa-solid fa-triangle-exclamation"></i> Infinite Loops</div>
                        If you forget to change the variable inside the loop (e.g., <code>count = count - 1</code>), the condition will always be true and the loop will run forever, crashing your program!
                    </div>
                `,
                sampleCode: `battery = 100

while battery > 0:
    print("Using device... battery at", battery)
    battery = battery - 20

print("Battery empty!")`,
                hint: "Initialize count = 5. Inside the while loop, print the count, then do count = count - 1.",
                exercise: {
                    instruction: "Write a <code>while</code> loop that starts with a variable <code>count = 5</code>, prints the count, and decreases it by 1 each time. The loop should stop when count reaches 0.",
                    starterCode: `# Write your countdown while loop here
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
    run_test("count exists", 'count' in globals(), 'count' in globals(), True)
    if 'count' in globals():
        run_test("count is 0 after loop", count == 0, count, 0)
except Exception as e:
    run_test("Execution error", False, str(e), "No error")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    { question: "When does a while loop stop executing?", options: ["When it reaches 10 iterations", "When the condition becomes False", "When you press Enter", "When the condition becomes True"], answerIndex: 1 },
                    { question: "What happens if a while loop condition never becomes False?", options: ["Syntax error", "Infinite loop (program freezes)", "It automatically stops after 100 times", "It skips the loop"], answerIndex: 1 },
                    { question: "Which statement decreases a variable x by 1?", options: ["x = x - 1", "x - 1", "x == 1", "decrease x"], answerIndex: 0 }
                ]
            },
            {
                id: "2.3",
                title: "For Loops & Range",
                description: `
                    <p>A <strong>for loop</strong> is used for iterating over a sequence (like a list, a string, or a range of numbers).</p>
                    <p>The <code>range(start, stop)</code> function generates numbers from 'start' up to, but not including, 'stop'.</p>
                    <pre><code># Prints 0, 1, 2, 3, 4
for i in range(5):
    print(i)</code></pre>
                `,
                sampleCode: `# Summing numbers from 1 to 5
total = 0
for num in range(1, 6):
    total = total + num
print("Total sum is:", total)`,
                hint: "Use `for i in range(1, 11):` to loop from 1 to 10 inclusive.",
                exercise: {
                    instruction: "Use a <code>for</code> loop and <code>range()</code> to calculate the sum of all numbers from 1 to 10 (inclusive). Store the final result in a variable called <code>total_sum</code>.",
                    starterCode: `total_sum = 0
# Write your for loop here
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
    run_test("total_sum exists", 'total_sum' in globals(), 'total_sum' in globals(), True)
    if 'total_sum' in globals():
        run_test("total_sum is correct", total_sum == 55, total_sum, 55)
except Exception as e:
    run_test("Execution error", False, str(e), "No error")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    { question: "What numbers will range(1, 4) generate?", options: ["1, 2, 3, 4", "1, 2, 3", "0, 1, 2, 3", "2, 3, 4"], answerIndex: 1 },
                    { question: "What does a for loop do?", options: ["Executes code forever", "Iterates over a sequence a specific number of times", "Makes decisions based on conditions", "Defines a variable"], answerIndex: 1 },
                    { question: "How many times will 'for i in range(10):' execute?", options: ["9", "11", "10", "Infinite"], answerIndex: 2 }
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
                    <p>A <strong>function</strong> is a reusable block of code that only runs when it is called. You can pass data (parameters) into a function, and a function can return data as a result.</p>
                    <p>We define a function using the <code>def</code> keyword.</p>
                    <pre><code>def greet(name):
    return "Hello " + name

message = greet("Alice")
print(message)</code></pre>
                `,
                sampleCode: `def square(number):
    return number * number

result = square(4)
print("The square of 4 is", result)`,
                hint: "Use `def calculate_area(length, width):` and use the `return` keyword.",
                exercise: {
                    instruction: "Define a function called <code>calculate_area</code> that takes two parameters: <code>length</code> and <code>width</code>. It should <code>return</code> the product of the two (length multiplied by width).",
                    starterCode: `# Define your function below
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
    run_test("calculate_area defined", 'calculate_area' in globals(), 'calculate_area' in globals(), True)
    if 'calculate_area' in globals():
        res = calculate_area(5, 4)
        run_test("calculate_area(5, 4) returns 20", res == 20, res, 20)
        res2 = calculate_area(10, 10)
        run_test("calculate_area(10, 10) returns 100", res2 == 100, res2, 100)
except Exception as e:
    run_test("Execution error", False, str(e), "No error")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    { question: "Which keyword is used to create a function in Python?", options: ["function", "def", "create", "func"], answerIndex: 1 },
                    { question: "What does the 'return' keyword do?", options: ["Prints to the screen", "Stops the program entirely", "Sends a value back from the function to the caller", "Restarts the loop"], answerIndex: 2 },
                    { question: "Variables listed inside the parentheses of a function definition are called:", options: ["Returns", "Loops", "Classes", "Parameters"], answerIndex: 3 }
                ]
            },
            {
                id: "3.2",
                title: "Variable Scope",
                description: `
                    <p><strong>Scope</strong> refers to the visibility of variables. A variable created inside a function belongs to the <em>local scope</em> of that function, and can only be used inside that function.</p>
                    <p>Variables created outside of a function are in the <em>global scope</em> and can be accessed anywhere.</p>
                `,
                sampleCode: `global_var = "I am global"

def test_scope():
    local_var = "I am local"
    print(global_var) # This works
    print(local_var)  # This works

test_scope()
# print(local_var) # This would crash! local_var doesn't exist here.`,
                hint: "Inside the function, declare a variable. Outside the function, declare another variable.",
                exercise: {
                    instruction: "Create a global variable called <code>message</code> with the value <code>\"Global\"</code>. Then define a function called <code>local_test()</code> that creates a local variable called <code>message</code> with the value <code>\"Local\"</code> and returns it.",
                    starterCode: `# Write global variable and function here
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
    run_test("message is 'Global'", globals().get('message') == "Global", globals().get('message'), "Global")
    if 'local_test' in globals():
        res = local_test()
        run_test("local_test() returns 'Local'", res == "Local", res, "Local")
        run_test("global message is still 'Global'", globals().get('message') == "Global", globals().get('message'), "Global")
except Exception as e:
    run_test("Execution error", False, str(e), "No error")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    { question: "What is a local variable?", options: ["A variable created outside any function", "A variable created inside a function", "A variable that cannot be changed", "A variable imported from the internet"], answerIndex: 1 },
                    { question: "Can a function read a global variable?", options: ["Yes", "No", "Only if it is an integer", "Only inside a while loop"], answerIndex: 0 },
                    { question: "What happens if you try to use a local variable outside its function?", options: ["It works normally", "It prints 0", "It causes a NameError", "It becomes a global variable automatically"], answerIndex: 2 }
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
                    <p>A <strong>List</strong> is a built-in data structure used to store multiple items in a single variable. Lists are ordered, changeable, and allow duplicate values.</p>
                    <p>Lists are written with square brackets <code>[]</code>.</p>
                    <pre><code>fruits = ["apple", "banana", "cherry"]
print(fruits[0]) # Output: apple
fruits.append("orange") # Adds orange to the end</code></pre>
                `,
                sampleCode: `scores = [85, 92, 78, 99]

# Accessing elements (0-indexed)
print("First score:", scores[0])
print("Last score:", scores[-1])

# Adding and removing
scores.append(100)
scores.pop(0) # removes the first item
print("Updated scores:", scores)`,
                hint: "Use `shopping_list.append(\"eggs\")` and `shopping_list.pop(0)`.",
                exercise: {
                    instruction: "Create a list called <code>shopping_list</code> containing <code>\"milk\"</code> and <code>\"bread\"</code>. Add <code>\"eggs\"</code> to the list. Then remove the first item (<code>\"milk\"</code>).",
                    starterCode: `# Create and modify shopping_list below
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
    run_test("shopping_list exists", 'shopping_list' in globals(), 'shopping_list' in globals(), True)
    if 'shopping_list' in globals():
        run_test("list has length 2", len(shopping_list) == 2, len(shopping_list), 2)
        run_test("list contents are correct", shopping_list == ["bread", "eggs"], shopping_list, "['bread', 'eggs']")
except Exception as e:
    run_test("Execution error", False, str(e), "No error")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    { question: "What index represents the FIRST item in a Python list?", options: ["1", "-1", "0", "first"], answerIndex: 2 },
                    { question: "Which method adds an item to the end of a list?", options: [".add()", ".append()", ".insert()", ".push()"], answerIndex: 1 },
                    { question: "What symbols are used to define a list?", options: ["{}", "()", "[]", "<>"], answerIndex: 2 }
                ]
            },
            {
                id: "4.2",
                title: "Dictionaries",
                description: `
                    <p>A <strong>Dictionary</strong> is a collection of key-value pairs. They are optimized for retrieving values when you know the key.</p>
                    <p>Dictionaries are written with curly brackets <code>{}</code>.</p>
                    <pre><code>user = {
    "name": "John",
    "age": 30
}
print(user["name"]) # Output: John</code></pre>
                `,
                sampleCode: `student = {
    "name": "Emma",
    "grade": "A",
    "passed": True
}

# Modifying a dictionary
student["grade"] = "A+"
student["age"] = 15 # Adds a new key-value pair

print(student)`,
                hint: "Use curly braces. Assign `user_profile = {\"username\": \"admin\", \"followers\": 100}`.",
                exercise: {
                    instruction: "Create a dictionary called <code>user_profile</code> with two keys: <code>\"username\"</code> (set to <code>\"admin\"</code>) and <code>\"followers\"</code> (set to <code>100</code>). Then, update <code>\"followers\"</code> to <code>101</code>.",
                    starterCode: `# Create and modify user_profile below
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
    run_test("user_profile exists", 'user_profile' in globals(), 'user_profile' in globals(), True)
    if 'user_profile' in globals():
        run_test("username is 'admin'", user_profile.get("username") == "admin", user_profile.get("username"), "admin")
        run_test("followers is 101", user_profile.get("followers") == 101, user_profile.get("followers"), 101)
except Exception as e:
    run_test("Execution error", False, str(e), "No error")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    { question: "What structure does a dictionary use to store data?", options: ["Numbered index", "Key-Value pairs", "Linked nodes", "Randomized order"], answerIndex: 1 },
                    { question: "What symbols are used to define a dictionary?", options: ["[]", "()", "{}", "<>"], answerIndex: 2 },
                    { question: "If dict = {'color': 'red'}, how do you get the value 'red'?", options: ["dict[0]", "dict.get(1)", "dict['color']", "dict['red']"], answerIndex: 2 }
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
                    <p>A <strong>Class</strong> is like an object constructor, or a "blueprint" for creating objects.</p>
                    <p>Almost everything in Python is an object, with its properties and methods. We use the <code>class</code> keyword to create a class.</p>
                    <pre><code>class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        return "Woof!"

my_dog = Dog("Rex")
print(my_dog.bark())</code></pre>
                `,
                sampleCode: `class Car:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color

    def describe(self):
        return f"This is a {self.color} {self.brand}."

car1 = Car("Toyota", "Red")
print(car1.describe())`,
                hint: "Define a class BankAccount with an `__init__(self, balance)` method. Save self.balance = balance.",
                exercise: {
                    instruction: "Create a class called <code>BankAccount</code>. It should have an <code>__init__</code> method that takes a <code>balance</code> and stores it as <code>self.balance</code>. Create an instance called <code>my_account</code> with a balance of <code>500</code>.",
                    starterCode: `# Define your class and instance below
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
    run_test("BankAccount class exists", 'BankAccount' in globals(), 'BankAccount' in globals(), True)
    run_test("my_account exists", 'my_account' in globals(), 'my_account' in globals(), True)
    if 'my_account' in globals():
        run_test("my_account.balance is 500", my_account.balance == 500, my_account.balance, 500)
except Exception as e:
    run_test("Execution error", False, str(e), "No error")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    { question: "What is a Class in Python?", options: ["A function that loops", "A blueprint for creating objects", "A built-in dictionary", "A syntax error"], answerIndex: 1 },
                    { question: "What is the purpose of the __init__ method?", options: ["It deletes the object", "It is called automatically when an object is created to initialize it", "It imports libraries", "It stops the program"], answerIndex: 1 },
                    { question: "What does 'self' refer to in a class method?", options: ["The Python interpreter", "The global scope", "The current instance of the object being manipulated", "The parent class"], answerIndex: 2 }
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
                    <p>When an error occurs, Python normally stops and generates an error message. These are called <strong>Exceptions</strong>.</p>
                    <p>You can handle these exceptions using the <code>try</code> and <code>except</code> blocks, preventing your program from crashing.</p>
                    <pre><code>try:
    print(10 / 0)
except ZeroDivisionError:
    print("You can't divide by zero!")</code></pre>
                `,
                sampleCode: `try:
    # Trying to convert letters to a number
    number = int("hello")
except ValueError:
    print("Caught a ValueError: that's not a number!")
    
print("Program continues running perfectly fine!")`,
                hint: "Use `try:` block to execute `result = 10 / 0`. Under it, use `except ZeroDivisionError:` to set `result = 0`.",
                exercise: {
                    instruction: "Use a <code>try</code> block to divide <code>10 / 0</code> and store it in <code>result</code>. Use an <code>except ZeroDivisionError:</code> block to catch the crash, and inside the except block, set <code>result = 0</code>.",
                    starterCode: `# Write your try/except block below
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
    run_test("result exists", 'result' in globals(), 'result' in globals(), True)
    if 'result' in globals():
        run_test("result is 0", result == 0, result, 0)
except Exception as e:
    run_test("Execution error", False, str(e), "No error")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    { question: "What is the purpose of a try/except block?", options: ["To make code run faster", "To handle errors gracefully without crashing the program", "To create a loop", "To define a class"], answerIndex: 1 },
                    { question: "Which block of code executes if NO error occurs in the 'try' block?", options: ["The except block", "The finally block", "Only the try block", "None of the above"], answerIndex: 2 },
                    { question: "What error is raised when you try to divide a number by 0?", options: ["ValueError", "SyntaxError", "NameError", "ZeroDivisionError"], answerIndex: 3 }
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
                title: "Introduction to DSA & Big O",
                description: `
                    <p><strong>Data Structures & Algorithms (DSA)</strong> is about how we store data efficiently, and the step-by-step logic we use to solve problems.</p>
                    <p><strong>Big O Notation</strong> is used to describe the performance or complexity of an algorithm. It describes the worst-case scenario execution time.</p>
                    <ul>
                        <li><code>O(1)</code>: Constant time. Extremely fast. (e.g., getting the first item in a list)</li>
                        <li><code>O(N)</code>: Linear time. Speed depends on data size. (e.g., looping through a list)</li>
                    </ul>
                `,
                sampleCode: `# O(1) Time Complexity
items = [10, 20, 30]
print(items[0]) # Instant, regardless of list size

# O(N) Time Complexity
for item in items:
    print(item) # Takes longer if the list has 1 million items`,
                hint: "Assign `big_o_constant = 'O(1)'` and `big_o_linear = 'O(N)'`.",
                exercise: {
                    instruction: "Create a variable called <code>big_o_constant</code> containing the string <code>\"O(1)\"</code> and a variable called <code>big_o_linear</code> containing the string <code>\"O(N)\"</code>.",
                    starterCode: `# Define your Big O variables here
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
    run_test("big_o_constant exists", 'big_o_constant' in globals(), 'big_o_constant' in globals(), True)
    if 'big_o_constant' in globals():
        run_test("constant is O(1)", big_o_constant == "O(1)", big_o_constant, "O(1)")
        
    run_test("big_o_linear exists", 'big_o_linear' in globals(), 'big_o_linear' in globals(), True)
    if 'big_o_linear' in globals():
        run_test("linear is O(N)", big_o_linear == "O(N)", big_o_linear, "O(N)")
except Exception as e:
    run_test("Execution error", False, str(e), "No error")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    { question: "What does Big O notation measure?", options: ["The physical size of code files", "The algorithm's performance/complexity as data scales", "The number of functions used", "The amount of memory RAM installed"], answerIndex: 1 },
                    { question: "Which time complexity is generally faster?", options: ["O(1)", "O(N)", "O(N^2)", "They are the same"], answerIndex: 0 },
                    { question: "Looping through an array of N elements is an example of:", options: ["O(1)", "O(N)", "O(log N)", "O(N!)"], answerIndex: 1 }
                ]
            },
            {
                id: "7.2",
                title: "Linear Structures: Stacks",
                description: `
                    <p>A <strong>Stack</strong> is a linear data structure that follows the <strong>LIFO (Last In, First Out)</strong> principle. Think of it like a stack of plates: the last plate you put on top is the first one you take off.</p>
                    <p>In Python, we can use a standard list as a stack by using <code>.append()</code> to push items, and <code>.pop()</code> to remove the top item.</p>
                `,
                sampleCode: `stack = []

# Push items onto the stack
stack.append("Page 1")
stack.append("Page 2")
print("Stack state:", stack)

# Pop the top item off
last_viewed = stack.pop()
print("Popped item:", last_viewed)
print("Stack state after pop:", stack)`,
                hint: "Use append() twice to add 10 then 20. Then use pop() and assign it to top_item.",
                exercise: {
                    instruction: "Create an empty list called <code>my_stack</code>. Push the number <code>10</code> into it, then push the number <code>20</code>. Finally, pop the top element off the stack and store it in a variable called <code>top_item</code>.",
                    starterCode: `# Implement your stack operations below
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
    run_test("my_stack exists", 'my_stack' in globals(), 'my_stack' in globals(), True)
    if 'my_stack' in globals():
        run_test("my_stack has 1 item left", len(my_stack) == 1, len(my_stack), 1)
        run_test("my_stack remaining item is 10", my_stack[0] == 10, my_stack[0], 10)
    
    run_test("top_item exists", 'top_item' in globals(), 'top_item' in globals(), True)
    if 'top_item' in globals():
        run_test("top_item is 20", top_item == 20, top_item, 20)
except Exception as e:
    run_test("Execution error", False, str(e), "No error")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    { question: "What principle does a Stack follow?", options: ["FIFO (First In, First Out)", "LIFO (Last In, First Out)", "Random Access", "Sorted Access"], answerIndex: 1 },
                    { question: "Which Python list method is used to push an item onto the top of a stack?", options: [".add()", ".insert()", ".append()", ".push()"], answerIndex: 2 },
                    { question: "Which Python list method is used to remove and return the top item of a stack?", options: [".remove()", ".delete()", ".pop()", ".shift()"], answerIndex: 2 }
                ]
            },
            {
                id: "7.3",
                title: "Algorithms: Binary Search",
                description: `
                    <p><strong>Binary Search</strong> is an extremely fast algorithm for finding an item in a <em>sorted</em> list. It has a time complexity of <code>O(log N)</code>.</p>
                    <p>It works by repeatedly dividing the search interval in half. If the target value is less than the middle element, it narrows the search to the lower half. Otherwise, it narrows it to the upper half.</p>
                `,
                sampleCode: `def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid # Found it!
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
            
    return -1 # Not found

numbers = [1, 3, 5, 7, 9, 11]
print("Index of 7 is:", binary_search(numbers, 7))`,
                hint: "Use binary search logic to set `found_index = 3` (the index of 80 in the list).",
                exercise: {
                    instruction: "Given the sorted list <code>nums = [10, 20, 50, 80, 90]</code>, use any method (or write a binary search manually!) to find the index of <code>80</code> and store it in a variable called <code>found_index</code>.",
                    starterCode: `nums = [10, 20, 50, 80, 90]
# Find the index of 80 and store in found_index
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
    run_test("found_index exists", 'found_index' in globals(), 'found_index' in globals(), True)
    if 'found_index' in globals():
        run_test("found_index is 3", found_index == 3, found_index, 3)
except Exception as e:
    run_test("Execution error", False, str(e), "No error")

print(f"__TEST_RESULT__:{json.dumps({'passed': tests_passed, 'results': results})}")
`
                },
                quiz: [
                    { question: "What is a strict requirement for Binary Search to work?", options: ["The list must contain only integers", "The list must have an even number of items", "The list must be sorted", "The list must be reversed"], answerIndex: 2 },
                    { question: "What is the time complexity of Binary Search?", options: ["O(1)", "O(N)", "O(log N)", "O(N^2)"], answerIndex: 2 },
                    { question: "How does Binary Search operate?", options: ["It checks every element one by one", "It splits the search interval in half repeatedly", "It randomly guesses until it finds the target", "It creates a dictionary of all elements"], answerIndex: 1 }
                ]
            }
        ]
    }
];
"""

final_content = header + modules_js
with open("PythonAcademy/curriculum.js", "w") as f:
    f.write(final_content)
    
print("Successfully generated new curriculum.js")
