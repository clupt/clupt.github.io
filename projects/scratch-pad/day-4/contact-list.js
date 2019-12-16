// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
        return {
            id: id,
            nameFirst: nameFirst,
            nameLast: nameLast
        };
}   
    //declare the makeContactList function
    function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
        //declare an array literal that will hold the contacts 
        var contacts = [];
        //declare a string to hold a string of all of the contacts
        var all = '';
        
        return {
        // we implemented the length api for you //
            //the length function uses .length to find the number of contacts
            length: function() {
                //and returns that number
                return contacts.length;
            },
            
            //make an addContact function that takes (contact) as its parameter
            addContact: function(contact){
                //use .push () method to add a contact to the beginning of the contacts array
                //and return the result
                return contacts.push(contact);
            },
            
            //declare a findContact function that takes (fullName) as its parameter
            findContact: function(fullName) {
                //loop through the array of contacts
                for(var i = 0; i < contacts.length; i++) {
                    /**
                    *if the fullName is strictly equal to the index of the a properly 
                    *concatenation of the firstName and lastName (accounting for the space) 
                    *through which we are looping in the array
                    */
                    if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) { 
                    //return the index
                    return contacts[i];
                    }
                }
            },
            
            //declare a removeContact function taking contact as its parameter
            removeContact: function(contact){
                /**
                 *loop through the array and if the index of the contacts array 
                 *being iterated through is strictly equal to the conact
                 *return the array, after removing one contact from the appropriate
                 *index using the .splice() method
                 */
                for(var i = 0;  i < contacts.length; i++){
                    if(contacts[i] === contact){
                    return contacts.splice(i,1);
                    }
                }
            },
            
            
            
/** BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */
            //<br> to produce a line break in javascript
            // \r for carriage return
            // \n for a newline
            
        //create a function to print all contacts
            printAllContactNames: function (){

    //               for(var i = 0; i < contacts.length; i++){
    //                 let fullName = contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast'];
    //                 all = all + fullName('\n');
    //                 }
    //             return all.slice(-2);
    //         }
    //     };
    // }
            
    //     //store the full names of the contacts into the variable fullName, with the appropriate space between first and last names
    //                 let fullName = contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast'];
    //     //store the last index of the contacts array into the variable lastIndex
    //                 let lastIndex = contacts.length - 1;
    //     //store the last object of the contacts array into the variable lastObject
    //                 let lastObject = contacts[lastIndex];
    //     //store the last contacts object into the lastFullName variable, and provide a space between 1st and last names
    //                 let lastFullName = lastObject.join(' ');
    //                 for(var i = 0; i === contacts.length; i++){
    //                 all = all + fullName('\n') + lastFullName;
    //                 }
    //             return all;
    //             }   
    //     };
    // }
    
    //                 all = all + (contacts[i].nameFirst + ' ' + contacts[i].nameLast) + ('\n').slice(-2);
    //                 }
    //             return all;
    //         }
    //     };
    // }
    
           
    //     //loop through the array of contacts
                for(var i = 0; i < contacts.length; i++){
                    let fullName = contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast'];
                    all += fullName('\n');
                    }
                return all.slice(-2);
            }
        };
    }
        





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
