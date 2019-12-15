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

    function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
        var contacts = [];
    
        return {
        // we implemented the length api for you //
            length: function() {
                return contacts.length;
            },
        
            addContact: function(contact){
                return contacts.push(contact);
            },
        
            findContact: function(fullName) {
                for(var i = 0; i < contacts.length; i++) {
                    if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) { 
                    return contacts[i];
                    }
                }
            },
            
            removeContact: function(contact){
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
        //create a variable all to store all of the contacts from the array contacts into a string
                var all = '';
        //loop through the array of contacts
                for(var i = 0; i < contacts.length; i++){
                    let fullName = contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast'];
                    all = all + fullName('\n');
                    }
                return all.slice(-2);
            }
        };
    }
        
     

    //               for(var i = 0; i < contacts.length; i++){
    //                 let fullName = contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast'];
    //                 all = all + fullName('\n');
    //                 }
    //             return all.slice(-2);
    //         }
    //     };
    // }
            
        // //store the full names of the contacts into the variable fullName, with the appropriate space between first and last names
        //             let fullName = contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast'];
        // //store the last index of the contacts array into the variable lastIndex
        //             let lastIndex = contacts.length - 1;
        // //store the last object of the contacts array into the variable lastObject
        //             let lastObject = contacts[lastIndex];
        // //store the last contacts object into the lastFullName variable, and provide a space between 1st and last names
        //             let lastFullName = lastObject.join(' ');
        //             for(var i = 0; i === contacts.length; i++){
        //             all = (all + fullName('\n') + lastFullName);
        //         }
        //         return all;
        //     }   
            
        // };
    // } 
    
       //                 all = all + (contacts[i].nameFirst + ' ' + contacts[i].nameLast) + ('\n').slice(-2);
    //                 }
    //             return all;
    //         }
    //     };
    // }





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
