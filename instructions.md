tripott
Test 2
Open in new window More actions
# Test 2 - GitHub and Basic JavaScript
## Instructions
- On the GitHub.com website, create a GitHub repo under your account named: **17-spring-test2-<your name>**
 Example: **17-spring-test2-trip-ottinger**
- Add a **readme.md** file and a node **.gitignore** file to the repo on Github.com.

- Clone the repo to your local machine to your "code" folder.
- For the problem 3, create a new code codepen.
- For all other problems, create a JavaScript file within your repo. Examples: **1.js**, **2.js**, **4.js**, etc. Add these exercise files to the local repo and commit your changes locally.
- Provide instructions within your **readme.md** file on how to clone and run the solutions to each of the problems.
- To submit your test:
 - Send your changes to your repo within github.com.
 - For problem 3, send the instructor a _direct message_ using slack containing the url of the codepen.
 - For all other problems, push your changes to your repo on GitHub and slack the url as a _direct message_ (do not submit to **The Grind** channel!)
 > Good Luck!
## Problems
1. Within your GitHub repo, create a file named **1.js**. Create a function named `reverse()` that is passed an array of the following color names as a parameter. The color names should be lower case. Within the function, reverse the array. The function should return a new array containing the reversed array of color names.
 * black
 * green
 * blue
 * navy
 * orange
 * gold
 * purple
2. Within your GitHub repo, create a file named **2.js**. Create a function named `upper()` that is passed an array of color names. Within the function, use `map()`. Make the first character of each color upper case (ex: "green" becomes "Green"). Return a new array of colors from the function.
3. Within codepen, create a codepen file named **<your name>-Test2 Problem 3**. Using functional programming, create a function that is passed an array of color names. Create a web page that includes the color name and a color sample of the actual color.
 * An example: http://tachyons.io/docs/themes/skins/
4. Within your GitHub repo, create a file named **4.js**. Write a JavaScript function named `stringParameterize()` to parameterize a string.
 > Test Data
 ```
 console.log(stringParameterize("Robin Singh from USA."));
 ```
 > Test Output
 ```
 "robin-singh-from-usa"
 ```
5. Within your GitHub repo, create a file named **5.js**. Write a JavaScript function that truncates (cuts off at the end) a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.
 > Test Data
 ```
 console.log(text_truncate('We are doing JS string exercises.'))
 console.log(text_truncate('We are doing JS string exercises.', 15))
 console.log(text_truncate('We are doing JS string exercises.', 12, '!!'))
 ```
 > Test Output
 ```
 "We are doing JS string exercises."
 "We are doing JS ..."
 "We are doing !!"
 ```
6. Within your GitHub repo, create a file named **6.js**. Write a JavaScript function to find a word within a string.
 > Test Data :
 ```
 console.log(search_word('The quick brown fox', 'fox'));
 console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
 ```
 > Test Output:
 ```
 "'fox' was found 1 times."
 "'aa' was found 2 times."
 ```
7. Within your GitHub repo, create a file named **7.js**.  Write a JavaScript function named `first()` that accepts two parameters. Display the results of the function call using `console.log()`.
 **Arguments**
 - `arr` - Required. An array of values.
 - `n` - Optional. The number of `n` elements to return from the array. The second parameter (`n`) is optional. Return a new array. If no value is provided, simply return the first item from the array. If a negative number is provided, return an empty array.
 > Test Data :
 ```
 console.log(first([7, 9, 0, -2]));
 console.log(first([],3));
 console.log(first([7, 9, 0, -2],3));
 console.log(first([7, 9, 0, -2],6));  
 console.log(first([7, 9, 0, -2],-3));  
 ```
 > Expected Output:
 ```
 [7]
 []
 [7, 9, 0]
 [7, 9, 0, -2]
 []
 ```
8. Within your GitHub repo, create a file named **8.js**. Write a JavaScript function named `sortIt()`. Accept a single parameter named `arr`. Return a new array containing the sorted items. Display the results using `console.log()`.
 > Sample array :
 ```
 var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
 ```
 > Sample Output:
 ```
 Sample Output : -4,-3,1,2,3,5,6,7,8
 ```
9. Within your GitHub repo, create a file named **9.js**. Write a JavaScript function named `uniqueIt()`. Accept a single parameter named `arr`. Remove duplicate items from the array (ignore case sensitivity) into a new array. Return a new array from the function and display the results using `console.log()`.
10. Within your GitHub repo, create a file named **10.js**. Write a JavaScript function named `unionIt()`. Accept two parameters named `arr1` and `arr2`. Compute the union of two arrays. Return a new array from the function and display the results using `console.log()`.
 > Sample Data:
 ```
 console.log(unionIt([1, 2, 3], [100, 2, 1, 10]));
 ```
 > Sample Output:
 ```
  [1, 2, 3, 10, 100]
 ```
11. Within your GitHub repo, create a file named **11.js**. Write a JavaScript function named `keysList()` to list the properties of a JavaScript object. Return a comma separated string of keys. Display the results of the function call using `console.log()`.
 Sample object :
 ```
 var student = {
  name : "David Ray",
  sclass : "VI",
  rollno : 12 }
 ```
 Sample Output :
 ```
 name,sclass,rollno
 ```
