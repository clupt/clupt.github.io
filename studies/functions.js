/**
 * FUNCTIONS: //(touch on IIFEs somewhere)//
 * 
 * 0.Functions are reusable blocks of code that accept inputs, process those inputs,
 * and return a new data value. Like everything else in Javascript, they are objects. 
 * There are essentially four parts of a function. 
 * 
 * The first part of a function is declaration. Often, but not always, there is a name
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
 * The second part of a function is its parameters. These are placeholders for 
 * the input values that a function will take down the line. When a function is called,
 * arguments are inserted into the space being held by these parameters. It should again 
 * be noted that like function names, parameters are not necessary. Functions often 
 * accomplish their tasks without taking parameters, or arguments when called. The number 
 * of arguments used when a function is called MUST match the number of parameters 
 * assigned to that function when it was declared. 
 * 
 * The third part of a function is the body. This where the code that is going to be
 * executed by the function is stored. Essentially, this is what the function DOES.
 * 
 * Finally, functions have a return statement. This ends the execution of the function and 
 * specifies the value to be returned by the function. 
 * 
 * 
 * 1. The two phases of using functions are the creation phase, and the execution
 * phase. 
 * 
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
 * 
 * 3. The syntax for a named function is:
 * function name(){
 * statements of code to be executed
 * }
 * 
 * 
 * 4. How do we assign a function to a variable.
 * 
 * 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single
 * value. How do we specify inputs? How do we specify outputs?
 * 
 *
 * 6. Scope: Functions can see and modify variables in parent or global scopes.
 * The inverse is NOT true.
 * Note: Every function has its own scope. 
 * 
 * Variables declared inside of functions become local to the function and are 
 * dealt with inside of the corresponding local scope. Local scope can be bifurcated
 * into function-scope and block-scope. Block-scope is new to ES6, and with it 
 * came new ways to declare variables. The let and const variables were introduced, 
 * and access to these variables is limited to the block of code in which they were 
 * declared and initialized. Function-scope, alternatively, refers to variables 
 * declared with the var keyword, which are only accessible (or visible) within
 * the confines of the function in which they were declared. They cannot be 
 * accessed outside of that function. 
 * 
 * 7. Closures: Functions form closures around the data they house. If an object
 * is returned from the Function and is held in memory somewhere (referenced),
 * that closure stays alive, and data can continue to exist in these closures.
 * 
 * Closures:
 * An inner function always has access to the variables and parameters of its outer 
 * function, even after the out function has returned. So, even after a function returns
 * and the execution context is gone, the variable object is not gone. It stays
 * in memory, and can be accessed. 
 * 
 */
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    };
}

var retirementUS = retirement(66);
retirementUS(1990);
retirement(66)(1990);
