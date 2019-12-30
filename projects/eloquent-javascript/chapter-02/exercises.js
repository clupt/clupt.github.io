
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function called triangles that takes a parameter
//input: level parameter that sets the length at which each level stops
/*output: 
#
##
###
####
#####
######
#######
*/
//constraints: the size of the triangle has to be mutable, so hardcoding 7 into the loop is not an option
//           : should log each level separately

function triangles(level) {
  //using a for loop, declare i to equal the # needed to for the levels of the triangle
  //while the length of the i string is less than the stop parameter being established by the level argument
  //'i' will incrememnt by i = i + #
  for(let i = '#'; i.length <= level; i += '#'){
    //print i
    console.log(i);
  }
}
//when we invoke the function with any number argument
//it will create that many levels to the triangle
triangles(7);

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function called fizzBuzz that takes two parameters
//input : start: the number from which the range of numbers will begin
//      :  stop: the number at which the range of numbers will end
//output: the numbers between the range of numbers, with multiples of 3 producing 'fizz',
//      : multiples of 5 producing 'buzz', and multiples of both producing 'fizzbuzz'
//constraints: the range should only be 1-15 (including 15)
function fizzBuzz(start, stop) {
  
  //write a for loop that iterates through the numbers between (and including) the params
  for(var i = start; i <= stop; i++){
    //log fizzbuzz if i is divisble by 15 (which covers both %3 and %5)
    if(i % 15 === 0){
      console.log('fizzbuzz');
      //otherwise log fizz is i is divisible by 3
    } else if( i % 3 === 0){
      console.log('fizz');
      //otherwise log buzz if i is divisible by 5
    } else if( i % 5 === 0){
      console.log('buzz');
      //otherswise just log the numbers that aren't covered by fizz,buzz,fizzbuzz
    } else {
      console.log(i);
    }
  }
}
//call the function so that it starts at 1 and ends at 15 and assign it to the variable results
let results = (fizzBuzz(1,15));
//log the variable results
console.log(results);


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function called drawChessboard that takes a size as its parameter
//input: the size parameter of the chessboard 
/*output: an 8x8 grid of alternating spaces and #
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/
//constraints: the size of the board must be mutable, and cannot be hardcoded into the function

function drawChessboard(size) {
  //create a variable board to house an empty string that will be filled by ' ' or '#'
  let board = '';
  //use a for loop to iterate through the string to create the rows
  //start: 0
  //end: the size of the board being passed through the function
  for(let i = 0; i < size; i ++){
  //and a nested for loop to iterate through the string to create the columns
  //start: 0
  //end: the size of the board being passed as an argument
    for(let j = 0; j < size; j++){
      //use a conditional statement to determine if the rows will begin with a space or a #
      //add ' ' or '#' to the rows pending on whether they are even or odd, so that it alternates
      // otherwise concat '#' to the board variable
      board += (i % 2) === (j % 2) ? ' ' : '#';
    }
    // instead of the ternary operator above, could use an if else statement:
    //   if ((i+j) % 2 === 0){
    //   board += ' ';
    //   } else {
    //   board += '#';
    //   }
    // } 
    //after the interal loop has ended at the size arg, add a new line break
    //to move to the next row, which is also limited to the size (so we have a grid)
    //could possibly use two parameters/pass two arguments if you wanted to create rectangular boards
    board += '\n';
  } // print the board to the console 
  console.log(board);
}
drawChessboard(8);
drawChessboard(2);
drawChessboard(7);

  
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
