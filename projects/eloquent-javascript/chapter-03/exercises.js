////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function called min that compares two numbers and determines which is lower
function min(num1, num2){
  //use the Math.min() method to compare two inputs
  //return the lower value
  //this method works irrespective of which number is lower or higher, if the numbers are negative, or if they are even
  return Math.min(num1, num2);
}
//call the function to test it out
console.log(min(5,3));//3
console.log(min(3,5));//3
console.log(min(5,5));//5

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
//declare a function called isEven that takes a number and determines if it is an even number
//this should work on 0 and on negative numbers
function isEven(num) {
  //the simplest solution is to see if the remainder of dividing by 2 is 0
  //this works fine, but I think we are supposed to use recursion to solve this one
return num % 2=== 0;
}
isEven(5);
*/

//declare a function that CALLS ITSELF to determine if an input is even or odd
function isEven(num){
  //if the nuber is zero, return true
  if(num === 0){
    return true;
    //if the number is 1, return false
  } else if(num === 1) {
    return false;
    //determine if the number is negative. ifso, pass - num through the isEven function
    //and pass it all through itself (which is the recursion part of this)
  } else if(num < 0){
    return isEven(- num);
    //otherwise, pass the negative number - 2 through the isEven function through itself
  } else {
    return isEven(num - 2);
  }
}
console.log(isEven(5));//false
console.log(isEven(0));//true
console.log(isEven(2));//true
console.log(isEven(-3));//false

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars() {

}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
