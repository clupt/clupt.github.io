// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //return a function that takes a value as its parameter and tests it against the base
    return function(value){
    //determine if the value being input is a Number AND confirm that the base is also a Number
        if (typeof value === 'number' && typeof base === 'number'){
    //check if value > base
            if (value > base){
                //ifso, return true
                return true;
            }
    //if it isn't return false
            else {
                return false;
            }
        }
    //determine if the value being input is a String AND that the base is also a String
     if (typeof value === 'string' && typeof base === 'string'){
    //check if the value is greater than the base return true
            if (value > base){
                return true;
            }
    //if it isn't return false
            else {
                return false;
            }
        }
    };
   
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //create an anonymous function that checks if the input value is less than the input base
   return function(value){
    //check if the value and base are both Numbers
        if (typeof value === 'number' && typeof base === 'number'){
        //ifso, check if the value is less than the base. ifso, true
            if (value < base){
                return true;
            }
            //if not, false
            else {
                return false;
            }
        }
    //check if the input value and base are both Strings
     if (typeof value === 'string' && typeof base === 'string'){
         //check if value is less than the base. ifso return true
            if (value < base){
                return true;
            }
            //if not return false
            else {
                return false;
            }
        }
    };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    // return function(string){
        //declare an array and assign it to the characters of string with split
        //Here's another way to solve this problem, using .split 
    //     let arr = string.split('');
        //if the uppercase first index of that string matches the uppercase of startsWith return true
    //     if(arr[0].toUpperCase() === startsWith.toUpperCase()){
    //         return true;
            //otherwise return false
    //     } else{
    //         return false;
    //     }
        
    // };
    
    //return a function that takes a string as its parameter and test that string against startsWith
  return function(string){
        //if the uppercase value of the first character of string is strictly equal to the uppercase startsWith return true
        //string.charAt(0) also works here
        if(string[0].toUpperCase() === startsWith.toUpperCase()){
          return true;
            //otherwise return false
        } else {
          return false;
        }
    };

//     // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
 
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //return a function that takes a string as its parameter
    return function(string){
        //if the uppercase of that string is the same as the uppercase of endsWith return true
        if(string.charAt(string.length-1).toUpperCase() === endsWith.toUpperCase()){
          return true;
          //otherwise return false
        } else {
          return false;
        }
    };
    // YOUR CODE ABOVE HERE //
}
/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //assign strings to an array literal
    let arr = [];
    //loop through the array strings
    for(let i = 0; i < strings.length; i++){
    //run each index of the strings array through the function modify and push them to the arr array
        arr.push(modify(strings[i]));
    }
    //return the arr array with the modified strings
    return arr;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //create an array literal into which the strings being tested will be pushed
    let arr = [];
    
    //loop through the strings array
    for(let i = 0; i < strings.length; i++){
    //run every index of strings through the test function and push them into the arr array
        arr.push(test(strings[i]));
    }
    //.includes() method determines if an array includes a certain value among its entires
    //so here we are seeing if ANY of the elements of the arr of tested strings above resolved to false
    if(arr.includes(false)){
    //if any of them were false, then the whole test fails since ALL strings must pass the test
        return false;
    //if NONE of them were false, then we have passed the test and can return true
    }else{
        return true;
    }

    // YOUR CODE ABOVE HERE //
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}