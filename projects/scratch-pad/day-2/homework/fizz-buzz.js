// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//use a for loop to iterate through the numbers 1 - 100
for(var i = 1; i <= 100; i++){
//use the modulo operator (%) to return the remainder of dividing i by 15
//if that is 0, then it covers the only times that both %3 and %5 are 0
//so here prints fizzbuzz
    if (i % 15 === 0){
        console.log('FizzBuzz');
//find the remainder of dividing by 3, and it is 0, print fizz
    } else if (i % 3 === 0){
        console.log('Fizz');
//find the remainder of dividing by 5, and if it is 0, print buzz
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else {
//otherwise just print the numbers between 1 and 100 that aren't multiples of 3,5,or 15
        console.log(i);
    }
}
    // YOUR CODE GOES ABOVE HERE //


}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}