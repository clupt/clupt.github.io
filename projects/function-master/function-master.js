//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called objectValues that takes an object and returns
//its values in an array
function objectValues(object) {
    //use the Object.values() method, which takes the values of an object and stores them in an array
    //return the resulting array
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called keysToString that takes an object as its parameter
//that takes the keys from an object and returns them in a string each separated with a space
function keysToString(object) {
    //declare an array in which to house the string of keys
    let arr = [];
    //use a for in loop to loop through the keys of the object
    for(var key in object){
      //push each key being looped through to a string in the array created earlier
      arr.push(key);
      //use the .join method to insert a space between each key and return the result
    } return arr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called valuesToString that takes an object as its parameter
function valuesToString(object) {
    //create an array called strings
    let stringsArr = [];
    //use a for in loop to loop through the values of the object
    for(let key in object){
        //if the typeof the value is a string
        if(typeof object[key] === 'string')
            //push the value to a string in the array stringsArr array
            stringsArr.push(object[key]);
    //return the string of values stored in the stringsArr separated by a space using the .join method
    } return stringsArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//NOTE: While it passes all the tests, does this function really establish that the typeof object
//is actually a storage object? could it be a Date or another kind of object?

//create a function called arrayOrObject that takes a collection as its parameter
//this will test to see if the collection is an array or an object, and return the resulting type
function arrayOrObject(collection){
    //using an if-else if chain, check to see if the collection is an array using is Array.isArray() method
    if(Array.isArray(collection)){
        //if it evaluated to true, return the word 'array'
        return 'array';
    //otherwise check to see if the typeof the collection is an object using typeof
    } else if (typeof collection === 'object'){
        //if it evaluated to true, result the word 'object'
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called capitalizeWord that takes a word an capitalizes its first letter of a word
function capitalizeWord(string) {
    //assign the string to a variable called lowerCaseStr
    let lowerCaseStr = string;
    //using .charAt(0) asnd .toUpperCase() alter the first character of thr string to an uppercase letter
    //the concatenate that latter with the rest of the string using the .substring() method
    //which here takes a starting index of the string and no end condition (so it will add the rest of the string
    //to the capital letter)
    //save the whole thing to the variable upperCaseStr
    let upperCaseStr = lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.substring(1);
    //return the result
    return upperCaseStr;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called capitalize all words that takes a string as its parameter
//this function will capitalize the first letter of every word in a given string
function capitalizeAllWords(string){
    //make the string all lowercase using the .toLowerCase() method
    string = string.toLowerCase();
    //split the string into an array of strings using the .split() method, adding a space as the separator
    string = string.split(' ');
    //using a for loop, iterate through the array, starting at the beginning and going to the end
    for (var i = 0; i < string.length; i++){
        //take the index of the array, change the 0 index of the string within that array-index to an uppercase letter
        //add the result of the string to the newly capitalized first letter using .substring(1)
        string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
        
        //using .slice(1) instead of .substring(1) to extract the rest of the string and add it to the first letter would work here too
        //string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    
    //use the .join method to turn the array into a string separated with spaces
    }return string.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called welcomeMessage that takes an object as its parameter
function welcomeMessage(object) {
    //use the capitalizeWord function created above to access the name property of the object and capitalize it
    //concatenate it to a string that says Welcome (Name)! and save the string to the variable message
    let message = 'Welcome ' + capitalizeWord(object.name) + '!';
    //return the message
    return message;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called profileInfo that takes an object as its parameter
function profileInfo(object) {
    //using the capitalizeWord function created above, access the name and species properties of the object
    //with the capitalized name and species, concatenate a string that says (Name) is a (Species).
    //save the string to the variable info
    let info = capitalizeWord(object.name) + ' is a '  + capitalizeWord(object.species);
    //return the string stored in the info variable
    return info;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//create a function called maybeNoises that takes an object as its parameter
//if the object has a noises array, return them as a string spearated by a space
//if there are no noises, return there are no noises
//account for the noises array being undefined
function maybeNoises(object) {
    //check to see if the noises array in the object is undefined OR if the noises array has no length
    if((object.noises === undefined) || (object.noises.length === 0)){
        // ifso, return the string 'there are no noises'
        return 'there are no noises';
    //otherwise
    }else{
        //turn the elements of the array into a string with spaces using the .join() method and return it
        return object.noises.join(' ');
    }
}
    
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called hasWord that takes a string and a word as its parameters
//it will check the word against ther string of words to see if the word is in the string
function hasWord(string, word) {
    //use the .includes() method to check the string for the word
    
    /*
    *The includes() method determines whether an array (or array-like object)
    *includes a certain value among its entries, returning true or false as appropriate.
    */
    
    if (string.includes(word)){
        //if the word is included in the string, return true
        return true;
        //if the word is not included in the string, return false
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called add friend, that takes a name and an object as its parameters
//add the name to the object's friends array and then return the object
function addFriend(name, object){
    //access the friends array and push the name into the array
    object.friends.push(name);
    //return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called isFriend that takes a name and an object as its parameters
//this should return true if the name is a friend of the object, and false if not
function isFriend(name, object){
    //check to see if the friends property of the object is  return false
    if(object.friends === undefined){
        return false;
    //if the friends property of the object includes the name, return true
    }else if (object.friends.includes(name)){
        return true;
    } else return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//create a function called nonFriends that takes a name and an array as its parameters
//this function will take a name and a list of people, and return a list of all the names that the name is NOT friends with
function nonFriends(name, array){
    //declare an empty array to store the names of nonfriends
    var notFriends = [];
    //loop through the input array
    for (var i= 0; i < array.length; i++){
        //pass the name and array [i] through the isFriend function created above
        //check to see if the name isn't found in the array...
        //AND check that the name isn't the same as the 
        //name property of the array index being looped through
        if ((isFriend(name, array[i]) === false) && !(name === array[i].name)){
            //if both conditions are met, push the array index.name into the names array
            notFriends.push(array[i].name);
            } 
        }
        return notFriends;
    }

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create an updateObject function that takes an object, key and value as its parameters
//This function will update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it.
function updateObject(object, key, value) {
    //access the key of the object and assign it a new input value
    //this creates the key if it doesn't already exist
    object[key] = value;
    //return the object with the new value
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function removeProperties that takes an object and an array of strings as its parameters
//this should remove any properties on object that are listed in the array
function removeProperties(object, array){
    //using a for in loop, loop through the object
    for (var key in object){
        //using a nested for loop, loop through the array
        for (var i = 0; i < array.length; i++){
            //if the index of the array is a key in the object
            if(array[i] === key){
                //delete the key using the delete keyword
                delete object[key];
            }
        }
    }
    //return the object with the removed properties
    return object;
}


//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called dedup that takes an array and returns an array with all the duplicates removed
function dedup(array){
    //assign the variable noDuplicates to an array literal
    let noDuplicates = [];
    //loop through the input array
    for(var i = 0; i < array.length; i++){
        //checl to see if the array index is included using the .includes() method
        if(!noDuplicates.includes(array[i])){
            //push it to the noDuplicates array
            noDuplicates.push(array[i]);
        }
    //return the noDuplicates array
    } return noDuplicates;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}