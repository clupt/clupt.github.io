// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function (value){
    //return the input value unchanged
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
     //if the value is strictly equal to null, return false
    if (value === null){
        return 'null';
    //using Array.isArray(value) determine if the value is an array
    } else if (Array.isArray(value) === true){
    //ifso, return array
        return 'array';
    //if the typeof the value is an object, return object
    } else if (typeof value === 'object'){
        return 'object';
    //if the type of value is any other datatype (like a string or number), return false
    } else if(typeof value === 'function'){
        return 'function';
    //if the type of value is undefined, return undefined
    } else if (typeof value === 'undefined'){
        return 'undefined';
    //if the type of value is a number, return number
    } else if (typeof value === 'number'){
        return 'number';
    //if the typeof value is a boolean, return boolean
    } else if(typeof value === 'boolean'){
        return 'boolean';
    //if the typeof value is a string, return strings
    } else if(typeof value === 'string'){
        return 'string';
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
    
    //use the Array.isArray method, test to see if the given array is an array
    if(!Array.isArray(array)){
        //if it isnt, return an empty array literal
        return [];
    //use the typeof method to test whether the number given is in fact a number
    } else if(typeof number !== 'number'){
        //if it isn't a number, return the index [0] element of the given array
        return array[0];
    //if the number is less than zero, return an empty array literal
    } else if (number < 0){
        return [];
    //otherwise, if the number is greater than the length of the array, return the array
    } else if (number > array.length){
        return array;
    //otherwise, use the slice method on the array to return the first number of items in the array
    } else {
        return array.slice(0, number);
    }
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){
    //use the Array.isArray method, test to see if the given array is an array
     if(!Array.isArray(array)){
         //if it isnt, return an empty array literal
        return [];
    //use the typeof method to test whether the number given is in fact a number
    } else if(typeof number !== 'number'){
        //if it isnt, return the last indexed element of the given array
        return array[array.length-1];
    //if the number is less than zero, return an empty array literal
    } else if (number < 0){
        return [];
    // if the number is greater than the length of the array, return the array
    } else if (number > array.length){
        return array;
    //otherwise use the slice method to return the last number of items in the array
    } else {
        return array.slice(-number);
    }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    //use a for loop to iterate through the input array
    for(let i = 0; i < array.length; i++){
        //if the iterated index of the array is strictly equal to the target value
        //given as an argument, return that index
        if(array[i] === value){
            return i;
        } 
    //if the target value is not found in any index within the array, return -1
    } return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    //declare a variable valled contained and assign it to a ternary conditional
    //use the .includes method to search for a target value within the array
    //if the value is included in the array, return true, if it is not, return false
    let contained = array.includes(value) ? true : false;
    //return the boolean value held within the contained variable
    return contained;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    //use the Array.isArray method to test whether the given collection is an array
    if(Array.isArray(collection)){
        //if the collection is an array, iterate over it using a for loop
        for(let i = 0; i < collection.length; i++){
            //calling function argument on each element of the array, its index, and the given collection
            func(collection[i], i, collection);
        } 
    //if the given collection is an object and not an array,
    } else {
        //use a for in loop to iterate through the given object
        for(let key in collection){
            //call the function on each property of the given collection
            //the property's value, it's key, and the given collection
            func(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
    //declare a unqiueArr variable and assign it to an empty array literal
    let uniqueArr = [];
    //use a for loop to iterate through the given array
    for(let i = 0; i < array.length; i++){
        //use the indexOf method to push any non-duplicate values from the given array into
        //the uniqueArr variable initialized above
        if((_.indexOf(uniqueArr, array[i])) === -1){
            uniqueArr.push(array[i]);
        }
    //return the unique array 
    }return uniqueArr;
};


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){
    //declare an filtered variable and assign it to an empty array literal
    let filtered = [];
    //loop through the array using the each callback function, calling the function parameter and calling the element, index, and an array to be filtered
    _.each(array, function(e, i, array){
        //if the function called testing the elements returns true for the function...
        if(func(e, i, array) === true){
            //push the elements being filtered into the filtered array
            filtered.push(e);
        }
    });
    //return the filtered array
    return filtered;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
    //declare a variable rejected and initialize it to filter function that tests a given element, index, and array against the arguments of the filter function
    let rejected = _.filter(array, function(e, i, array){
        //return anything that doesn't return true for the filter function to the rejected variable
        return !func(e, i, array);
    });
    //return the new array of elements that were rejected by the filter test
    return rejected;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
    //declare a partedArr variable and assign it to a parent array that has two empty sub-arrays inside of it
    let partedArr = [[], []];
    //loop through the array argument using the each method
      _.each(array, function(e, i, array){
        //if the function argument returns true (or more specifically a truthy value) 
        if(func(e, i, array) === true){
            //push the elements that returned true to the empty sub-array within the partedArr variable
            partedArr[0].push(e);
        //otherwise, if the function argument returns false (or a falsey value)
        }else if(func(e, i, array) === false){
            //push the elements to the second empty sub-array within the partedArr variable
            partedArr[1].push(e);
        }
    });
    //return the new partedArr array that now holds two sub-arrays, one filled with the elements with values that resolved to truthy 
    //and a second that holds the elements that resolved to falsey from our function argument being called on them
    return partedArr;
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    //declare a variable called maps and initialize it to an empty array literal
    let maps = [];
    //use the each function to loop through the collection being passed through the map function
    _.each(collection, function(e, i, array){
        //push the return values of each function call to the empty maps array
        maps.push(func(e, i, array));
    });
    //return the new maps array
    return maps;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property){
    //declare a variable plucked and assign it to an empty array literal
    let plucked = [];
    //call the map function on the given array argument
    return _.map(array, function(e, i, array){
        //assign the element property from the map call to the empty plucked array
        plucked = e[property];
        //return the plucked array
        return plucked;
    });
   
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, test){
    //declare the variable every and assign it to an empty array literal
    let every = [];
    //if the test function is not given
    if(!test){
        //run the filter callback function inside of the contains function to see if the collection returns a boolean
        return _.contains(_.filter(collection, Boolean), true);
    }
    //if the test parameter is given, loop through the collection with each
    _.each(collection, function (e, i, collection){
        //push the elements that pass the test function into the every array 
        every.push(test(e, i, collection));
    });
    //run the contains function on the every array and if none of the values tested resolved to false
    //if none resolved to false, return true, if ANY of the values resolved to false, return false
    return !_.contains(every, false);
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, test){
    //declare a some variable and assign it to an empty array literal
    let some = [];
     //if no test is run
    if(!test){
        //run the filter function within through the contains function to see if the function returns a boolean
        return _.contains(_.filter(collection, Boolean), true);
    }
    //if the test parameter is given, use the each function to loop through the collection
    _.each(collection, function (e, i, collection){
        //push the tested elements into the some array
        some.push(test(e, i, collection));
    });
    //test to see if ANY of the tested values in the some array resolved to true, and ifso return true
    //if none of them were true, return false
    return _.contains(some, true);
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, accumulator){
    //if the accumulator is undefined, set it to the 0 index of the input array
    if(accumulator === undefined){
        accumulator = array[0];
        //declare a new array and use the slice method with no end parameter, to return a copy of the array from the 1 index of the input array
        let newArr = array.slice(1);
        _.each(newArr, function(e, i){
            accumulator = func(accumulator, e, i +1);
        });
    } else {
        //call the each function on the input array
        _.each(array, function(e, i){
            accumulator = func(accumulator, e, i);
        });
    }
    //return the accumulator
    return accumulator;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//do this using _.each and .assign

_.extend = function(object){
    //use the Array.from method to create a new instance of the collection and call it on the arguments parameter and a function that is called
    //on the element, index, and array
    _.each(Array.from(arguments), function(e, i, array){
        //use the Object.assign method on the input object and the element
        Object.assign(object, e);
    });
    return object;
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
