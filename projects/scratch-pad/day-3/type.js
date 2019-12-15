// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //use the method Array.isArray, determine if the value being input is an array, and assign it to the variable arr
    let arr = Array.isArray(value);
    //return the arr variable
    return arr;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //First we must rule out any values that aren't an object intended as a collection
    
    //if the value is strictly equal to null, return false
    if (value === null){
        return false;
    //using Array.isArray(value) determine if the value is an array
    } else if (Array.isArray(value) === true){
    //ifso, return false
        return false;
    //if the instance of the value is a date, return false
    } else if (value instanceof Date === true){
        return false;
    //if the typeof the value is an object, return true
    } else if (typeof value === 'object'){
        return true;
    //if the type of value is any other datatype (like a string or number), return false
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //if the value is null, return false
    if (value === null){
        return false;
    //if the value is a date, return false
    } else if (value instanceof Date === true){
        return false;
    //if the typeof value is an object OR an array, return true
    } else if ((typeof value === 'object') || (Array.isArray(value) === true)){
        return true;
    //if the typeof value is any other datatype, return false
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //if the typeof value is a string, return the string 'string'
    if (typeof value === 'string'){
        return 'string';
    //if the typeof value is an object, return the string 'object'
    } else if (typeof value === Object){
        return 'object';
    //if the typeof value is an array, return the string 'array'
    } else if (Array.isArray(value) === true){
        return 'array';
    //if the typeof the value is equal to the typeof undefined, return the string 'undefined'
    } else if (typeof value === typeof undefined){
        return 'undefined';
    //if the value is equal to null, return the string 'null'
    } else if (value === null) {
        return 'null';
    //if the typeof value is a number, return the string 'number'
    } else if(typeof value === 'number'){
        return 'number';
    //if the value is a Date, return the string 'date'
    } else if(value instanceof Date === true){
        return 'date';
    //if the typeof value is a function, return the string 'function'
    } else if(typeof value === 'function'){
        return 'function';
    }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
