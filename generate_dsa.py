import json

problems = [
    {
        "id": "two_sum",
        "title": "Two Sum",
        "difficulty": "Easy",
        "topic": "Arrays",
        "description": "Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "starterCode": "def two_sum(nums, target):\n    # Write your code here\n    pass\n",
        "tests": [
            {"args": "([2,7,11,15], 9)", "expected": "[0, 1]"},
            {"args": "([3,2,4], 6)", "expected": "[1, 2]"},
            {"args": "([3,3], 6)", "expected": "[0, 1]"}
        ]
    },
    {
        "id": "reverse_string",
        "title": "Reverse String",
        "difficulty": "Easy",
        "topic": "Strings",
        "description": "Write a function that reverses a string. The input string is given as an array of characters <code>s</code>. You must do this by modifying the input array in-place with O(1) extra memory.",
        "starterCode": "def reverse_string(s):\n    # Modify s in-place\n    pass\n",
        "tests": [
            {"args": "(['h','e','l','l','o'],)", "expected": "['o','l','l','e','h']", "is_inplace": True},
            {"args": "(['H','a','n','n','a','h'],)", "expected": "['h','a','n','n','a','H']", "is_inplace": True}
        ]
    },
    {
        "id": "palindrome_number",
        "title": "Palindrome Number",
        "difficulty": "Easy",
        "topic": "Math",
        "description": "Given an integer <code>x</code>, return <code>True</code> if <code>x</code> is a palindrome, and <code>False</code> otherwise.",
        "starterCode": "def is_palindrome(x):\n    # Return True or False\n    pass\n",
        "tests": [
            {"args": "(121,)", "expected": "True"},
            {"args": "(-121,)", "expected": "False"},
            {"args": "(10,)", "expected": "False"}
        ]
    },
    {
        "id": "valid_parentheses",
        "title": "Valid Parentheses",
        "difficulty": "Easy",
        "topic": "Stacks",
        "description": "Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.",
        "starterCode": "def is_valid(s):\n    # Return True or False\n    pass\n",
        "tests": [
            {"args": "('()',)", "expected": "True"},
            {"args": "('()[]{}',)", "expected": "True"},
            {"args": "('(]',)", "expected": "False"},
            {"args": "('([)]',)", "expected": "False"},
            {"args": "('{[]}',)", "expected": "True"}
        ]
    },
    {
        "id": "fizz_buzz",
        "title": "Fizz Buzz",
        "difficulty": "Easy",
        "topic": "Math",
        "description": "Given an integer <code>n</code>, return a string array <code>answer</code> (1-indexed) where:<br>- <code>answer[i] == \"FizzBuzz\"</code> if i is divisible by 3 and 5.<br>- <code>answer[i] == \"Fizz\"</code> if i is divisible by 3.<br>- <code>answer[i] == \"Buzz\"</code> if i is divisible by 5.<br>- <code>answer[i] == str(i)</code> otherwise.",
        "starterCode": "def fizz_buzz(n):\n    # Return list of strings\n    pass\n",
        "tests": [
            {"args": "(3,)", "expected": "['1','2','Fizz']"},
            {"args": "(5,)", "expected": "['1','2','Fizz','4','Buzz']"},
            {"args": "(15,)", "expected": "['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']"}
        ]
    },
    {
        "id": "single_number",
        "title": "Single Number",
        "difficulty": "Easy",
        "topic": "Bit Manipulation",
        "description": "Given a non-empty array of integers <code>nums</code>, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.",
        "starterCode": "def single_number(nums):\n    # Return the single integer\n    pass\n",
        "tests": [
            {"args": "([2,2,1],)", "expected": "1"},
            {"args": "([4,1,2,1,2],)", "expected": "4"},
            {"args": "([1],)", "expected": "1"}
        ]
    },
    {
        "id": "majority_element",
        "title": "Majority Element",
        "difficulty": "Easy",
        "topic": "Arrays",
        "description": "Given an array <code>nums</code> of size <code>n</code>, return the majority element. The majority element is the element that appears more than <code>⌊n / 2⌋</code> times. You may assume that the majority element always exists in the array.",
        "starterCode": "def majority_element(nums):\n    # Return the majority integer\n    pass\n",
        "tests": [
            {"args": "([3,2,3],)", "expected": "3"},
            {"args": "([2,2,1,1,1,2,2],)", "expected": "2"}
        ]
    },
    {
        "id": "contains_duplicate",
        "title": "Contains Duplicate",
        "difficulty": "Easy",
        "topic": "Hash Table",
        "description": "Given an integer array <code>nums</code>, return <code>True</code> if any value appears at least twice in the array, and return <code>False</code> if every element is distinct.",
        "starterCode": "def contains_duplicate(nums):\n    # Return True or False\n    pass\n",
        "tests": [
            {"args": "([1,2,3,1],)", "expected": "True"},
            {"args": "([1,2,3,4],)", "expected": "False"},
            {"args": "([1,1,1,3,3,4,3,2,4,2],)", "expected": "True"}
        ]
    },
    {
        "id": "missing_number",
        "title": "Missing Number",
        "difficulty": "Easy",
        "topic": "Math",
        "description": "Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return the only number in the range that is missing from the array.",
        "starterCode": "def missing_number(nums):\n    # Return the missing integer\n    pass\n",
        "tests": [
            {"args": "([3,0,1],)", "expected": "2"},
            {"args": "([0,1],)", "expected": "2"},
            {"args": "([9,6,4,2,3,5,7,0,1],)", "expected": "8"}
        ]
    },
    {
        "id": "move_zeroes",
        "title": "Move Zeroes",
        "difficulty": "Easy",
        "topic": "Two Pointers",
        "description": "Given an integer array <code>nums</code>, move all <code>0</code>'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array.",
        "starterCode": "def move_zeroes(nums):\n    # Modify nums in-place\n    pass\n",
        "tests": [
            {"args": "([0,1,0,3,12],)", "expected": "[1,3,12,0,0]", "is_inplace": True},
            {"args": "([0],)", "expected": "[0]", "is_inplace": True}
        ]
    },
    {
        "id": "longest_substring",
        "title": "Longest Substring Without Repeating",
        "difficulty": "Medium",
        "topic": "Sliding Window",
        "description": "Given a string <code>s</code>, find the length of the longest substring without repeating characters.",
        "starterCode": "def length_of_longest_substring(s):\n    # Return an integer\n    pass\n",
        "tests": [
            {"args": "('abcabcbb',)", "expected": "3"},
            {"args": "('bbbbb',)", "expected": "1"},
            {"args": "('pwwkew',)", "expected": "3"}
        ]
    },
    {
        "id": "container_with_most_water",
        "title": "Container With Most Water",
        "difficulty": "Medium",
        "topic": "Two Pointers",
        "description": "You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i</code>th line are <code>(i, 0)</code> and <code>(i, height[i])</code>. Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
        "starterCode": "def max_area(height):\n    # Return max area (int)\n    pass\n",
        "tests": [
            {"args": "([1,8,6,2,5,4,8,3,7],)", "expected": "49"},
            {"args": "([1,1],)", "expected": "1"}
        ]
    },
    {
        "id": "three_sum",
        "title": "3Sum",
        "difficulty": "Medium",
        "topic": "Two Pointers",
        "description": "Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>. Notice that the solution set must not contain duplicate triplets.",
        "starterCode": "def three_sum(nums):\n    # Return list of lists\n    pass\n",
        "tests": [
            {"args": "([-1,0,1,2,-1,-4],)", "expected": "[[-1,-1,2],[-1,0,1]]", "sort_result": True},
            {"args": "([0,1,1],)", "expected": "[]"},
            {"args": "([0,0,0],)", "expected": "[[0,0,0]]"}
        ]
    },
    {
        "id": "search_rotated_array",
        "title": "Search in Rotated Sorted Array",
        "difficulty": "Medium",
        "topic": "Binary Search",
        "description": "Given the array <code>nums</code> after the possible rotation and an integer <code>target</code>, return the index of <code>target</code> if it is in <code>nums</code>, or <code>-1</code> if it is not in <code>nums</code>. You must write an algorithm with <code>O(log n)</code> runtime complexity.",
        "starterCode": "def search(nums, target):\n    # Return integer index\n    pass\n",
        "tests": [
            {"args": "([4,5,6,7,0,1,2], 0)", "expected": "4"},
            {"args": "([4,5,6,7,0,1,2], 3)", "expected": "-1"},
            {"args": "([1], 0)", "expected": "-1"}
        ]
    },
    {
        "id": "merge_intervals",
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "topic": "Sorting",
        "description": "Given an array of <code>intervals</code> where <code>intervals[i] = [starti, endi]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
        "starterCode": "def merge(intervals):\n    # Return list of lists\n    pass\n",
        "tests": [
            {"args": "([[1,3],[2,6],[8,10],[15,18]],)", "expected": "[[1,6],[8,10],[15,18]]"},
            {"args": "([[1,4],[4,5]],)", "expected": "[[1,5]]"}
        ]
    },
    {
        "id": "group_anagrams",
        "title": "Group Anagrams",
        "difficulty": "Medium",
        "topic": "Hash Table",
        "description": "Given an array of strings <code>strs</code>, group the anagrams together. You can return the answer in any order.",
        "starterCode": "def group_anagrams(strs):\n    # Return list of list of strings\n    pass\n",
        "tests": [
            {"args": "(['eat','tea','tan','ate','nat','bat'],)", "expected": "[['eat','tea','ate'],['tan','nat'],['bat']]", "sort_result": True, "sort_inner": True},
            {"args": "([''],)", "expected": "[['']]"},
            {"args": "(['a'],)", "expected": "[['a']]"}
        ]
    },
    {
        "id": "maximum_subarray",
        "title": "Maximum Subarray",
        "difficulty": "Medium",
        "topic": "Dynamic Programming",
        "description": "Given an integer array <code>nums</code>, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
        "starterCode": "def max_sub_array(nums):\n    # Return max sum (integer)\n    pass\n",
        "tests": [
            {"args": "([-2,1,-3,4,-1,2,1,-5,4],)", "expected": "6"},
            {"args": "([1],)", "expected": "1"},
            {"args": "([5,4,-1,7,8],)", "expected": "23"}
        ]
    },
    {
        "id": "spiral_matrix",
        "title": "Spiral Matrix",
        "difficulty": "Medium",
        "topic": "Matrix",
        "description": "Given an <code>m x n</code> matrix, return all elements of the matrix in spiral order.",
        "starterCode": "def spiral_order(matrix):\n    # Return list of integers\n    pass\n",
        "tests": [
            {"args": "([[1,2,3],[4,5,6],[7,8,9]],)", "expected": "[1,2,3,6,9,8,7,4,5]"},
            {"args": "([[1,2,3,4],[5,6,7,8],[9,10,11,12]],)", "expected": "[1,2,3,4,8,12,11,10,9,5,6,7]"}
        ]
    },
    {
        "id": "climbing_stairs",
        "title": "Climbing Stairs",
        "difficulty": "Easy",
        "topic": "Dynamic Programming",
        "description": "You are climbing a staircase. It takes <code>n</code> steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        "starterCode": "def climb_stairs(n):\n    # Return integer\n    pass\n",
        "tests": [
            {"args": "(2,)", "expected": "2"},
            {"args": "(3,)", "expected": "3"},
            {"args": "(4,)", "expected": "5"}
        ]
    },
    {
        "id": "product_except_self",
        "title": "Product of Array Except Self",
        "difficulty": "Medium",
        "topic": "Arrays",
        "description": "Given an integer array <code>nums</code>, return an array <code>answer</code> such that <code>answer[i]</code> is equal to the product of all the elements of <code>nums</code> except <code>nums[i]</code>. You must write an algorithm that runs in O(n) time and without using the division operation.",
        "starterCode": "def product_except_self(nums):\n    # Return list of integers\n    pass\n",
        "tests": [
            {"args": "([1,2,3,4],)", "expected": "[24,12,8,6]"},
            {"args": "([-1,1,0,-3,3],)", "expected": "[0,0,9,0,0]"}
        ]
    },
    {
        "id": "longest_consecutive_sequence",
        "title": "Longest Consecutive Sequence",
        "difficulty": "Medium",
        "topic": "Hash Table",
        "description": "Given an unsorted array of integers <code>nums</code>, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",
        "starterCode": "def longest_consecutive(nums):\n    # Return integer\n    pass\n",
        "tests": [
            {"args": "([100,4,200,1,3,2],)", "expected": "4"},
            {"args": "([0,3,7,2,5,8,4,6,0,1],)", "expected": "9"}
        ]
    },
    {
        "id": "trapping_rain_water",
        "title": "Trapping Rain Water",
        "difficulty": "Hard",
        "topic": "Two Pointers",
        "description": "Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
        "starterCode": "def trap(height):\n    # Return integer\n    pass\n",
        "tests": [
            {"args": "([0,1,0,2,1,0,1,3,2,1,2,1],)", "expected": "6"},
            {"args": "([4,2,0,3,2,5],)", "expected": "9"}
        ]
    },
    {
        "id": "edit_distance",
        "title": "Edit Distance",
        "difficulty": "Hard",
        "topic": "Dynamic Programming",
        "description": "Given two strings <code>word1</code> and <code>word2</code>, return the minimum number of operations required to convert <code>word1</code> to <code>word2</code>. You have 3 operations permitted: Insert a character, Delete a character, Replace a character.",
        "starterCode": "def min_distance(word1, word2):\n    # Return integer\n    pass\n",
        "tests": [
            {"args": "('horse', 'ros')", "expected": "3"},
            {"args": "('intention', 'execution')", "expected": "5"}
        ]
    },
    {
        "id": "merge_k_sorted_lists",
        "title": "Merge K Sorted Arrays (Simplified)",
        "difficulty": "Hard",
        "topic": "Heap",
        "description": "You are given an array of <code>k</code> sorted arrays. Merge all the arrays into one sorted array and return it.",
        "starterCode": "def merge_k_arrays(arrays):\n    # Return list of integers\n    pass\n",
        "tests": [
            {"args": "([[1,4,5],[1,3,4],[2,6]],)", "expected": "[1,1,2,3,4,4,5,6]"},
            {"args": "([[]],)", "expected": "[]"}
        ]
    },
    {
        "id": "first_missing_positive",
        "title": "First Missing Positive",
        "difficulty": "Hard",
        "topic": "Arrays",
        "description": "Given an unsorted integer array <code>nums</code>, return the smallest missing positive integer. You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.",
        "starterCode": "def first_missing_positive(nums):\n    # Return integer\n    pass\n",
        "tests": [
            {"args": "([1,2,0],)", "expected": "3"},
            {"args": "([3,4,-1,1],)", "expected": "2"},
            {"args": "([7,8,9,11,12],)", "expected": "1"}
        ]
    }
]

import re

def generate_test_suite(problem):
    # Determine function name from starter code
    match = re.search(r"def\s+([a-zA-Z_0-9]+)\(", problem['starterCode'])
    func_name = match.group(1) if match else "solution"
    
    lines = [
        "import json",
        "import ast",
        "tests_passed = True",
        "results = []",
        "def run_test(name, success, got, expected):",
        "    global tests_passed",
        "    if not success: tests_passed = False",
        "    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})",
        "try:",
        f"    run_test('{func_name} defined', '{func_name}' in globals(), '{func_name}' in globals(), True)",
        f"    if '{func_name}' in globals():"
    ]
    
    for i, test in enumerate(problem['tests']):
        args = test['args']
        expected = test['expected']
        
        lines.append(f"        # Test {i+1}")
        if test.get('is_inplace'):
            # For inplace modification, args is a tuple like `([1,2],)`. We need to extract the first arg.
            # But the args string is raw python string like "([0,1,0,3,12],)".
            # We'll assign it to a variable, call the function, then check the variable.
            lines.append(f"        arg_data = {args}[0]")
            lines.append(f"        {func_name}(arg_data)")
            lines.append(f"        got = arg_data")
            lines.append(f"        exp = {expected}")
            lines.append(f"        success = got == exp")
        else:
            lines.append(f"        got = {func_name}{args}")
            lines.append(f"        exp = {expected}")
            
            if test.get('sort_result'):
                if test.get('sort_inner'):
                    lines.append(f"        got = sorted([sorted(x) for x in got]) if got else []")
                    lines.append(f"        exp = sorted([sorted(x) for x in exp])")
                else:
                    lines.append(f"        got = sorted(got) if got else []")
                    lines.append(f"        exp = sorted(exp)")
            
            lines.append(f"        success = got == exp")
            
        lines.append(f"        run_test('Test {i+1} {args}', success, got, exp)")

    lines.append("except Exception as e:")
    lines.append("    run_test('Execution error', False, str(e), 'No error')")
    lines.append("")
    lines.append("print(f'__TEST_RESULT__:{json.dumps({\"passed\": tests_passed, \"results\": results})}')")
    
    return "\n".join(lines)


# Generate the JS file content
js_content = "const DSA_PROBLEMS = [\n"
for p in problems:
    test_code = generate_test_suite(p)
    
    # Properly escape backticks and $ for JS string literals
    test_code_js = test_code.replace("`", "\\`").replace("$", "\\$")
    desc_js = p['description'].replace("`", "\\`").replace("$", "\\$")
    starter_js = p['starterCode'].replace("`", "\\`").replace("$", "\\$")
    
    js_content += "  {\n"
    js_content += f"    id: '{p['id']}',\n"
    js_content += f"    title: '{p['title']}',\n"
    js_content += f"    difficulty: '{p['difficulty']}',\n"
    js_content += f"    topic: '{p['topic']}',\n"
    js_content += f"    description: `{desc_js}`,\n"
    js_content += f"    starterCode: `{starter_js}`,\n"
    js_content += f"    tests: `{test_code_js}`\n"
    js_content += "  },\n"

js_content += "];\n"

with open('PythonAcademy/dsa_problems.js', 'w') as f:
    f.write(js_content)
    
print("Successfully generated 25 DSA problems!")
