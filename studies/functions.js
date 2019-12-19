/**
 * FUNCTIONS:
 * 
 * 0.Functions are containers that house reusable blocks of code. They accept inputs, 
 * process those inputs, and return a new data value. Like everything else in Javascript,
 * they are objects. 
 * 
 * There are essentially four parts of a function. 
 * 
 * 0.1 The first part of a function is declaration. Often, but not always, there is a name
 * specific to the function. This name allows us to call the function later. It should 
 * be noted, though, that there are often anonymous functions, or functions that are not
 * bound to an identifier. They are declared without a name, and cannot be accessed again 
 * after their creation. Well, that isn't entirely true. There are Function Expressions, 
 * which refers to our ability to define a function inside of an expression. When we 
 * create an anonymous function and assign it to a variable, we are creating a function 
 * expression. Anonymous functions are often nested into arrays, objects, or even other 
 * named functions.This allows them to remain useful whenever their parent function is 
 * called. Higher Order Functions are functions that accept other functions as their 
 * arguments, or return a function as their output. 
 * 
 * 0.2 The second part of a function is its parameters. These are placeholders for 
 * the input values that a function will take down the line. When a function is called,
 * arguments are inserted into the space being held by these parameters. It should again 
 * be noted that like function names, parameters are not necessary. Functions often 
 * accomplish their tasks without taking parameters, or arguments when called. The number 
 * of arguments used when a function is called MUST match the number of parameters 
 * assigned to that function when it was declared. 
 * 
 * 0.3 The third part of a function is the body. This where the code that is going to be
 * executed by the function is stored. Essentially, this is what the function DOES.
 * 
 * 0.4 Finally, functions (usually) have a return statement. This ends the execution of 
 * the function and specifies the value to be returned by the function. 
 * 
 * 
 * 1. The two phases of using functions are the creation phase, and the execution
 * phase. 
 * 
 * //Creation Phase
 * This is when the function is declared or defined. Functions (and variables) are stored
 * into memory during this phase. Assignment statements are NOT executed here, rather 
 * these declarations are set to the value of undefined. This is important when it comes
 * to HOW functions (and variables) are hoisted. 
 * 
 * //Execution Phase
 * This is when the code within a function is actually executed, and occurs when we invoke
 * the function. 
 * 
 * 2. As stated above, the parameters of a function are placeholders for the arguments
 * that will later be passed through that function. Another way to look at it is that
 * the parameters are the variables in the declaration of a function, and the arguments
 * are the values of those variables.
 */
 
 //Here's a named function:
 //here the PARAMETER of the function is birthYear
 function calculateAge(birthYear){
     //this {code block} statement is what the function does
     //in this case subtracting birthYear from 2019, and returning the result
    return 2019 - birthYear;
 }
 //here the ARGUMENT 1983 is being passed through the function 
 //the result is stored in the variable ageChris
 let ageChris = calculateAge(1983);
 console.log(ageChris);//==> prints 36
 
 /**
 * 3. As seen above with the calculateAge function, the syntax for a named 
 * function is:
 * function name(){
 * statements of code to be executed
 * }
 */
 
 /**
 * 4. How do we assign a function to a variable.
 * Just like other objects in JavaScript, we can assign a function to a variable
 * using the assignment operator. 
 */
 
 let myFunction = function(){
     console.log('This is my function');
 };
 myFunction();//invoking it runs the code and ==> prints This is my function
 
 /** 
 * 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single
 * value. How do we specify inputs? How do we specify outputs?
 * 
 * The optional inputs that a function can take are the parameters. They are
 * specified inside of the () of the function. IF we give a function parameters,
 * then we must have correlating arguments. While functions can return a value by
 * declaring a return statement, they don't have to return anything. 
 */
 
 // Here is a function that takes two strings as its parameters and concatenates them.
 function goodbye(string1, string2){
     return string1 + string2;// this specifies the output
 }
 //we pass arguments through to specify the inputs
 //just for clarity I'll save it to a variable to log to the console
 let oldFriend = goodbye('Goodbye,', ' old friend.');
 console.log(oldFriend);//==> prints Goodbye, old friend.
 
 /**
 * 6. Scope: Functions can see and modify variables in parent or global scopes.
 * The inverse is NOT true. We create new scopes by writing new functions.
 * 
 * Note: Every function has its own scope. To put that another way, each function
 * creates a scope in which the variables that it defines are accessible.
 * Variables declared inside of functions become local to the function and are 
 * dealt with inside of the corresponding local scope. Block-scope is new to ES6, 
 * and with it came new ways to declare variables. The let and const variables were 
 * introduced, and access to these variables is limited to the block of code in 
 * which they were declared and initialized. Function-scope, alternatively, applies
 * to variables declared with the var keyword, which are only accessible (or visible) 
 * within the confines of the function in which they were declared. They cannot be 
 * accessed outside of that function. 
 */
 
 /**
  * Here a function uses a global variable declared with var and a local variable 
  * declared with let. This is not problematic.
  */
 
 var filmOne = 'The Shining';
 function isFilm(){
     let isGood = ' is a good film.'; 
     return filmOne + isGood;
 }
console.log(isFilm());//==> prints The Shining is a good film.
 //the variable isGood, however, is not accessible outside of the isFilm function

/** 
 * A function that is within another function gets access to the scope of the 
 * outer function. This is called Lexical Scoping. So, in the example below, the
 * action of logging the variables within the local scope of the function 
 * secondFunction is fine, because the child scope has access to the variables 
 * and functions of its parent scope. 
 */
 
//GLOBAL SCOPE
var outer = 'I am';
first();
function first(){
    //FUNCTION SCOPE
    var inner = ' inside';
    secondFunction();
    
    function secondFunction(){
        //LOCAL SCOPE
        var innermost = ' a nested function';
        console.log(outer + inner + innermost);//==>prints I am inside a nested function
    }
}

 /**
 * 
 * 7. Closures: Functions form closures around the data they house. If an object
 * is returned from the Function and is held in memory somewhere (referenced),
 * that closure stays alive, and data can continue to exist in these closures.
 *
 * An inner function always has access to the variables and parameters of its outer 
 * function, even after the outer function has returned. So, even after an outer
 * function returns and the execution context is gone, the variables inside of it
 * are not gone. They stay in memory, and can be accessed. 
 */

function helperBot(firstName, lastName) {
  function fullName(){
    return firstName + " " + lastName;
  }
  console.log( "Hello, " + fullName() );
  console.log( "How may I help you, " + fullName() + '?' );
}
helperBot('Chris', 'Lupton');