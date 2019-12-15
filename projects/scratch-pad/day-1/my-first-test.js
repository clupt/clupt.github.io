// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: MY FIRST TEST
 * 
 * The point of this little exercise is to get you familar with how we role with 
 * working on and submitting assignments. You'll code, save, and check the tests.
 */

/** 
 * Given an input value, print the value to the screen using console.log().
 */
function print(value) {
  // YOUR CODE BELOW HERE //
  //print the value to the screen using the console.() function
  console.log(value);
  
  
  // YOUR CODE ABOVE HERE //
}






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.print = print;
}
