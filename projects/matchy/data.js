/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create an object literal called animal
var animal = {};
//use dot notation to add a species property and fill it with some kind of animal
animal.species = 'whale';
//use bracket notation to add a name property and fill it with some string of a name
animal['name'] = 'Horace';
//add a key of noises that is an empty array literal
animal.noises = [];
//check the animal object in the console
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable called noises and make it an empty array
var noises = [];
//using bracket notation give the noises array its 0 index element
noises[0] = 'heeeuuuuurnnn';
//using an array function add another index to the end of the array
noises.push('bbbbbbrnnnnnn');
//add some more noises with other methods or notations
noises.splice(3,1,'oihwihohio');
noises[noises.length - 1] = ('rrrruuuuuuu');
//using .unshift add a noise to the beginning of the array
noises.unshift('wefohuoih');

//ccheck the length of the array in the console
console.log(noises.length);
//check the last index of the array in the console
console.log(noises.length - 1);
//double check the array in the console to see if it looks right
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//using bracket notation assign the noises property on animal to our new noises array.
animal['noises'] = noises;
//using any syntax add another noise to the noises property of the animal array
noises.push('rehhhhhh');
//check to see if it looks right in the console
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * //you can use bracket or dot notation on objects to access their properties
 * 2. What are the different ways of accessing elements on arrays?
 * //you can only use bracket notation to access the properties of an array
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declare a variable named `animals` and assign it to an empty array.
var animals = [];
//push our animal that we created to animals.
animals.push(animal);

//console.log animals to make sure everything looks right
console.log('animals');

//Create a variable called duck and assign give it the key value pairs of 
//soecies : 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
//push duck into the animals array
animals.push(duck);

//console.log animals to make sure everything looks right
console.log('animals');

//create another animal objects with the same key value pairs
var frog = {
    species: 'frog',
    name: 'Frogger',
    //make sure to give each noises array at least two noises
    noises: ['ribbit', 'burp', 'croak', 'boing']
};

//create another animal object with those key value pairds
var snake = {
    species: 'snake',
    name: 'Clarissa',
    //make sure to give each noises array at least two noises
    noises: ['sssss', 'hisss', 'slither sounds', 'gulp'],
 
};
//push the animals created into the animals array
animals.push(frog);
animals.push(snake);
//check it in the console
console.log('animals');



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//choose a container and assign it to the variable friends
//it should be an array since arrays have indices, which will be needed for 
//using our getRandom function 
var friends = [];

//create a getRandom function that has a parameter of our animals array
function getRandom(animals){
    // use Math.random() * the length of our animals array to generate a random index from the animals array
    // use the Math.floor function to return the largest interger for the given random number generated
    //and return the value
    return Math.floor(Math.random() * animals.length);
} 

//pass the animals through the getRandom function to get a random index and store it in the variable randomIndex
var randomIndex = getRandom(animals);

//add friends as a property named friends to one of the animals in animals
snake[3] = 'friends';
snake.friends = friends;

//using a random index from the getRandom function 
//get a random animal and add its `name` to `friends`.
friends.push(animals[randomIndex].name);
//check it all in the console to make sure everything looks good
console.log(getRandom(animals));

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
