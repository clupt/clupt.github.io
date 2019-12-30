////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// create a function called min that compares two numbers and determines which is lower
//input: two numbers
//output: the minimum of those two numbers
//edge cases: will it work if the numbers are even? if the numbers are negatives? 
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

// //this can also be done without the math.min method
// //create a function called min that takes two numbers as its parameters
// function min(num1, num2){
//   //if num1 is less than num2
//   if (num1 < num2){
//     //return num1
//     return num1;
//     //otherwise return num2
//   } else {
//     return num2;
//   }
// }


////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//declare a function that calls itself to determine if an input is even or odd

//input: a number
//output: a boolean (true if even, false if odd)
//constraints: must use recursion 
//edge cases: what if the number is negative? what if the number is 0?
function isEven(num){
  //if the nuber is zero, return true
  if(num === 0){
    return true;
    //if the number is 1, return false
  } else if(num === 1) {
    return false;
    //determine if the number is negative. ifso, pass - num through the isEven function
    //and pass it all through itself, which will subtract the negative number upward through passing
    //it through the isEven function until we arrive at either 0 (true) or 1 (false)
  } else if(num < 0){
    return isEven(- num);
    //otherwise, pass the negative number - 2 through the isEven function through itself
    //this way we will eventually subtract two from the input number and recursively check it against 
    //the statements of the isEven function until we arrive at either 1 (false) or 0 (true)
  } else {
    return isEven(num - 2);
  }
}
console.log(isEven(5));//false
console.log(isEven(0));//true
console.log(isEven(2));//true
console.log(isEven(-3));//false

/*
//this can be also done without using recursion by using the % operator
function isEven(num){
  //if the number divided by 2 is strictgly equal to 0 return true, otherwise return false
  if (num % 2 === 0){
    return true;
  } else {
    return false;
  }
*/

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create the function countChars that counts the number of specific occurences of a character within a string
//input: a string and a character
//output: a number of the instances of the character in the string
//edge cases: what will happen if the character is not found in the string? (=> should return 0)

function countChars(string, char) {
  //declare a variable count and assign it to 0
  let count = 0;
  //using a for loop, iterate through the length of the string
  for(let i = 0; i < string.length; i++){
    //if any index of the string being looped through is equal to the character being searched for
    if (string[i] === char){
      //add 1 to the count variable (count = count + 1)
      count += 1;
    }
    //having finished the search, exit the loop and return the count
  } return count;
}
//check to see if it works in the console
console.log(countChars('papillon', 'l'));// should return 2


////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function called countBs that will be used to find any instance of 'B' in a string
//this only takes a string as its parameter
//input: a string
//output: the instances of B in that string
//edge cases: case sensitivity
function countBs(string){
  //declare a variable that will be used to hold the count when a B is found
  let countedBs = 0;
  //use a for loop to iterate through the string
  for(let i = 0; i < string.length; i++){
    //if the index of the string being looped through is a 'B'
    if(string[i] === 'B'){
      //add one to the count of Bs
      countedBs += 1;
    }//close the loop and return the count
  } return countedBs;
}
//check it in the console, keeping in mind that it's case sensitive
console.log(countBs('billions of bilious blue blistering barnacles'));//prints 0
console.log(countBs('Billions of Bilious Blue Blistering Barnacles'));//prints 5

/*
Could just us the countChars function created earlier
and specify that the char being searched for with countChars is ONLY going to be a 'B'

  function countBs(string) {
    return countChars(string, 'B');
}
*/

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
