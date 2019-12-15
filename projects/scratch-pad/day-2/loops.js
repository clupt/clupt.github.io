// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
//use a for loop to iterate through an array
for (var i = 0; i < array.length; i++){
//print the values of the array
  console.log(array[i]);
}
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
//use a for loop to iterate through an array backwards, starting at the end of the array and going to 0
for (var i = array.length -1; i >= 0; i--){
//print the array in reverse
console.log(array[i]);
}
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
// use Object.keys() method to return the keys on an object in an array
// save the result to a var array
var array = Object.keys(object);
//return the array
return array;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
//use a for in loop to loop through an object
for (var key in object){
//print the keys of the object to the console, and the values of those keys
 console.log(key, object[key]);
}
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
//use Object.values method to obtain the values of the object
//and store them to an array
var arr = Object.values(object);
//return that array
return arr;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
//use a for in loop to get the values of an object
for(var key in object){
//print the values to the console
console.log(object[key]);
}
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //

//use the Object.keys method to get the key/value pairs in the object
//use .length to determine the length of those pairs
//store that length in a variable called length
var length = Object.keys(object).length;
//return the value of var length
return length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
//use Object.values() method to get the values of the object
//store those values in a variable arr
var arr = Object.values(object);
//use a for loop to loop backwards through the array
    for (var i = arr.length - 1; i >= 0; i--) {
//print the values to the console
        console.log(arr[i]);
}
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
