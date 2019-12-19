/**
 * STRING MANIPULATION: 
 * 
 * 0. String manipulation refers to our ability to alter strings using operators and
 * methods. It is important to remember that strings are a primitive datatype, and therefore
 * immutable. So the result of any manipulation must be stored in a new variable.
 * 
 * 1. Manipulation with Operators
 * Strings can be altered using operators in javascript. One very common instance of this 
 * is using + to concatenate two strings. 
 */
 
 let string1 = 'Candy';
 let string2 = 'corn';
 console.log(string1 + string2);//prints==> Candycorn
 //it is important to consider spaces when concatenating strings
 console.log(string1 + ' ' + string2);//==> prints Candy corn
 
 // A valuable shorthand for concatenating strings with operators is +=
 let bat = 'Batman';
 let sup = ' is better than Superman.';
 let truth = bat+=sup;
 console.log(truth);//==> prints Batman is better than Superman
 
 /**
 * 2. Manipulation with Methods
 * Strings can also be manipulated with methods. Strings have a length property, that 
 * starts at index [0], which gives us access to their specific elements.
 */
 //another way to concatenate strings, but using a method rather than +=
 let string3 = string1.concat(string2);
 console.log(string3);//==> prints Candycorn
 
 //there are tons of useful methods for manipulating strings:
 let hobby = 'I like to play chess.';
 console.log(hobby.charAt(0));//==> prints I
 
 //Note: These methods do NOT change the original string, and need to be stored in a new 
 //variable in order to be used later.
 console.log(hobby.toUpperCase());//==> screams I LIKE TO PLAY CHESS
 console.log(string1.toLowerCase());//==> prints candy
 
 //We can use the .split() method to turn a string into an array
 //It optionally takes a separator as its parameter
 let stringToArray = 'I would rather be an array';
 //Be mindful of the separator. 
 console.log(stringToArray.split(' '));//==> prints [ 'I', 'would', 'rather', 'be', 'an', 'array' ]
 console.log(stringToArray.split());//==> prints ['I would rather be an array']
 //Using an empty string as the separator will split each character of the array with a ,
 let shorter = 'shorter';
 console.log(shorter.split(''));//==> prints [ 's' , 'h' , 'o' , 'r' , 't' , 'e' , 'r' ]
 //.split can also take a limit as its second parameter, after which 
 //the items split won't be included in the array
 console.log(shorter.split('',5));//==> prints [ 's', 'h', 'o', 'r', 't' ]
 
 //Another useful string manipulation method is .slice();
 //It can extract part of a string and returns the extracted part
 let joke = 'Just the punchline';
 //it takes a starting parameter, which is where the extraction begins
  console.log(joke.slice(9));//==> prints punchline
 //and optionally takes an ending parameter that stops the extraction
 console.log(joke.slice(9,12));//==> prints pun
 
 //Here's a bonus one, because Superman is the worst.
 let stillTrue = truth.replace('Batman', 'Even Aquaman');
 console.log(stillTrue);//==> prints Even Aquaman is better than Superman