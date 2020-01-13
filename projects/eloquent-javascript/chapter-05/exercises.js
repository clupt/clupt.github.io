// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//create a function called flatten that takes a dynamic array (of arrays) and returns a single, 
//flat array that has all of the elements of the original arrays
//this will use the reduce method and the concatenate method
//Consider destructuring assignment

//input: a dynamic array
//output: a flattened array
//constraints: should use concatenate method (should write another version that uses reduce() method)
//edge cases: every element of arrays nested in the dynamic array must become individual elements of the returned. 
//what to do if the array is empty? what to do if it isn't an array? what to do when it is an array?

function flatten(array) {
  //create an empty array literal called flatArray that will be the output after having the values of the dynamic array pushed to it
  let flatArray = [];
  //cycle through each element of the dynamic array using forEach, and flatten them
  array.forEach(element => {
    //make sure the array is actually an array using Array.isArray method
    if(Array.isArray(element)) {
      //recursively call the elements through the flatten function and concatenate the results
      flatArray = flatArray.concat(flatten(element)); 
    //if it isn't an array, just push the elements onto the flat array
    } else{
      flatArray.push(element);
    }
  });
  //then return the flattened array
  return flatArray;
}


// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//create a higher-order function called loop that acts like a for loop
//it will take a value, a test function, an update function, and a body function as its parameters
//every time it iterates, it will run the test function on the current loop value and stop if that is false
//then it will call the body function, giving it a current value, then it will call the update function to create a new value
//then it starts from the beginning

//input: start value, test (function), update (function), body (function)
//output: should run a function over an array as if looping
//constraints: should work with unique test value, unique update value, unique body value
//edge cases: what to do if the current loop value returns false?  what type of loop is best to do the actual looping over the functions?

function loop(start, test, update, body) {
  //declare the start value and assign it to variable i
  //run the test function on i on the current loop... while that is true
  //update is the incremeter inside of the for loop
  for(let i = start; test(i); i = update(i)){
    //call the body function on the updated i value and the update function to create a new value with each iteration and start from the beginning
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//create a function called every that returns true when the given function returns true for EVERY element in the array
//(some is like || and every is like &&)
//this function will take an array and a predicate function as its parameters
//write two versions of this function, one using a loop and one using the some method

//input: array and predicate (function)
//output: true (when the predicate function returns true for every element of the array), or false (when any index passed through predicate returns false)
//constraints: there should be two version, one using a loop and one using the .some() method
//edge cases: account for when not every element returns true for the predicate function. 

//loop version

function every(array, predicate){
  //for index in arrays, if the iterated over index of the array returns doesn't return true when passed through the predicate function
  for(let index of array){
    if(predicate(index) !== true){
      //then the every function returns false
      return false;
    }
  //only if every index of the array returns true in the predicated function, does the every function return true
  } return true;
}

//the .some() method tests whether at least once element in an array passes the test implemented by a function and returns a boolean
//so this needs at least one index to NOT pass the predicate function for our every function to return false

//.some() method version

// function every(array, predicate){
//   //return true if the array.some doesnt return true when the index passed through predicate doesn't return false
//   return !array.some(index => !predicate(index));
// }

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//create a function called dominantDirection that determines the dominant writing direction for a string of text
//each script object has a direction property: ltr (left to right), rtl (right to left), ttb (top to bottom)
//the dominant direction is the direction of a majority of characters that have a script associated with them

//use the characterScript function and countBy function from EQJS5
//use charpointAt(0) to get the code of a character
//The charcterScript function figures out what script a piece of text is using.
//countBy uses findIndex (an array method which finds the first value for which the given function returns true, or -1 when no such element is found)
//The countBy function counts the characters that belong to each script from a loop-overable collection

//first we need the characterScript and countBy functions from EQJS chapter 5:

// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (script.ranges.some(([from, to]) => code >= from && code < to)) {
//       return script;
//     }
//   }
//   return null;
// }

// function countBy(items, groupName) {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex(c => c.name == name);
//     if (known == -1) {
//       counts.push({name, count: 1});
//     } else {
//       counts[known].count++;
//     }
//   }
//   return counts;
// }

//input: a string
//output: the dominant writing direction of the string (ltr, rtl, etc...)
//constraints: uses characterScript function and countBy function to determine script and its direction
//edge cases: what if scripts does not provide a dominant direction? what if script is not recognized?

function dominantDirection(string) {
  //declare the variable counted and assign it to callback to countBy, char is the only parameter of the callback function 
  //counting characters by direction using the anonymous function
  let counted = countBy(string, char =>{
    //that declares script and assigns it to the char.codePointAt(0) to get the character of the code
    let script = characterScript(char.codePointAt(0));
    //if the script is recognized, return the script direction associated with it, ifnot return none for no direction found
    return script ? script.direction : 'none'; 
  //use the .filter() method to make sure the name isn't none
  //The filter() method creates an array filled with all array elements that pass a test (provided as a function). 
  //here the test is that the name is NOT equal to none
  }).filter(({name}) => name != 'none');
  //if the length of counted is equal to zero, the dominant direction is left to right
  if(counted.length === 0) return 'ltr';
  //.reduce() results in a single output value
  //use the .reduce() method on counted, passing through two args acc(umulator) and cur(rent) to detemine if the acc count is greater than the cur count, 
  //ifso, acc, ifnot, cur
  //returns the script in SCRIPTS which is a named object that holds the known dominant direction of the script
  else{
    return counted.reduce((acc,cur) => acc.count > cur.count ? acc : cur).name;
  }
}

console.log(dominantDirection('Hello!'));// expects 'ltr'


//kaelyn's solution form class
// //use the countby function to find all of the scripts
// let scriptsArr = countBy(string, function(char){
//   //find the associative script for each character
//   let script = characterScript(char.codePointAt(0))
//   // console.log(script);
//   //check if the script is an actual script and not a symbol
//   //countBy function returns an array of objects
//   if(script){
//     return script.direction;
//   }
//   return null;
// });

// //console.log(scriptArr);
// //using the array sort method, sort each object by its count property
// scriptsArr.sort(function(a,b){
//   return b.count - a.count;
// })
// return scriptsArr[0].name;
// }

  
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
