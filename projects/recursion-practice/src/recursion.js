// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

//create a factorial function that finds the factorial of an input number
//input: (number) any non negative interger
//output: (number) the factorial of the input number
//constraints: input must be a positive interger
//edge cases: what happens if the number is negative (return null)
//          : what happens if the number is 0 (return 1)
//          : what happens if the number is 1? (return 1)
var factorial = function(n){
  //base case 1:
  //if the input number is 1, return 1
  if(n === 1){
    return 1;
  //base case 2:
  //if the input number is 0, return 1
  } else if (n === 0){
    return 1;
  //base case 3:
  //if the input number is negative, return null
  } else if (n < 0){
    return null;
  //recursive case:
  //call the factorial function on the num-1 * num, so every time it calls, it works its way down from
  //the number, finding the factorial of each instance of n in the call stack
  //until the stack reaches 1, which then returns 1, and uses that to solve for the 
  //factorials back up the stack until it reaches the target number
  } else{
    //return the factorial of the input number once the factorial has been solved for recursively
    return factorial(n - 1) * n;
  }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

//create a sum function that is designed to return the sum of the intergers of an array using recursion
//input: (array) an array of intergers
//output: (number) the sum of the intergers of the input array
//constraints: should work for positive, negative, mixed pos & neg intergers
//           : should return 0 for an empty array, and accept arrays of any length
//           : cannot mutate the array
//edge cases: what if the array is empty? (return 0)
var sum = function(array){
  //check to see if the array has a length
  if(array.length === 0){
    //if it doesn't, return 0
    return 0;
    //otherwise call the sum function on the array recursively, slicing the 1 element and adding
    //the result to the 0 index of the array. slice returns a new array, which accounts for the
    //not mutating the original array constraint.
  } else {
    //return the result of the recursive addition of the indexes of ther array
    return array[0] + sum(array.slice(1));
  }
};

//skip
// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n){
  //base case:
  //if n is 1, return false. 
  if (n === 1){
      return false;
  //recursive cases:
  //negative version
  //otherwise if n is less than 0
  } else if(n < 0){
    //call isEven on -n and return the result
      return isEven(-n);
    //if n is 0, return true
  } else if (n === 0){
      return true;
    //positive version
    //call isEven on n-2, and work the way down to 0... return the result
    //which will be true if n is 0, or false if n is 1
  } else{
      return isEven(n-2);
  }
};


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

var sumBelow = function(n){
  //base case:
  //if n is 0, return 0
  if(n === 0){
    return 0;
    //recursive cases:
    //positive version
    //if n is greater than 0, 
  } else if(n > 0){
    //call sumBelow on n-1 and add it to n-1
    return (n - 1) + sumBelow(n - 1);
    //negative version
    //otherwise is n is less than 0
  } else if(n < 0){
    //call sumBelow on n+1 and add it to n+1 
    return (n + 1) + sumBelow(n + 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y){
  //base case:
  //if y - x is 0, return an empty array
  if (y - x === 0){
    return [];
  } 
  //assign y with the ternary ask is y greater than x
  //if it is, y -1, if it isn't y + 1
  y = y > x ? y - 1 : y + 1;
  //recursive case:
  //ternary ask is y === x?
  //if so, return an empty array
  //if not, recursively call range on x,y and concatenate the result to y
  return y === x ? [] : range(x, y).concat(y);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp){
  //base case:
  //if the base is 0, or the exponent is 0, return 1
 if (base === 0 || exp === 0) {
   return 1;
   //if the exponent is 1, return the base
 } else if(exp === 1){
   return base;
   //recursive cases:
   //negative version
   //if the exponent is negative, call the exponent function on the base and exp +1
   //divide it by the base, and return the result
 } else if(exp < 0){
   return exponent(base, exp + 1) / base;
   //positive version
   //if the exponent is positive, call the function recursively on base and exp-1
   //multiply it by the base and return the result
 } else{
   return exponent(base, exp - 1) * base;
 }
};

// 8. Determine if a number is a power of two
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

//create a function called powerOfTwo that recursively determines if a given number is a power of two
//input: number
//output: boolean
var powerOfTwo = function(n) {
  //base case:
  //if n is 1, return true
  if(n === 1){
    return true;
    //if n is less than 1, return false
  } else if (n < 1){
    return false;
    //recursive case:
    //otherwise call powerOfTwo on n / 2 and return the result
  } else{
    return powerOfTwo(n / 2);
  }
};


// 9. Write a function that accepts a string a reverses it.
//create a function that takes a string and reverses it using recursion
//input: string
//output: reversed string
var reverse = function(string){
  //if the string is an empty string
  if (string === ''){
    //return the string
    return '';
    //otherwise
  } else {
    //call the reverse function on the entire string starting from the 1st index
    //and concatenate it with the first letter at the very end of the new string
    return reverse(string.substr(1)) + string.charAt(0);
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //base case:
  //make the string lowercase and get rid of any spaces
  string = string.toLowerCase().replace(' ', '');
  //declare a first variable and assign it to the 0 index of the string
  let first = string[0];
  //declare a last variable and assign it to the last index of the string
  let last = string[string.length - 1];
  //if the string has a length of 0 or 1, it's a palindrome!
  if(string.length <= 1){
    return true;
    //otherwise, check to see if the first char and last char are the same
  }else if(first === last){
    //then call plaindromed on the string, slicing off the first and last chars
    return palindrome(string.slice(1, string.length - 1));
  } else{
    //otherwise is isn't a palindrome
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

//create a function that returns a remainder recursively (without using the % operator)
//input: two number values
//output: one number that is the remained for the two input numbers
//constraints: cannot use the modulo operator
var modulo = function(x, y) {
  //if x / y is equal to zero, return zero
  if(x / y === 0){
    return 0;
    //otherwise call the modulo function on x / y
  } else {
    return modulo(x / y);
  }
};

//no psuedocode for this one because it reads / as divide...
// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
 
  if (x === 0 || y === 0){
    return 0;
  } else if (x > 0){
    return multiply (x - 1, y) + y;
  } else if (x < 0){
    return multiply(x + 1, y) - y;
  }
};

//skip
// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
 
};

//skip
// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //check to see if both strings are empty (or if their lengths are the same?)
  if(str1 === '' && str2 === ''){
    return true;
  //check to see if the first letters of the strings are equal
  }else if(str1.charAt(0) !== str2.charAt(0)){
    return false;
  }else{
  //call compareStr on the strings after slicing off the first letters, which will 
  //check all the way down the the bases cases
  return compareStr(str1.slice(1), str2.slice(1));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //base case:
  //create an empty array
  let arr = [];
  //if the length of the string is 0, return the array
  if(str.length === 0){
    return arr;
  }//push the string to the array
  arr.push(str[0]);
  //recursive case:
  //call the createArr on the str.slice(1)
  //concat that recursive call to the array to get the subsequent str -> arr indexes
  //and assign the value to the arr
  arr = arr.concat(createArray(str.slice(1)));
  //return the arr
  return arr;
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //base case:
  //return the empty array if it is empty
  if(array.length === 0){
    return array;
  //recursive case:
  //call the reverseArr function on the array sliced at [1] and then concatenate it 
  //to the [0] index
  } else {
    return reverseArr(array.slice(1)).concat(array[0]);
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //base case:
  //if length is 0, return the array
  if(length === 0){
    return [];
  }
  //recursive case:
  //put the value in an array and call the buildList function on value, and length -1
  //concatenate the result of the recursicve call and the value array
  //return the result
  return [value].concat(buildList(value, length - 1));
  
  
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //base case:
  //if the length of the array is 0, return 0 occurrences 
  if(array.length === 0){
    return 0;
  }
  //recursive case:
  //declare a count variable and assign to a conditional
  //if the 0 index of the array is equal to the value, add one to the count
  //if it isn't, add 0 to the count
  let count = array[0] === value ? 1 : 0;
  //call countOccurence on the array.slice(1), and the value and add it to the count
  //return the result
  return count + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //base case:
  //if the array is empty, return an empty array
  if(array.length === 0){
    return [];
  }else
  //recursive case:
  //put the callbackfunction calling the 0 index of the array into an array
  //concatenate the callback(array[0] array to the recursive call of rMap on the
  //array slice(1) and callback
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

//skip
// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  
};

//skip
// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  
};

//skip
// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  
};

//skip
// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //base case:
  //if n is less than 0, return null
  if(n < 0){
    return null;
  }
  //if n is less than or equal to 1, return n
  if(n <= 1){
    return n;
  }
  //recursive case:
  //other call nthFibo on n-1 and on n-2, add them together, and return the result
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //base case:
  //if the input array is empty, return the empty array
  if(input.length === 0){
    return [];
  } else
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
  
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  //base case:
  //if the array has no length, return an empty array
  if(array.length === 0){
    return [];
  //recursive case:
  //otherwise...
  } else
  //concatenate the capitalized first character of the first index of the array to the rest of that index
  //put the result into an array and 
  //concatenate the result to the recursive call of the capFirst function on the array.slice(1)
  return [array[0].charAt(0).toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};

//skip
// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  
};

//skip
// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  
};


// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  //base case:
  //if the string has no length, return the object param
  if(str.length === 0){
    return obj;
  }
  //ternary ask does the object have a str[0] property? if so, increment
  //if not, set it to 1
  obj[str[0]] ? obj[str[0]]++ : obj[str[0]] = 1;
  //recursive case:
  //call letterTallk on str slicing from 1 and the object
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, arr = []) {
  //base case:
  //if the list has no length, return the empty arr
  if(list.length === 0){
    return arr;
  }
  //if the index of the list doesnt equal the 1 index of the list, 
  if(list[0] !== list[1]){
    //push the 0 index to the empty arr
    arr.push(list[0]);
    //recursive case:
    //call compress on the list slice 1, and the array and return the result
    return compress(list.slice(1), arr);
  }
  //otherwise just recursively call compress on list.slice(1) and the array
  return compress(list.slice(1), arr);
};

//skip
// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //base case:
  //if the length of the array is less than 1
  if(array.length > 1){
    //if the 0 index of the array is equal to 0
    if(array[0] === 0){
      //call the compress function from above on array.slice(1)
      //this will eliminate any duplicate 0s at the 0 index of the array
      return compress(array.slice(1));
    }
    //recursive case:
    //call minimizeZeroes on the rest of the array, and add it to the 
    //0 index, and everything between using spread,
    //throw the whole thing into an [] and return the result
    return [array[0], ...minimizeZeroes(array.slice(1))];
  }
  //otherwise just return the array
  return array;
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //base case:
  //if the length of the array is equal to 0; return an empty array
  if(array.length === 0){
    return [];
  }
  //if the 0 index of the array is less than 0
  if(array[0] < 0){
    //change the 0 index to -0 index
    array[0] = -array[0];
  }
  //if the 1 index is greater than 0
  if(array[1] > 0){
    //change the 1 index to -1
    array[1] = -array[1];
  }
  //recursive case:
  //call the alternateSign function on the array.slice(2) to get a copy of the array
  //starting from the 2 index and concatenate it to the 0 and 1 indexes
  return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};
 
// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  //create a numsObj with string correlations for each number from 0-9
  let numsObj = {
    0: 'zero',
    1: 'one',
    2: 'two', 
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  //declare a variable for the changed strings and assign it to an empty string
  let changed = '';
  //base case:
  //if the length of the str is 0, return the changed
  if(str.length === 0){
    return changed;
    //otherwise declare a variable present, for the character and assign it to
    //the 0th character of the str4ingt
  } else {
    let present = str.charAt(0);
    //if the present property in of the numsObj 
    if(numsObj[present]){
      //set changed to changed + that property
      changed = changed + numsObj[present];
    } else{
      //otherwise set changed to changed + present
      changed = changed + present;
    }
    //recursive case:
    //call numToText and slice off the string(1), add it to changed, 
    //and return the result
    return changed + numToText(str.slice(1));
  }
  
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
 
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
  
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]

var mergeSort = function(array) {
//   if(array.length === 0){
//     return array;
//   } 

//   let mid = Math.floor(array.length / 2);
//   let front = array.slice(0, mid);
//   let back = array.slice(mid);
//   let merged = [mergeSort(front) + mergeSort(back)];
//   ...
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
