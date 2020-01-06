// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-clupt");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

//create a maleCount function designed to take and array as its arg and output the number of instances of males in that array
//input: (array) the entire array of data 
//output: (number) the number of males found in the data array
//constraints: must use _.filter

var maleCount = function(array) {
    
    //using the filter function, find the number of male customers
    let arrayOfMales = _.filter(array, function(customerObject, index, collection){
        //return the customerObject when the gender property is strictly equal to male
    return customerObject.gender === 'male';
    });
    // console.log(arrayOfMales.length); -> 3
    //return the length of the arrayOfMales to get the number of males
    return arrayOfMales.length;
};


//create a femaleCount function designed to take the data array and output the number of females
//input: (array) the entire data array
//output: (number) the number of females found in the array
//constraints: must use _.reduce

var femaleCount = function(array){
    //using reduce, find the number of female customers
    //set an accumulator to catch the number, and iterate through the array increasing the number by 1 everytime it encounters a female
    return _.reduce(array, function(accumulator, currentObject){
        //if the customer's gender is female
        if(currentObject.gender === 'female'){
            //add one to the accumulator
            return accumulator = accumulator + 1;
        } 
        // always return the accumulator so we dont get undefined
        // console.log(accumulator); -> 4
        return accumulator;
    //the ,0 is the accumulator
    }, 0);
};
    
    
//create an oldestCustomer function designed to find the name of the oldest customer
//input: (array) entire data array
//output: (string) the name of the oldest customer

var oldestCustomer = function(array) {
    // declare an oldest variable and assign it to an empty object literal
    let oldest =[];
    //use _.each to iterate through the array, taking an element, index, and array as the args in its function 
    _.each(array, function(customer, i, arr) {
        //assign the customer.age and customer.name properties of the entire array to the indexes of the oldest array
        oldest[i] = ([customer.age, customer.name]);
});
    //use the sort method to sort the oldest array of ages and names by the number in descending order
   oldest.sort(function(a, b){return b[0] - a[0]});
    //return the [0] index of the oldest array which is the (age and name) of the oldest customer in the array
    //and return the [1] index of the oldest[0], which is just the name as a string (oldest[0][0] would give just the age)
   return(oldest[0][1]);
};


//create a youngestCustomer function designed to find the name of the youngest customer
//input: (array) entire data array
//output: (string) the name of the youngest customer

var youngestCustomer = function(array){
    //declare a youngest variable and assign it to an empty object literal
    var youngest =[];
    //iterate through the array with _.each, taking an customer element, index, and arr as its params
    _.each(array, function(customer, i, arr) {
        //assigned the customer ages and names of the array to the indices of the youngest array
        youngest[i] = ([customer.age, customer.name]);
});
    //use sort to order the youngest array by age from lowest to highest
   youngest.sort(function(a, b){return a[0] - b[0]});
   //return the lowest age youngest[0], and the name property of that customer [1]
   return(youngest[0][1]);
};


//create an averageBalance  function designed to find average of the balance properties in the data array
//input: (array) the entire data array
//output: (number) the average of all the balances

var averageBalance = function(array){
    //declare a balance variable
    let bal;
    //declare an add variable
    let add;
    //declare a total variable and assign it to an empty array literal
    let total = [];
    //use the _.each on the array with a function used to iterate through the elements and push them to the total array
    _.each(array, function(e, i, arr) {
        //assign the balance to the balance property of the elements
        bal = e.balance;
        //use .replace to remove the $ and , from the balances
        bal = bal.replace('$', '').replace(',', '');
        //use parseFloat to return the balances as a floating point number and assign them to the add variable
        add = parseFloat(bal);
        //push the cleaned up balances into the total array
        total.push(add);
    });
    //declare a sum variable and assign it to the 0 index of the object array to get all of the balances
    let sum = total[0];
    // console.log(total);
    //use a for loop to iterate through the total array
    for(let j = 1; j < total.length; j++){
        //add each iteration of the balances in the total array to the sum variable
       sum = sum + total[j];
    //   console.log(sum);
    }
    //divide the sum variable by the length of the balances in the total array to get the average
    let result = (sum / total.length);
    //return the average
    //console.log(result);
    return result;
};


//create a firstLetterCount function that designed to determine how many customers names begin with a given letter
//inputs: (array and letter) the entire data array and a target letter being searched for at the beginning of the names
//output: (number) the number of customers whose names begin with the target letter

var firstLetterCount = function(array, letter){
    //use the reduce method to iterate across the array of customers, with an accumulator to add the number of instances and a customerObject element to test against
    return _.reduce(array, function(accumulator, customerObject){
        //use .toLowerCase() on both the customer name and the input letter to account for case sensitivity
        //check with strict equality to see if the customer.name starts with the input letter (has it at its'[0] index)
        //if the first letter of the name is the same as the target letter...
        if (customerObject.name[0].toLowerCase() === letter.toLowerCase()){
            //add to the accumulator by one for every instance of their equality
            accumulator++;
        } //return the accumulator
        return accumulator;
    }, 0); 
};


//create a friendFirstLetterCount function designed to determine how many friends of a given customer have names that start with a given letter
//inputs: (array, customer, letter) the full data array, a customer element being tested for specific friends, a target letter being tested against the customer input
//output: (number) the number of friends in the array that the input customer has whose names start with the input letter

var friendFirstLetterCount = function(array, customer, letter){
    //convert the input letter to lowercase to account for case sensitivity
    letter = letter.toLowerCase();
    //declare a firstLetters variable and assign it to an empty array literal
    let firstLetters = [];
    //use the _.each function to iterate through the data array, with a function that takes the customerObj element as its param
    _.each(array, function(customerObj){
        //if the customerObj element's name property is equal to a customer in the array...
        if(customerObj.name === customer){
            //iterate through
            for(let i = 0; i < customerObj.friends.length; i++){
                //push the lowercased first letters of the names of the iterated friends to the firstLetters array
                firstLetters.push(customerObj.friends[i].name[0].toLowerCase());
            }
        }
    });
    //declare a count variable and set it to 0
    let count = 0;
    //use the includes method to see if the firstLetters include the input letter
    if(firstLetters.includes(letter)){
        //use the ._each function to iterate through the firstLetters array, taking customerObject elements as the param of the function being used on each
        _.each(firstLetters, function(customerObj){
            //if the customerObj is strictly equal to the value...
            if(customerObj === letter){
                //add to the count variable
                count++;
            }
        });
    }
    //return the count variable
    return count;
};

//create a friendsCount function that is designed to find the customers' names that have a given customer's name in their friends list
//inputs: (array, name) the data array, and a target name to test against
//output: (array) an array that holds the names of the friends included in the list of friends of the target name

var friendsCount = function(array, name){
    // use reduce to iterate through the array, taking the data array and a function as its params
    //the function takes an accumulator and customerObject element as its params
    return _.reduce(array, function(accumulatorArray, customerObject){
        //use each to iterate through the friends
        _.each(customerObject.friends, function(friend){
            //if the name property of the friend is included...
            if(friend.name.includes(name)){
                //push the customer name to the accumulator array
                accumulatorArray.push(customerObject.name);
            }
        });
    //return an array
    return accumulatorArray;
    }, []);
};


//create a topThreeTags function designed to take all of the tag properties in the data array and return the three most common tags
//input: (array) the data array
//output: (array) an array that contains the three most common tags

var topThreeTags = function(array){
    
    //find the three most common tags among customers associated tags
    //use reduce top get all of the tags into one accumulatorArray
    //flatten the dynamnic accumulatorArray into one array
    //use sort on that array to get the top three most prevelant tags
    //splice off the top three into a new array
    //push those tags into a new array and return that array
    
    //use reduce on the data array, taking an array and a function as its params. 
    //the function will have an accumulator (that is an array) and a customer element as its params
    let topTags = _.reduce(array, function(accumulatorArray, customer){
        //push all of the customer tags into the accumulator array
        accumulatorArray.push(customer.tags);
        //return the accumulator array
        return accumulatorArray;
    }, []);
    
    //flatten the dynamic array
    //declare a flatTags variable and assign it to an array literal
    let flatTags = [];
    //use two nested for loops to flatten the dynamic array
    for (let i = 0; i < topTags.length; i++){
        for (let j = 0; j < topTags.length; j++)
            //push the flattened topTags array into the flatTags array
            flatTags.push(topTags[i][j]);
    }
    
    //sort the flattened array by order of descending frequency
    //use an internal sort function called sortByFrequency that takes an array (which will be the arg flatTags) as its param
    function sortByFrequency(array){
        //declare a frequency variable and assign it to an object literal 
       let frequency = {};
       //use the forEach method on the array to set the initial frequency count to 0
       array.forEach(function(value){
           frequency[value] = 0;
       });
       //declare a commons variable and assign it to
       //use the .filter method to increase the count of the frequency every time the iteration happens to the same tag
       let commons = array.filter(function(value){
           return ++frequency[value] === 1;
       });
       //use the sort method on commons, sorting the frequency in order from highest to lowest
       return commons.sort(function(a,b){
           return frequency[b] - frequency[a];
       });
    }
    //call the sortByFrequency function on the flatTags array
    let sorted = sortByFrequency(flatTags);
    //console.log(sorted);
    //assign the first three indexes of the result to a new array
    let topSorted = sorted.splice(0,3);
    // console.log(topSorted);
    //return the new array
    return topSorted;
};


//create a genderCount function designed to create a summary of the instances of the genders, with a count value for the number of times they occur
//input: (array) the data array
//output: (object) the genders object that holds a summary
    /**
     * {
     *  male: 3,
     *  female: 4,
     *  non-binary: 1
     * }
     */
//constraints: must use _.reduce

var genderCount = function(array){
    
    //declare an empty gender objects literal
    let genders= {};
    //declare a accumulator array with 3 indexes set to 0 in it to hold the three count values of the gender instances
    let acc = [0, 0, 0];
    //use the reduce function on the data array, with a function that takes an accumulator and the customer element as its param
    _.reduce(array, function(acc, customer){
        //use if-else if chain to account for iterations that equal the target gender properties
        //use an if statement to check to see if the gender property of the customer object is strictly equal to 'female'
        if(customer.gender === 'female'){
            //for every instance that it is equal, add one to the accumulator array's[0] index
            acc[0]+=1;
            //return accumulatorArray
            return acc;
        //use an else if statement to check if the gender is strictly equal to male
        } else if(customer.gender === 'male'){
            //for every instance, add 1 to the [1] index of the acc array 
            acc[1]+=1;
            //return acc to aoid undefined
            return acc;
        //do the same thing for the 'non-binary' gender instances in the customer object
        } else if(customer.gender === 'non-binary'){
            //add one to the [2] index of acc for every instance
            acc[2]+=1;
            //return acc
            return acc;
        }
        //return the acc array
           return acc;
    }, acc);
    
    //use dot notation to assign the acc[0] index value to the key of female in the genders object
    genders.female = acc[0];
    //use dot notation to assign the acc[1] index value to the key of male in the genders object
    genders.male = acc[1];
    //be careful to use bracket notation and quotes on non-binary to account for the -
    //and assign acc[2] to the non-binary key
    genders['non-binary'] = acc[2];
    
    //return the genders object
    return genders;

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
