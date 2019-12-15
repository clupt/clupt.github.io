// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
    //first declare a variable to contain the array to hold the intergers between the two parameters
    let arr = [];
    //set a condition that if the starting interger is greater than the ending interger {do something}
    if (start > end){
    //using a for loop, loop through i in reverse, since the starting interger value was > the ending interger value
        for(let i = start; i >= end; i--){
    //push the i's being looped between the parameters to the array created above
            arr.push(i);
        }
    //or for the condition that the ending value is greater than the starting value
    }else if (start < end){
    //loop through the values between the parameters in ascending order
        for(let i = start; i <= end; i++)
    //and push the values to the array created above
            arr.push(i);
        }
    //now we return the array, which should be the entirety of the range between start and end in either direction
    return arr;
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}