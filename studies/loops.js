/**
 * LOOPS:
 * 
 * 0. Loops are a construct in programming used to perform an action repeatedly. 
 * The number of times this action will be repeated before stopping can be 
 * designated. The incrermentor or decrementor can be ++, --, +=2, etc...
 * 
 * 1. For loops, while loops, and for-in loops are the three most commonly used kinds 
 * of loops. They kind of loop being used is determined by the action we are trying to
 * perform when we iterate through the loop.
 * This is the syntax for a for loop:
 * for(start; stop; incrementor){
     code block
    };
 */
 
 //start: 0
 //end: 5
 for(var i = 0; i < 5; i++){
  console.log('All work and no play makes Jack a dull boy');
 }//==> prints the string 5 times

 let beverages = ['water', 'juice', 'tea', 'wine', 'beer'];
    for (let i = 0; i <= beverages.length; i++){
     console.log(beverages[i]);
    }//==> prints each index of the array 
 
 /**
 * 2. Looping any number of times is possible. Forward counting up to Some limit,
 * backward counting down to 0
 */
 
 //We can use while loops to count up or down to some limit.
 
 console.log('while loops');
 
 //counting up to a limit
 //start : 1
 //end: 10
 let z = 0;
 while(z < 10){
  z++;
  console.log(z);
 }//==> prints 1-10

//counting down to a limit
 var count = 10;
 while(count > 0){
  count--;
  console.log(count);
 }//==> prints 10-0
 
 /**
 * 3. Looping over an array, forward and backwards
 */
 
 console.log('for loops');
 //start: at the beginning of the array
 //end: at the end of the array
 let numbers = [1, 2, 3, 4, 5, 6];
 for(let i = 0; i < numbers.length; i++){
   console.log(numbers[i]);
 }//==> prints 1 2 3 4 5 6
 
 //start: at the end of the array
 //end: at the beginning of the array
 for(let i = numbers.length-1; i >= 0; i--){
     console.log(numbers[i]);
 }//==> prints 6 5 4 3 2 1

//the incrementor can be specified
//start: 0
//stop: 8
//incrementor: 2

for(let i = 0; i < 9; i += 2){
  console.log(i);
}//==> prints 0 2 4 6 8
 
 /**
 * 4. Looping over an object using for in loops
 */
 
 /**for in loops pull all of the values of an object
  the syntax is:
  for (variable in object){
   statement
  }
  */
  
 let myObject = {
  name: 'Chris',
  food: 'Thai',
  drink: 'Coffee',
  student: true
 };

 // We use for in loop to iterate through an object and access the keys and/or
 // values held within.

 for(var key in myObject){
  console.log(key);//==> prints the keys of the object
  console.log(myObject[key]);//==> prints the values of the keys in the object
 }
 
 /** 
  * NOTE: we must be careful not to accidentally write code that results in an
  * infinite loop. If the starting condition is incrementing or decrementing 
  * away from the ending condition, the loop will run infinitely and likely 
  * crash your computer.
  */
  
 //avoid infinite loops like 
 //for(var i = 0; i < 10; i--){
 //};
 
 /** 
  * Here we are starting at i = zero, and while i is less than 10, we are 
  * counting down. So this will print all the negative numbers and never reach
  * our ending condition. Yikes.
  */