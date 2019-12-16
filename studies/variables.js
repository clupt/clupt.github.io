/**
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use 
 * variables.  Variables are named identifiers that can point to values of a 
 * particular type, like a Number, String, Boolean, Array, Object or another 
 * data-type.  Variables are called so because once created, we can CHANGE the 
 * value (and type of value) to which they point.
 * 
 *
 * 1. To create a variable we use the keyword, var, followed by a name 
 * (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization 
 * (or assignment).
 */

// 1. declaration 
var myName;

/**
 * At the declaration phase, the variable myName is undefined because we have 
 * NOT initialized it to anything
 */
 
console.log(myName);// prints ==> undefined

// 2. initialization or assignment. 
myName = 'john';
console.log(myName);// prints ==> john

// 3. re-assignment 
myName = 'bob';
console.log(myName);// prints ==> bob

/**
 * NOTE: We can assign and re-assign anything to a variable - 
 * we cannot do this with constants 
 */
var myVariable = 1;
console.log(myVariable); // ==> prints 1
myVariable = true; 
console.log(myVariable); // ==> reassigned and now prints true
myVariable = "someString";
console.log(myVariable); // ==> reassigned again and now prints someString

// 4. var 

/**
 * The var keyword is used in JavaScript to declare a variable. It can be
 * assigned, re-assigned, and updated. Variables declared with var are 'function
 * scoped'. A var declared outside of a function has global scope, but a var 
 * declared inside of a function will only be recognized in that function.
 */

function setHeight(){
    var height = 10;
    console.log(height);
}

/**
 * console.log(height) OUTSIDE of this function will throw a ReferenceError, 
 * since the height variable is function scoped, and was declared inside of the
 * setHeight function. If the var had been declared in the global scope, then
 * it would be accessible both outside of the setHeight function, and inside
 * of the setHeight function. But we declared it in there, so that's where it
 * is stuck.
 */

// 5. let, const 

/**
 * Unlike var, variables declared with the let keyword are block-
 * scoped. They can only be used within the code-block in which they're declared.
 * let variables can be updated, but not re-declared. 
*/
let day = 'Monday';
console.log(day); // ==> prints Monday
day = 'Tuesday';
console.log(day); // ==> reassigning day to Tuesday is fine. This prints Tuesday.

/**
 * re-declaring let day = 'Tuesday' here, however, would throw the 
 * SyntaxError: Identifier 'day' has already been declared
 */

/** 
 * Variables declared with const maintain a constant value. They are also block-
 * scoped. They cannot be updated or re-assigned, even within the scope in 
 * which they are declared. 
 */
 
const greeting = 'hello';
console.log(greeting);

/** 
 * reassigning const greeting = 'hi' would throw a 
 * TypeError: Assignment to constant variable
 */

// 6. hoisiting 

/**
 * Hoisting is the JavaScript default behavior of moving all variables and
 * function declarations to the top of the current scope BEFORE code execution. 
 * Even when we declare and initializing a variable in the same line, JS is very
 * strictly declaring THEN initializing the variable. Only the declaration, not
 * the initiailization, is hoisted to the top. Therefore, it is a best
 * practice to declare AND initialize a variable before using it. 
 */
 
// var a;
//console.log(a) => outputs undefined
var a = 3;
console.log(a); // => this will print 3

/**
 * It should be noted that var values will return the value of undefined if they
 * are referenced before being declared. Let and const values are not hoisted,
 * and will throw a ReferenceError if referenced before being declared.
 */
 
 // TEMPORAL DEAD ZONE 
 
 /**
  * The temporal dead zone refers to an issue in ES6 with trying to access variables
  * declared with let and const before they have been initialized or assigned. 
  * Trying to reference variables declared with let and const before they have
  * been declared results in a ReferenceError.
  */
  
 /**So, if we try to access a variable declared with let before the declaration appears:
  * x = 2;
  * // ReferenceError: x is not defined
  * let x = 3;
  * 
  * The ReferenceError will occur because the let statement has not yet been reached.
  * It is in the temporal dead zone, and trying to initialize it before declaring it 
  * does not work because the declaration has not been reached. While this is true for
  * let and const, it is not true for variables assigned with var. This is a byproduct of
  * the way these variables are hoisted. Hoisting essentially searches for function and
  * variable declarations (note: NOT variable initializations), and brings them to the
  * top. More preciesly, this is a product of how JavaScript stores variable declarations
  * in memory. With var variables, hoisting occurs - bringing the declarations and not 
  * assignments to the top, and temporarily considers the variable undefined. Then when 
  * the actual declaration and assignment of the variable is reached, the value is 
  * assigned and the code proceeds undeterred. With let and const, however, if we try to 
  * execute code referencing them before the variable has been decalred, JavaScript will
  * generate the ReferenceError, and the execution of the code will stop in its tracks.
  */