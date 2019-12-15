// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    //use .length to determine the length of a string
    return string.length;
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    
    //use the toLowerCase() method 
    //store the result in a new variable, as this method does not change the original variable
    var lowerCaseStr = string.toLowerCase();
    //return the result of that new variable
    return lowerCaseStr;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    
    //use .toUpperCase() method to capitalize a string
    //store it in a new variable
    var upperCaseStr = string.toUpperCase();
    // return that variable
    return upperCaseStr;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //use .split(' ') method to turn the string into an array of strings, specifying their seperator to be a space ' '
    //use .join('-') to join the elements of that array into a string, specifying the separator to be a dash -
    //use .toLowerCase method to make that string lower case
    //save it to a new variable
    var dashCase = string.split(" ").join("-").toLowerCase();
    //return that variable
    return dashCase;
}
toDashCase('Hello World');


    // YOUR CODE ABOVE HERE //


/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // use.toUpperCase to compare the first character of the string[0] to the uppercase single character 'char' parameter
    // if they are strictly equal return true
    if (char.toUpperCase() === string[0].toUpperCase()){
      return true;
    }
    //otherwise return false
    else {
        return false;
    }
  
    // YOUR CODE ABOVE HERE //
}




/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    
//use string .length-1 to get the last character of the string
//compare the uppercase of the last character of the string, to the uppercase of the single character char parameter
//if they are equal return true
if (char.toUpperCase() === string[string.length-1].toUpperCase()){
     return true;
    }
//otherwise return false
    else {
        return false;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //use .concat to join the two strings
    return stringOne.concat(stringTwo);


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //use the Array.from method to pull the arguments from the array
    //store them into the variable args
    var args = Array.from(arguments);
    //use .join to concatenate the arguments from the array and return the result
    return args.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //put the arguments into an array using Array.from
    var arr = Array.from(arguments);
    //declare variable to hold the longest string
    var longest;
    //declare maxLength and set to 0. this will be compared to the arr.length
    var maxLength = 0;
    //use a for loop to loop through the contents of the array of the two strings
    for(var i=0; i < arr.length; i++){
    //compare the lengths and set the longest string in the array to the variable longest
        if(arr[i].length > maxLength){
            var maxLength = arr[i].length;
            longest = arr[i];
        }      
    }
    //return the longest string in the array
    return longest;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//put arguments into an array
var arr = Array.from(arguments);
//use .localeCompare method to compare the two string
//this method takes a referenceString arr[1] and compares it to a compareString arr[0]
//and returns 1, -1, or 0 pending on the lexicographical value of the two strings
var a = arr[1].localeCompare(arr[0]);
//return the value stored in the variable by the comparison
return a;

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//put arguments into an array
var arr = Array.from(arguments);
//use .localeCompare method to compare the two strings
//this method takes a referenceString arr[0] and compares it to a compareString arr[1]
//and returns 1, -1, or 0 pending on the lexicographical value of the two strings
var a = arr[0].localeCompare(arr[1]);
//return the value stored in the variable by the comparison
return a;


    // YOUR CODE ABOVE HERE //
}

//#reverse-string
function reverseString(string){
// Use the .split() method to return a new array
// Use the .reverse() method to reverse that array
// Use the .join() method to concatenate the newly reversed array
// return the result
return string.split("").reverse().join("");
};
console.log(reverseString('hello'));



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending;
    module.exports.sortDescending = sortDescending;
}
