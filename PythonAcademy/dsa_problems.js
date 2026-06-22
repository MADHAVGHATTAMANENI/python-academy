const DSA_PROBLEMS = [
  {
    id: 'two_sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    topic: 'Arrays',
    description: `Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>. You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    starterCode: `def two_sum(nums, target):
    # Write your code here
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('two_sum defined', 'two_sum' in globals(), 'two_sum' in globals(), True)
    if 'two_sum' in globals():
        # Test 1
        got = two_sum([2,7,11,15], 9)
        exp = [0, 1]
        success = got == exp
        run_test('Test 1 ([2,7,11,15], 9)', success, got, exp)
        # Test 2
        got = two_sum([3,2,4], 6)
        exp = [1, 2]
        success = got == exp
        run_test('Test 2 ([3,2,4], 6)', success, got, exp)
        # Test 3
        got = two_sum([3,3], 6)
        exp = [0, 1]
        success = got == exp
        run_test('Test 3 ([3,3], 6)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'reverse_string',
    title: 'Reverse String',
    difficulty: 'Easy',
    topic: 'Strings',
    description: `Write a function that reverses a string. The input string is given as an array of characters <code>s</code>. You must do this by modifying the input array in-place with O(1) extra memory.`,
    starterCode: `def reverse_string(s):
    # Modify s in-place
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('reverse_string defined', 'reverse_string' in globals(), 'reverse_string' in globals(), True)
    if 'reverse_string' in globals():
        # Test 1
        arg_data = (['h','e','l','l','o'],)[0]
        reverse_string(arg_data)
        got = arg_data
        exp = ['o','l','l','e','h']
        success = got == exp
        run_test('Test 1 (['h','e','l','l','o'],)', success, got, exp)
        # Test 2
        arg_data = (['H','a','n','n','a','h'],)[0]
        reverse_string(arg_data)
        got = arg_data
        exp = ['h','a','n','n','a','H']
        success = got == exp
        run_test('Test 2 (['H','a','n','n','a','h'],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'palindrome_number',
    title: 'Palindrome Number',
    difficulty: 'Easy',
    topic: 'Math',
    description: `Given an integer <code>x</code>, return <code>True</code> if <code>x</code> is a palindrome, and <code>False</code> otherwise.`,
    starterCode: `def is_palindrome(x):
    # Return True or False
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('is_palindrome defined', 'is_palindrome' in globals(), 'is_palindrome' in globals(), True)
    if 'is_palindrome' in globals():
        # Test 1
        got = is_palindrome(121,)
        exp = True
        success = got == exp
        run_test('Test 1 (121,)', success, got, exp)
        # Test 2
        got = is_palindrome(-121,)
        exp = False
        success = got == exp
        run_test('Test 2 (-121,)', success, got, exp)
        # Test 3
        got = is_palindrome(10,)
        exp = False
        success = got == exp
        run_test('Test 3 (10,)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'valid_parentheses',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    topic: 'Stacks',
    description: `Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.`,
    starterCode: `def is_valid(s):
    # Return True or False
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('is_valid defined', 'is_valid' in globals(), 'is_valid' in globals(), True)
    if 'is_valid' in globals():
        # Test 1
        got = is_valid('()',)
        exp = True
        success = got == exp
        run_test('Test 1 ('()',)', success, got, exp)
        # Test 2
        got = is_valid('()[]{}',)
        exp = True
        success = got == exp
        run_test('Test 2 ('()[]{}',)', success, got, exp)
        # Test 3
        got = is_valid('(]',)
        exp = False
        success = got == exp
        run_test('Test 3 ('(]',)', success, got, exp)
        # Test 4
        got = is_valid('([)]',)
        exp = False
        success = got == exp
        run_test('Test 4 ('([)]',)', success, got, exp)
        # Test 5
        got = is_valid('{[]}',)
        exp = True
        success = got == exp
        run_test('Test 5 ('{[]}',)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'fizz_buzz',
    title: 'Fizz Buzz',
    difficulty: 'Easy',
    topic: 'Math',
    description: `Given an integer <code>n</code>, return a string array <code>answer</code> (1-indexed) where:<br>- <code>answer[i] == "FizzBuzz"</code> if i is divisible by 3 and 5.<br>- <code>answer[i] == "Fizz"</code> if i is divisible by 3.<br>- <code>answer[i] == "Buzz"</code> if i is divisible by 5.<br>- <code>answer[i] == str(i)</code> otherwise.`,
    starterCode: `def fizz_buzz(n):
    # Return list of strings
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('fizz_buzz defined', 'fizz_buzz' in globals(), 'fizz_buzz' in globals(), True)
    if 'fizz_buzz' in globals():
        # Test 1
        got = fizz_buzz(3,)
        exp = ['1','2','Fizz']
        success = got == exp
        run_test('Test 1 (3,)', success, got, exp)
        # Test 2
        got = fizz_buzz(5,)
        exp = ['1','2','Fizz','4','Buzz']
        success = got == exp
        run_test('Test 2 (5,)', success, got, exp)
        # Test 3
        got = fizz_buzz(15,)
        exp = ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']
        success = got == exp
        run_test('Test 3 (15,)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'single_number',
    title: 'Single Number',
    difficulty: 'Easy',
    topic: 'Bit Manipulation',
    description: `Given a non-empty array of integers <code>nums</code>, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.`,
    starterCode: `def single_number(nums):
    # Return the single integer
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('single_number defined', 'single_number' in globals(), 'single_number' in globals(), True)
    if 'single_number' in globals():
        # Test 1
        got = single_number([2,2,1],)
        exp = 1
        success = got == exp
        run_test('Test 1 ([2,2,1],)', success, got, exp)
        # Test 2
        got = single_number([4,1,2,1,2],)
        exp = 4
        success = got == exp
        run_test('Test 2 ([4,1,2,1,2],)', success, got, exp)
        # Test 3
        got = single_number([1],)
        exp = 1
        success = got == exp
        run_test('Test 3 ([1],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'majority_element',
    title: 'Majority Element',
    difficulty: 'Easy',
    topic: 'Arrays',
    description: `Given an array <code>nums</code> of size <code>n</code>, return the majority element. The majority element is the element that appears more than <code>⌊n / 2⌋</code> times. You may assume that the majority element always exists in the array.`,
    starterCode: `def majority_element(nums):
    # Return the majority integer
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('majority_element defined', 'majority_element' in globals(), 'majority_element' in globals(), True)
    if 'majority_element' in globals():
        # Test 1
        got = majority_element([3,2,3],)
        exp = 3
        success = got == exp
        run_test('Test 1 ([3,2,3],)', success, got, exp)
        # Test 2
        got = majority_element([2,2,1,1,1,2,2],)
        exp = 2
        success = got == exp
        run_test('Test 2 ([2,2,1,1,1,2,2],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'contains_duplicate',
    title: 'Contains Duplicate',
    difficulty: 'Easy',
    topic: 'Hash Table',
    description: `Given an integer array <code>nums</code>, return <code>True</code> if any value appears at least twice in the array, and return <code>False</code> if every element is distinct.`,
    starterCode: `def contains_duplicate(nums):
    # Return True or False
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('contains_duplicate defined', 'contains_duplicate' in globals(), 'contains_duplicate' in globals(), True)
    if 'contains_duplicate' in globals():
        # Test 1
        got = contains_duplicate([1,2,3,1],)
        exp = True
        success = got == exp
        run_test('Test 1 ([1,2,3,1],)', success, got, exp)
        # Test 2
        got = contains_duplicate([1,2,3,4],)
        exp = False
        success = got == exp
        run_test('Test 2 ([1,2,3,4],)', success, got, exp)
        # Test 3
        got = contains_duplicate([1,1,1,3,3,4,3,2,4,2],)
        exp = True
        success = got == exp
        run_test('Test 3 ([1,1,1,3,3,4,3,2,4,2],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'missing_number',
    title: 'Missing Number',
    difficulty: 'Easy',
    topic: 'Math',
    description: `Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return the only number in the range that is missing from the array.`,
    starterCode: `def missing_number(nums):
    # Return the missing integer
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('missing_number defined', 'missing_number' in globals(), 'missing_number' in globals(), True)
    if 'missing_number' in globals():
        # Test 1
        got = missing_number([3,0,1],)
        exp = 2
        success = got == exp
        run_test('Test 1 ([3,0,1],)', success, got, exp)
        # Test 2
        got = missing_number([0,1],)
        exp = 2
        success = got == exp
        run_test('Test 2 ([0,1],)', success, got, exp)
        # Test 3
        got = missing_number([9,6,4,2,3,5,7,0,1],)
        exp = 8
        success = got == exp
        run_test('Test 3 ([9,6,4,2,3,5,7,0,1],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'move_zeroes',
    title: 'Move Zeroes',
    difficulty: 'Easy',
    topic: 'Two Pointers',
    description: `Given an integer array <code>nums</code>, move all <code>0</code>'s to the end of it while maintaining the relative order of the non-zero elements. Note that you must do this in-place without making a copy of the array.`,
    starterCode: `def move_zeroes(nums):
    # Modify nums in-place
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('move_zeroes defined', 'move_zeroes' in globals(), 'move_zeroes' in globals(), True)
    if 'move_zeroes' in globals():
        # Test 1
        arg_data = ([0,1,0,3,12],)[0]
        move_zeroes(arg_data)
        got = arg_data
        exp = [1,3,12,0,0]
        success = got == exp
        run_test('Test 1 ([0,1,0,3,12],)', success, got, exp)
        # Test 2
        arg_data = ([0],)[0]
        move_zeroes(arg_data)
        got = arg_data
        exp = [0]
        success = got == exp
        run_test('Test 2 ([0],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'longest_substring',
    title: 'Longest Substring Without Repeating',
    difficulty: 'Medium',
    topic: 'Sliding Window',
    description: `Given a string <code>s</code>, find the length of the longest substring without repeating characters.`,
    starterCode: `def length_of_longest_substring(s):
    # Return an integer
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('length_of_longest_substring defined', 'length_of_longest_substring' in globals(), 'length_of_longest_substring' in globals(), True)
    if 'length_of_longest_substring' in globals():
        # Test 1
        got = length_of_longest_substring('abcabcbb',)
        exp = 3
        success = got == exp
        run_test('Test 1 ('abcabcbb',)', success, got, exp)
        # Test 2
        got = length_of_longest_substring('bbbbb',)
        exp = 1
        success = got == exp
        run_test('Test 2 ('bbbbb',)', success, got, exp)
        # Test 3
        got = length_of_longest_substring('pwwkew',)
        exp = 3
        success = got == exp
        run_test('Test 3 ('pwwkew',)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'container_with_most_water',
    title: 'Container With Most Water',
    difficulty: 'Medium',
    topic: 'Two Pointers',
    description: `You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i</code>th line are <code>(i, 0)</code> and <code>(i, height[i])</code>. Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.`,
    starterCode: `def max_area(height):
    # Return max area (int)
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('max_area defined', 'max_area' in globals(), 'max_area' in globals(), True)
    if 'max_area' in globals():
        # Test 1
        got = max_area([1,8,6,2,5,4,8,3,7],)
        exp = 49
        success = got == exp
        run_test('Test 1 ([1,8,6,2,5,4,8,3,7],)', success, got, exp)
        # Test 2
        got = max_area([1,1],)
        exp = 1
        success = got == exp
        run_test('Test 2 ([1,1],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'three_sum',
    title: '3Sum',
    difficulty: 'Medium',
    topic: 'Two Pointers',
    description: `Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>. Notice that the solution set must not contain duplicate triplets.`,
    starterCode: `def three_sum(nums):
    # Return list of lists
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('three_sum defined', 'three_sum' in globals(), 'three_sum' in globals(), True)
    if 'three_sum' in globals():
        # Test 1
        got = three_sum([-1,0,1,2,-1,-4],)
        exp = [[-1,-1,2],[-1,0,1]]
        got = sorted(got) if got else []
        exp = sorted(exp)
        success = got == exp
        run_test('Test 1 ([-1,0,1,2,-1,-4],)', success, got, exp)
        # Test 2
        got = three_sum([0,1,1],)
        exp = []
        success = got == exp
        run_test('Test 2 ([0,1,1],)', success, got, exp)
        # Test 3
        got = three_sum([0,0,0],)
        exp = [[0,0,0]]
        success = got == exp
        run_test('Test 3 ([0,0,0],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'search_rotated_array',
    title: 'Search in Rotated Sorted Array',
    difficulty: 'Medium',
    topic: 'Binary Search',
    description: `Given the array <code>nums</code> after the possible rotation and an integer <code>target</code>, return the index of <code>target</code> if it is in <code>nums</code>, or <code>-1</code> if it is not in <code>nums</code>. You must write an algorithm with <code>O(log n)</code> runtime complexity.`,
    starterCode: `def search(nums, target):
    # Return integer index
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('search defined', 'search' in globals(), 'search' in globals(), True)
    if 'search' in globals():
        # Test 1
        got = search([4,5,6,7,0,1,2], 0)
        exp = 4
        success = got == exp
        run_test('Test 1 ([4,5,6,7,0,1,2], 0)', success, got, exp)
        # Test 2
        got = search([4,5,6,7,0,1,2], 3)
        exp = -1
        success = got == exp
        run_test('Test 2 ([4,5,6,7,0,1,2], 3)', success, got, exp)
        # Test 3
        got = search([1], 0)
        exp = -1
        success = got == exp
        run_test('Test 3 ([1], 0)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'merge_intervals',
    title: 'Merge Intervals',
    difficulty: 'Medium',
    topic: 'Sorting',
    description: `Given an array of <code>intervals</code> where <code>intervals[i] = [starti, endi]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
    starterCode: `def merge(intervals):
    # Return list of lists
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('merge defined', 'merge' in globals(), 'merge' in globals(), True)
    if 'merge' in globals():
        # Test 1
        got = merge([[1,3],[2,6],[8,10],[15,18]],)
        exp = [[1,6],[8,10],[15,18]]
        success = got == exp
        run_test('Test 1 ([[1,3],[2,6],[8,10],[15,18]],)', success, got, exp)
        # Test 2
        got = merge([[1,4],[4,5]],)
        exp = [[1,5]]
        success = got == exp
        run_test('Test 2 ([[1,4],[4,5]],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'group_anagrams',
    title: 'Group Anagrams',
    difficulty: 'Medium',
    topic: 'Hash Table',
    description: `Given an array of strings <code>strs</code>, group the anagrams together. You can return the answer in any order.`,
    starterCode: `def group_anagrams(strs):
    # Return list of list of strings
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('group_anagrams defined', 'group_anagrams' in globals(), 'group_anagrams' in globals(), True)
    if 'group_anagrams' in globals():
        # Test 1
        got = group_anagrams(['eat','tea','tan','ate','nat','bat'],)
        exp = [['eat','tea','ate'],['tan','nat'],['bat']]
        got = sorted([sorted(x) for x in got]) if got else []
        exp = sorted([sorted(x) for x in exp])
        success = got == exp
        run_test('Test 1 (['eat','tea','tan','ate','nat','bat'],)', success, got, exp)
        # Test 2
        got = group_anagrams([''],)
        exp = [['']]
        success = got == exp
        run_test('Test 2 ([''],)', success, got, exp)
        # Test 3
        got = group_anagrams(['a'],)
        exp = [['a']]
        success = got == exp
        run_test('Test 3 (['a'],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'maximum_subarray',
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    topic: 'Dynamic Programming',
    description: `Given an integer array <code>nums</code>, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.`,
    starterCode: `def max_sub_array(nums):
    # Return max sum (integer)
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('max_sub_array defined', 'max_sub_array' in globals(), 'max_sub_array' in globals(), True)
    if 'max_sub_array' in globals():
        # Test 1
        got = max_sub_array([-2,1,-3,4,-1,2,1,-5,4],)
        exp = 6
        success = got == exp
        run_test('Test 1 ([-2,1,-3,4,-1,2,1,-5,4],)', success, got, exp)
        # Test 2
        got = max_sub_array([1],)
        exp = 1
        success = got == exp
        run_test('Test 2 ([1],)', success, got, exp)
        # Test 3
        got = max_sub_array([5,4,-1,7,8],)
        exp = 23
        success = got == exp
        run_test('Test 3 ([5,4,-1,7,8],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'spiral_matrix',
    title: 'Spiral Matrix',
    difficulty: 'Medium',
    topic: 'Matrix',
    description: `Given an <code>m x n</code> matrix, return all elements of the matrix in spiral order.`,
    starterCode: `def spiral_order(matrix):
    # Return list of integers
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('spiral_order defined', 'spiral_order' in globals(), 'spiral_order' in globals(), True)
    if 'spiral_order' in globals():
        # Test 1
        got = spiral_order([[1,2,3],[4,5,6],[7,8,9]],)
        exp = [1,2,3,6,9,8,7,4,5]
        success = got == exp
        run_test('Test 1 ([[1,2,3],[4,5,6],[7,8,9]],)', success, got, exp)
        # Test 2
        got = spiral_order([[1,2,3,4],[5,6,7,8],[9,10,11,12]],)
        exp = [1,2,3,4,8,12,11,10,9,5,6,7]
        success = got == exp
        run_test('Test 2 ([[1,2,3,4],[5,6,7,8],[9,10,11,12]],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'climbing_stairs',
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    topic: 'Dynamic Programming',
    description: `You are climbing a staircase. It takes <code>n</code> steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
    starterCode: `def climb_stairs(n):
    # Return integer
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('climb_stairs defined', 'climb_stairs' in globals(), 'climb_stairs' in globals(), True)
    if 'climb_stairs' in globals():
        # Test 1
        got = climb_stairs(2,)
        exp = 2
        success = got == exp
        run_test('Test 1 (2,)', success, got, exp)
        # Test 2
        got = climb_stairs(3,)
        exp = 3
        success = got == exp
        run_test('Test 2 (3,)', success, got, exp)
        # Test 3
        got = climb_stairs(4,)
        exp = 5
        success = got == exp
        run_test('Test 3 (4,)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'product_except_self',
    title: 'Product of Array Except Self',
    difficulty: 'Medium',
    topic: 'Arrays',
    description: `Given an integer array <code>nums</code>, return an array <code>answer</code> such that <code>answer[i]</code> is equal to the product of all the elements of <code>nums</code> except <code>nums[i]</code>. You must write an algorithm that runs in O(n) time and without using the division operation.`,
    starterCode: `def product_except_self(nums):
    # Return list of integers
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('product_except_self defined', 'product_except_self' in globals(), 'product_except_self' in globals(), True)
    if 'product_except_self' in globals():
        # Test 1
        got = product_except_self([1,2,3,4],)
        exp = [24,12,8,6]
        success = got == exp
        run_test('Test 1 ([1,2,3,4],)', success, got, exp)
        # Test 2
        got = product_except_self([-1,1,0,-3,3],)
        exp = [0,0,9,0,0]
        success = got == exp
        run_test('Test 2 ([-1,1,0,-3,3],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'longest_consecutive_sequence',
    title: 'Longest Consecutive Sequence',
    difficulty: 'Medium',
    topic: 'Hash Table',
    description: `Given an unsorted array of integers <code>nums</code>, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.`,
    starterCode: `def longest_consecutive(nums):
    # Return integer
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('longest_consecutive defined', 'longest_consecutive' in globals(), 'longest_consecutive' in globals(), True)
    if 'longest_consecutive' in globals():
        # Test 1
        got = longest_consecutive([100,4,200,1,3,2],)
        exp = 4
        success = got == exp
        run_test('Test 1 ([100,4,200,1,3,2],)', success, got, exp)
        # Test 2
        got = longest_consecutive([0,3,7,2,5,8,4,6,0,1],)
        exp = 9
        success = got == exp
        run_test('Test 2 ([0,3,7,2,5,8,4,6,0,1],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'trapping_rain_water',
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    topic: 'Two Pointers',
    description: `Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.`,
    starterCode: `def trap(height):
    # Return integer
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('trap defined', 'trap' in globals(), 'trap' in globals(), True)
    if 'trap' in globals():
        # Test 1
        got = trap([0,1,0,2,1,0,1,3,2,1,2,1],)
        exp = 6
        success = got == exp
        run_test('Test 1 ([0,1,0,2,1,0,1,3,2,1,2,1],)', success, got, exp)
        # Test 2
        got = trap([4,2,0,3,2,5],)
        exp = 9
        success = got == exp
        run_test('Test 2 ([4,2,0,3,2,5],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'edit_distance',
    title: 'Edit Distance',
    difficulty: 'Hard',
    topic: 'Dynamic Programming',
    description: `Given two strings <code>word1</code> and <code>word2</code>, return the minimum number of operations required to convert <code>word1</code> to <code>word2</code>. You have 3 operations permitted: Insert a character, Delete a character, Replace a character.`,
    starterCode: `def min_distance(word1, word2):
    # Return integer
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('min_distance defined', 'min_distance' in globals(), 'min_distance' in globals(), True)
    if 'min_distance' in globals():
        # Test 1
        got = min_distance('horse', 'ros')
        exp = 3
        success = got == exp
        run_test('Test 1 ('horse', 'ros')', success, got, exp)
        # Test 2
        got = min_distance('intention', 'execution')
        exp = 5
        success = got == exp
        run_test('Test 2 ('intention', 'execution')', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'merge_k_sorted_lists',
    title: 'Merge K Sorted Arrays (Simplified)',
    difficulty: 'Hard',
    topic: 'Heap',
    description: `You are given an array of <code>k</code> sorted arrays. Merge all the arrays into one sorted array and return it.`,
    starterCode: `def merge_k_arrays(arrays):
    # Return list of integers
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('merge_k_arrays defined', 'merge_k_arrays' in globals(), 'merge_k_arrays' in globals(), True)
    if 'merge_k_arrays' in globals():
        # Test 1
        got = merge_k_arrays([[1,4,5],[1,3,4],[2,6]],)
        exp = [1,1,2,3,4,4,5,6]
        success = got == exp
        run_test('Test 1 ([[1,4,5],[1,3,4],[2,6]],)', success, got, exp)
        # Test 2
        got = merge_k_arrays([[]],)
        exp = []
        success = got == exp
        run_test('Test 2 ([[]],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
  {
    id: 'first_missing_positive',
    title: 'First Missing Positive',
    difficulty: 'Hard',
    topic: 'Arrays',
    description: `Given an unsorted integer array <code>nums</code>, return the smallest missing positive integer. You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.`,
    starterCode: `def first_missing_positive(nums):
    # Return integer
    pass
`,
    tests: `import json
import ast
tests_passed = True
results = []
def run_test(name, success, got, expected):
    global tests_passed
    if not success: tests_passed = False
    results.append({'name': name, 'success': success, 'got': str(got), 'expected': str(expected)})
try:
    run_test('first_missing_positive defined', 'first_missing_positive' in globals(), 'first_missing_positive' in globals(), True)
    if 'first_missing_positive' in globals():
        # Test 1
        got = first_missing_positive([1,2,0],)
        exp = 3
        success = got == exp
        run_test('Test 1 ([1,2,0],)', success, got, exp)
        # Test 2
        got = first_missing_positive([3,4,-1,1],)
        exp = 2
        success = got == exp
        run_test('Test 2 ([3,4,-1,1],)', success, got, exp)
        # Test 3
        got = first_missing_positive([7,8,9,11,12],)
        exp = 1
        success = got == exp
        run_test('Test 3 ([7,8,9,11,12],)', success, got, exp)
except Exception as e:
    run_test('Execution error', False, str(e), 'No error')

print(f'__TEST_RESULT__:{json.dumps({"passed": tests_passed, "results": results})}')`
  },
];
