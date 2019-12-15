/**
 * DATATYPES:
 * 
 * 0. In JavaScript there are primitive (or simple) datatypes, and complex 
 * (or reference) data types. The primitive datatypes are numbers, strings, 
 * booleans, undefined, and null, and NaN. The complex datatypes are objects, 
 * arrays, and functions. 
 * 
 * One aspect of JavaScript is that it allows for Type Coercion. This is the 
 * process of converting one datatype to another. For example, converting a 
 * string to a number is possible, and since JavaScipt is a 'weakly-typed'
 * language, this can be done automatically. This automatic, behind the scenes
 * type-coercion is called Implicit type coercion.
 */ 
 
 var varOne = '5';
 var varTwo = 4;
 var res = varOne - varTwo;
 console.log(res); // ==> prints the NUMBER 1
 
 
 /** 
 * There is also Explicit type coercion, or Type Conversion, is where the developer 
 * uses code to intentionally convert one datatype to another. 
 */
 
 var num = 5;
 console.log(num.toString()); //==> prints the STRING '5'
 
 //Primitive Datatypes
 
/**
 * 1. Numbers are used for any numerical value: positive, negative, decimal points, etc...
 * Like regular numbers elsewhere in life, we can perform arithmetic on this datatype
 * to create new values. 
 */
 
 let age = 36;
 console.log(age); //==> prints the number 36
 
 let currentAge = 36;
 let yearBorn = 2019 - currentAge;
 console.log(yearBorn);//==> prints the number 1983
 
 /**
 * 2. Strings are used for textual data. They are characters wrapped in '', or 
 * "". There is no difference between encasing a string of characters with 
 * single or double quotes. Strings have a length property, and the elements of
 * the string are 0-indexed. That means that the first character of a string 
 * would have an index of 0, the second an index of 1, and so on...  
 */
 
 let greeting = 'Hello Jupiter';
 let newGreeting = ' and Saturn';
 console.log(greeting);//prints the string Hello Jupiter
 console.log(greeting[0]);//prints the first index of the string ==>H
 console.log(greeting[greeting.length-1]);//prints the string at the last index of greeting ==>r
 let fullGreeting = greeting + newGreeting;//concatenates the two strings
 console.log(fullGreeting);//prints ==> Hello Jupiter and Saturn
 console.log(fullGreeting.length);//gets the length of the string ==>24
 
 /**
  * There are too many methods that can be used on strings to list here,
  * but the main take away should be that since strings are a primitive
  * datatype and are immutable, these methods do not change the original 
  * string so the result of using them must be stored in a new variable.
  */
 
 /**
 * 3. Booleans are a LOGICAL datatype used for true/false values. Booleans
 * can ONLY store one of two values: true or false. They can be thought of as 
 * on/off switches. This datatype is essential for conditional statements. 
 */
 
 let x = 4;
 let y = 5;
 if(x < y){ //performs an action based on the boolean value being evaluated inside ()
  console.log('Do this');// ==> prints Do this
 } else {
  console.log('Do not do this');
 }
 
 /**
 * Side Note: The concepts of truthy and falsy are important in JavaScript. 
 * Everything with a value is considered true. Truthy expressions are those that 
 * evaluate to the boolean true. Falsy expressions, of which there are only six, 
 * are those that evaluate to the boolean false. 
 * These six falsy expressions are:
 * -the boolean 'false'
 * -an empty string ''
 * -undefined
 * -null
 * -NaN
 * -the Number 0 (not the string '0')
 * 
 * 4. undefined are undefined values.
 * 
 * 5. null is used to denote the absence of value.
 *
 * 6. NaN is a numeral type which stands for Not a Number.
 */
 
 //Complex Datatypes
 
 //TALK ABOUT BRACKET NOTATION AND DOT NOTATION HERE
/**
 * 1. Objects
 * 
 * 2. Arrays
 * 
 * 3. Functions
 */
 
 //Infinity and -Infinity
 
/**
  * 1. Infinity
  * 
  * 2. -Infinity
  */
 
 
 // The differences between Primitive and Complex Datatypes
 
 /**
  * 
  * Primitive datatypes are immutable. They cannot be altered. Variables that hold 
  * primitive datatypes can be reassigned, but the primitive itself cannot be changed. 
  * They are copied by value. This means that if a primitive datatype is assigned to 
  * a variable, we can think of that variable as CONTAINING the primitive value. When 
  * we assign these variables to other variables, we copy the VALUE of the primitive 
  * to the new variable. 
  * 
  * Complex datatypes collect and hold other the values. They have indefinite size. 
  * They are mutable. Unlike primitives, which are copied by value, complex datatypes
  * are copied by reference. That is, when we copy a variable that is assigned to a complex
  * datatype, we are copying the REFERENCE to where the complex datatype is stored. 
  * 
  * This distinction of how we copy datatypes is a product of the amount of memory they
  * require. Primitive datatypes require a fixed amount of memory, and therefore copying
  * their values is feasible. But since complex datatypes can hold an infinite amount of
  * elements within them (and they are not fixed in size) their values cannot be stored to memory
  * in the variables to which they are assigned. 
  */ 
