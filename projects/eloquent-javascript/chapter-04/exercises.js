////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function called range that takes a starting and ending condition as its parameters
//this will give the range of the numbers between and including those parameters

//input: start condition, end condition, an optional step parameter
//output: the range of the numbers between start and end
//constraints: if there is no step, it will increment by the default of 1. otherwise it will increment by the step
//edge cases: should give an empty array if the start and end parameters are equal. 
//          : function should also work with negative step value for decrementing 

  function range (start, end, step){
    //create an empty array for the values of the range
    let arr = [];
    //if the starting value is equal to the ending value, return an empty array
    if(start === end){
      return arr;
      //if there is no step, or the step is undefined, use the default incrementer of 1
    } else if(step === undefined){
      for(let i = start; i <= end; i++){
        //push the values in the range to the array and return the array
        arr.push(i);
      }
      return arr;
      //if there is a step value, and that value is greater than 0
    } else if (step && step > 0){
      //loop forwards from start to end, incrementing by the input step value
      for(let i = start; i <= end; i+= step){
        //push the values to the array, and return the array
        arr.push(i);
      }
      return arr;
      //if there is a step value, and it is less than 0 
    } else if (step && step < 0){
      //loop backwards through from end to start, decrementing by the input step
      for(let i = end; i <= start; i-= step){
        //push those numbers to the array, and return the array
        arr.push(i);
      }
      return arr;  
    }
  }


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function called sum that takes an array as its parameter and returns the sum of the range of an array

//input: an array
//output: the sum of numbers inside of the array
//constraints: none specified?
//edge cases: check to see if it is an array, and that the array isn't empty

  function sum(array) {
    //declare a sum variable that is set to the value of 0
    let sum = 0;
    //check to see that the array is an array using the Array.isArray() method
    if (Array.isArray(array)){
      //using a for loop, loop through the array and add the values of the array 
      //to the sum variable with each iteration to get the sum of the range of the array 
      for(let i = 0; i < array.length; sum += array[i++]);
      //return the sum
    } return sum;
  } 

console.log(sum(range(1,10))); //expects 55


////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function called reverse array
//this does a pure reversal of the array, creating a new array and keeping the original array as is

//input: an array
//output: a new array that is the reversal of the original array
//constraints: the original array must remain unchanged

function reverseArray(array) {
  //declare newArr and assign it to an empty array literal
  let newArr = [];
  //loop backwards through the array, starting at the last index and decrementing down to (and inclusive of) 0
  for (let i = array.length -1; i >= 0; i--){
    //push the the array indexes being decremented into the newArr variable
    newArr.push(array[i]);
    //return the new array
  } return newArr;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function called reverseArrayInPlace that MODIFIES the given array by reversing its elements
//should use Math.floor() and return side effects (not a new value)

//input: an array
//output: that same array, modified to be reversed (in place)
//constraints: uses Math.floor. returns the side effects, not a pure reversal as done in the function above
//edge cases: how to account for the reversal of the middle value in arrays with an odd number of elements
//          : how to return just the side effects of the reversal

function reverseArrayInPlace(array) {
  //divide the last index of the array by 2 to find the middle of the array (accounting for an odd number of elements)
  for(let i = 0; i <= Math.floor((array.length - 1)/ 2); i++){
    //assign the index of the array being looped through to an elements variable
    let elements = array[i];
    //after initializing elements, check equality of the array to its reversal
    array[i] = array[array.length - 1 - i];
    array[array.length - 1- i] = elements;
    //return the modified array (now reversed)
  } return array;
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function called arrayToList that takes an array as its parameter and returns a list

//input: an array
//output: a list
//constraints: start at the end of the array, and push the end value of the array onto the list first

function arrayToList(array) {
  //declare the variable list and assign it to null
  let list = null;
  //iterate backwards over the array using a for loop, and for each element, add an object to the list
  for(let i = array.length -1; i >= 0; i--){
    //reassign the list
    list = {
      //assign the value key to the object of array[i]
      value: array[i], 
      //assign the value of list to rest
      rest: list
    };
    //return the list
  } return list;
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function called listToArray that will produce an array from a list

//input: a list
//output: an array

function listToArray(list) {
  //declare an empty array literal into which the list elements will be pushed
  let arr = [];
  //using a while loop, iterate through the list
  while(list){
    //pushing the values of the list into the array
    arr.push(list.value);
    //when rest = null, the while loop ends
    list = list.rest;
  //return the array
  }return arr;
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function called prepend that acts as a helped function to the listToArray function above
//that tales an element and a list and creates a new list that adds the element to the front of the input list

//input: an element and a list
//output: a new list with the element attached to the front of the original list
//constraints: must be a new list and not a modified version of the original list
//edge cases: how to insert the value into the list at the first position (before all other elements)

function prepend(value, list) {
    //calling listToArray with the list, assign it to the variable node
    let newList = listToArray(list);
    //use unshift method to attach the value to the beginning of the list
    newList.unshift(value);
    //reassign node to array to list (giving the new list), and pass the newList through the arrayToList function
    newList = arrayToList(newList);
    //return the newList
    return newList;
}


////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function called nth that takes a list and a num as its parameter and uses recursion to return the nth value of a given list

//input: a list and a number
//output: the value of element at the nth position in the list
//constraints: uses recursion to find the nth value
//edge cases: return undefined if there is no such element

function nth(list, num) {
  //check to see if the list exists
  if (list === null){
    //if not, return undefined
    return undefined;
    //if the list does exist, and the number isnt 0
  } else if (num === 0){
    //return the value of the list
    return list.value;
  } else {
    //otherwise, run (list.rest, num -1) parameters through the nth function and return the result
    //it'll keep cycling until num === 1 and then return the value
    return nth(list.rest, num - 1);
  }
} 


////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function that takes two parameters, and does a complete comparison of their equality
//should compare two empty objects, two numbers, two falsey values,
//two objects with the same properties and values, two objects with the same properties and different values
//two objects with identical nested arrays, two objects with unquie nested arrays
//two objects with nested objects

//input: two variables (a, b) 
//output: false if not deeply equal, true if deeply equal
//constraints: must be an object for both variables that are same value, or objects with the same properties
//edge cases: So many... two empty objects, two numbers, two falsey values, two strings
//two objects with the same properties and values, two objects with the same properties and different values, 
//two objects with nested objects

function deepEqual(a,b) {
// check to see if a is strictly equal to b
if (a === b) return true;
  //if a is null, or typeof a isnt an object, or b is null, or typeof b isnt an object, return false
  //this accounts for two falsey values, two non-objects, or any combination therein
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;
  //having established that a and b aren't falsey and are objects, use Object.keys() method to return an array of each object's property names
  //assign the keys of the objects to the variables keysA and keysB
  //could also use Object.getOwnPropertyNames method to get the contents to have length values here to compare
  //could refactor this and throw the Object.keys(a).length comparison to Object.keys(b) into the if statement above
  let keysA = Object.keys(a), keysB = Object.keys(b);
  //now that the values of the keys are arrays, their lengths are accessible.
  //compare the lengths of keys stored in these keysA and keysB arrays, and if they aren't equal return false
  if (keysA.length != keysB.length) return false;
  //using a for-in loop, iterate over the keys of keysA
  for (let key of keysA) {
    //if the keys being looped through in keysA aren't found in keysB, return false
    //or if the values of the keys in a and b don't return true when passed through the deepEqual function, also return false
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  //otherwise return true
  return true;
}

// function deepEqual(a, b) {
// //declare a variable that will return true if all edge cases are accounted for and the parameters have deep equality
// let equal = true;
// //if a is strictly equal to b, return equal
// if (a === b) return equal;
//   //if the type of a is 'object' and not null, and typeof b is 'object' and not null
// if(typeof a == 'object' && a != null && typeof b == 'object' && b != null){
//   //check the length of both for inequality, if not equal return false
//   //use Object.getOwnPropertyNames to return an array of all properties found in the objects a and b and compare their inequality
//   // since Object.getOwnPropertyNames produces an array, their lengths are now accessible.
//   if(Object.getOwnPropertyNames(a).length != Object.getOwnPropertyNames(b).length) equal = false;
//     //use a for-in loop to iterate over the keys in the a object
//     for (let key in a){
//       //run the looped keys of a and b objects recursively through the deepEqual function to check two objects with the same keys and values
//       if (!deepEqual(a[key], b[key])){
//         //if they aren't deeply equal, then equal = false
//         equal = false;
//         //return equal to break out of the loop
//         return equal;
//       }
//     } 
//   }
//   //also if a isn't STRICTLY equal to b return equal as false (this covers equality for the two falsey values edge case)
//   else if (!(a === b)) equal = false;
//   //otherwise return equal, which having met all requirements for deepEquality, will now be true
//   return equal;
// }


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
