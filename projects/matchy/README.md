# Matchy - A social network for Animals

## Goals
 - To work in pairs solving real-world programming problems.
 - To practice creating, accessing and processing data structures, Objects and Arrays, in JavaScript.
 - Practice modeling types of things, animals, using Objects.
 - Practice storing Objects in Arrays, and searching, adding, replacing, and removing these Objects based on criteria.
 - Getting use to using `console.log` to inspect your work and debug your code.

## What Javascript you should know already
 - variables
 - looping
 - Objects
 - Arrays
 - Functions

If you don't know any of these concepts, see a Teacher or TA before starting this project!

# Setup
## Step 1 - Installation
 - Open your Cloud9 workspace for your website project.
 - In the terminal run the command, `os install`. 
 - Note, the first time you run `os install`, you'll be asked to login to GitHub. Be certain to type your credentials carefully.
 - From the list of projects, use the up/down arrows to select `matchy`
 - Note the newly installed `projects/matchy` folder in your website workspace.

## Step 2 - Setting up our Dev Environment
 - Once installed, navigate to and open the files `projects/matchy/data.js` and `projects/matchy/functions.js`. We'll code the project exercises in these two files, starting with Part 1 in `data.js`, then Part 2 in `functions.js`.
 - Also, serve your website by opening your website's root `index.html` file.  This will be the `index.html` file you created during the *First Website* project. Once opened, and the file has focus, click the green "Run" toolbar button to serve your website. A new process will open in a new pane in the console view in Cloud9, with an Apache web server serving your website.
 - Once Apache is running, click on the blue link in the console view, and select Open - this will open your website in a new browser tab. If you're confused or need a refresher about what's going on here, re-read the section <a href="https://github.com/OperationSpark/first-website/blob/master/README.md#serve-your-website" target="_blank">serve-your-website</a> from the First Website project.
 - From your website, click on the portfolio link, then click on the entry for the Matchy project. If Matchy isn't visible, first try clearing your cache then refreshing the browser. Or, ask for help.
 - Open the developer console by right clicking anywhere and choosing `inspect element`.
 - Click on the `console` tab in the panel that opens up.

# Part 1
**All work in this section will be done in data.js**

As we code, save and refresh the browser tab running Matchy. Your work will begin to create a web UI, signaling you've correctly coded the exercises. You will also be logging your data to the console, so you can check this output to make sure your code works as expected.

## Step 1 - Object Creation
 1. [ ] Open up the file data.js.
 1. [ ] Create a variable named `animal` and assign it to an empty object.
 1. [ ] Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
 1. [ ] Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
 1. [ ] Using either notation, give `animal` a **property** called `noises` with a value of empty array.
 1. [ ] Print your `animal` Object to the console by adding, `console.log(animal);`,
 1. [ ] Save your work (command-s || ctrl-s), switch back to the browser tab with your website running, and refresh your page to see what `animal` looks like.
 1. [ ] It should be something like: 
~~~JS
{ species: 'duck', name: 'Jennifer', noises: [] }
~~~

## Step 2 - Array Creation
 1. [ ] Create a variable named `noises` and assign it to an empty array.
 2. [ ] Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
 3. [ ] Using an array function add another noise to the end of `noises`.
 4. [ ] Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
 5. [ ] Look through the functions until you find the one that will place an element at the begining of the array.
 6. [ ] Add an element to `noises` using this function.
 7. [ ] Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
 8. [ ] `console.log` the length of `noises`
 9. [ ] `console.log` the last element in `noises` again without hard coding the index.
 10. [ ] `console.log` the whole array.
 11. [ ] Does it look right?
 

## Step 3 - Combining Step 1 and 2
 1. [ ] Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
 2. [ ] Using any syntax add another noise to the `noises` property on `animal`.
 3. [ ] `console.log` `animal`.
 4. [ ] Does it look right?


## Step 4 - Review
 1. [ ] What are the different ways you can access properties on objects?
 2. [ ] What are the different ways of accessing elements on  arrays?

## Step 5 - Take a Break!
It's super important to give your brain and yourself a rest when you can! Grab a drink and have a think! For like 10 minutes, then, **BACK TO WORK!** :)

## Step 6 - A Collection of Animals
 1. [ ] Create a variable named `animals` and assign it to an empty array.
 2. [ ] `push` our `animal` that we created to `animals`.
 3. [ ] `console.log` `animals`. What does it look like?
 4. [ ] Create a variable called `duck` and assign it to the data:
  - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
 5. [ ] `push` `duck` to `animals`
 6. [ ] `console.log` `animals`. What does it look like?
 7. [ ] Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
 8. [ ] `console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?


## Step 7 - Making Friends

Imagine that our website has a profile page for each animal. On this profile page we can see a list of each animal's friend on the website. Just like how people have a list of friends or followers on facebook or instagram. What would be a good data structure to hold this list of friends?

 1. [ ] Choose a data structure for this **list** of friends.
 2. [ ] Write a comment in your code that explains why you chose this data structure.
 3. [ ] Create a variable called `friends` and assign it to the data structure that you chose.
 4. [ ] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 5. [ ] Write a function called `getRandom` that takes our `animals` array and returns the `index` of a random element using `Math.random`
 6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
 7. [ ] `console.log` `friends`.
 8. [ ] add `friends` as a **property** named `friends` on one of the animals in `animals`
 9. [ ] `console.log` your work.
 
## Step 8 - Take Another Break!!


# Part 2
**All work in this section will be done in functions.js**

In this file, we'll create some Functions to work with our data created Part 1, which we coded in the file `data.js`.

These Functions will pass in all needed parameters, meaning, we will not reach into the global scope to access `animals`.

## Step 1 - Search
 1. Open up the file `functions.js` in your editor.
 2. Implement a function called `search` with a signature of `search(animals, name) { //... }` that:
   - Takes a paramater representing an Array of `animals`.
   - Takes a paramater representing a String, the name of an animal on which to perform a search.
   - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
   - Returns `null` if no animal with that name exists
 3. Use the search bar at the top of the page to make sure your function works.

## Step 2 - Replace
 1. Write a function called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
   - Takes 3 parameters, an Array of animals, a name of an animal on which to perform a search, and an Object that represents the replacement animal.
   - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
   - Otherwise do nothing.
 2. Test it on the website.

## Step 3 - Remove
 1. Write a function called `remove` with a signature of `remove(animals, name)` that:
   - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
   - If an animal with that name exists within the `animals` Array, remove it.
 2. Test that it works on the website.

## Step 4 - Add
 1. Write a function called `add` with a signature of `add(animals, animal) { //... }` that:
   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
   - Checks that the animal Object has a `name` property with a length > 0.
   - Checks that the animal Object has a `species` property with a length > 0.
   - Has a **unique** name, meaning no other animals have that name.
   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
   - Make sure it works.

This is called **data validation** and it's extremely important in web development!
 
## Step 5 - Break
**Step back and think about how far you've come!!** We are doing really hard stuff and if you've gotten here, you get it! This is awesome! It means you are well on your way to becoming a **pro web developer**. SWEET!

# Part 3
**Test and submit your work**

Now you're done! Time to submit your great work to Greenlight to get that sweet, sweet green light.

## Grade and submit
 1. [ ] Open up a new `bash` terminal
 2. [ ] Run the command `os test` in the bash terminal
   - Select your class
   - Select your Matchy
 3. [ ] Make sure that you are passing all tests, or fix any failing tests
 4. [ ] When all your tests pass, run the command `os submit`
   - Select your class
   - Select your Matchy
 5. [ ] Check Greenlight to ensure your grade updated correctly
 6. [ ] You're done! 
