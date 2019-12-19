/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called search that takes an array called animals and a string called name as its parameters
function search(animals, name){
    //use a for loop to iterate through the array animals
    //start: var i = 0
    //end: the end of the length of the array animals
    for(var i = 0; i < animals.length; i++){
        //if the index of the animals array is a name that exists
      if(name === animals[i]['name']){
          //return the object found at that index of the animals array
            return animals[i];
      }
      
      //otherwise return null
      //this null return should occur outside of the loop to avoid returning null after the first index
      //of the animals array doesn't match the name being searched for
    } return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called replace that takes three parameters
//these are the array animals, the name being search for to be replaced
//and the replacement object that we will insert into the name that is found the search
function replace(animals, name, replacement){
    //use a for loop to iterate through the entirety of the animals array
    for(var j = 0; j <= animals.length; j++){
        //if the name found at the index of the animals array is strictly equal to the name parameter
        //(that is, if the name being input when calling the function is found within the array)
       if(name === animals[j]['name']){
           //assign that index of the animals array to replacement 
           animals[j] = replacement;
           //otherwise, if the name is not found within the array
       } else if(name !== animals[j]['name']){
           //return to end the function
           return;
       }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called remove that takes the parameters of the array animals, and the name being searched for
function remove(animals, name){
    //use a for loop to iterate through the entirety of the animals array
    for(var k = 0; k < animals.length; k++){
        //if the name being searched for is equal to the name property of the index of the animals array
        if(name === animals[k]['name']){
            //use .splice() to remove one value found at that index
            animals.splice(k, 1);
        }
    }
}
        
        
//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    //make a function called add that takes two parameters
    //the parameters are the animals array and the object representing a new animal to be added
    function add(animals, animal){
        //using a for loop, iterate through the length of the animals array
        for(var l = 0; l < animals.length; l++){
            //check to see if the name property of the animal object doesn't have a length that is greater than 0
            //OR if the species property of the animal object doesn't have a length that is greater than 0
            //if EITHER of those are determined to be true, 
            //check to see if the name property of the index of the animals array being iterated through the for loop
            //is equal to the name property of the animal object... (that is, check to see if the name of the animal object is not being used in the animals array already)
            if(!(animal['name'].length > 0 || animal['species'].length > 0) || (animals[l]['name'] === animal['name'])){
                //if the lengths of name or species don't have a length greater than 0 OR the name is not unique
                //return to get exit the loop
                return;
            }
        //if all of those criteria are met, add the new animal object to the animals array using the splice method
        } animals.splice(l, 0, animal);  
    }

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
