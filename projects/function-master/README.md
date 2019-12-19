# Part 1 - Test Master

## Step 1 - Setup
 - `os install function-master`
 - open up `test-master.html` in your c9 and serve it.
 - open up `test-master.js` in your c9 and have a look.

## Step 2 - Be The Test Master
`test-master.js` contains a bunch of **unit tests**. **Unit tests** help us verify that our code is doing the right thing by calling our functions with some test data and making sure that our functions do the right thing. These tests are incomplete and it is our job today to complete them.

 - Inspect the tests on the page and try to understand what's going on in general.
 - All the **tests** are currently **failing**.
 - If we look in test-master.html we can see that they are **red** and their status is **failed**
 - Each one of the tests has at least one occurrence of "???". This is what we need to change.
 - Change each "???" to the value that will make the test **pass**
 - Once they pass they will be **blue** and not red on the page!

# Part 2 - Function Master

## Review Questions from Module One Handbook?
 - what can we `typeof` ?
 - what can't we `typeof` ?
 - how do we check those things?
 - Array.isArray()
 - null === null

## Standard Library Methods You Should Know By Now:
 - Object.keys()
 - String.toUpperCase()
 - String.split()
 - Array.join()

## Step 3 - Be The Function Master
For this part of the lesson, you will be working in `function-master.js`. Part 2 is the opposite of
Part 1 in that this time around we have a different and new set of tests written for us, and we'll
be writing functions that pass them. 

 - If you don't understand what a function is supposed to do, look at the test in `function-master.html`. If you still don't understand, ask your teacher.

## Step 4 - Submit your masterful functions
 - Once you have completed all functions go to your terminal and run the command `os test`
 - Select your class, then select `Function Master`
 - You should see 100% passing tests!
   - If you are still failing tests, update your code to pass them
 - Then run `os submit`
 - Select your class, then select `Function Master`