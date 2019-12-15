# Scratch Pad

Practice the basics of JavaScript by passing unit tests.

---

## Getting Started

1. To install Scratch-Pad into your workspace you can use our `opspark` utility! You should already have this installed, but you can make sure by running this script in your terminal:

```
        npm install --global opspark
```

* As long as we have the `opspark` utility installed, we can install projects into our workspace! To do that, run the following command in your terminal: 

```
        os install
```

* You may have to sign in with GitHub, so make sure you know your login information!

* You will then be prompted for your class, so select whichever class you are currently taking.

* Then scroll through the available projects with your arrow keys and select `Scratch Pad`. Hit enter, confirm, and `opspark` will do its magic!

2. Once you have Scratch-Pad installed it should appear inside your `projects` directory. Open the Scratch-Pad directory and take a look at the files inside.

* It's important that you **do not move, or change the name of, any files in these directories**. If you do the tests we have written may not work, and you will have a lot of problems we'll have to solve!

* Inside the Scratch-Pad directory you should have several folders prefixed with `day-x`. Each of these folders correspond to one of the four days we will work on Scratch-Pad, with the `x` representing the specific day. If you open up `day-1` you will see that we have a `homework` directory, an `index.html`, and several `.js` files. 

* If you **open and run the `index.html` file of `day-1`**, you can SEE what tests we have written for the day, and whether you are passing or failing those tests! You can run files by hitting the big "Run" button at the top of your workspace. Make sure you have the file you want to run selected!

* Our work is going to be done in the `.js` files, like `stringy.js` and `my-first-test.js`. A `.js` file is a JavaScript file, which is the language we are mainly learning in this course. Inside these JavaScript files we will be creating code that fulfills certain tests we have already created. 

---

## app.js

The `app.js` file is an executable JavaScript file, a template for you to write and test JavaScript in the node.js environment.

You can execute the `app.js` file in Cloud9 by opening it and clicking the green "Run" button - this will allow you to use breakpoints on the file and debug and step-thru your code, which is very handy for understanding complex algorithms, especially higher order functions.

You can also execute the `app.js` file from the command line: if you're in the same directory as the app.js file, simply run the command:

```
        ./app.js.
```

You can duplicate this file and rename it to represent whatever other studies you're undertaking to better organize your notes, ie, `strings.js`, or, `recursion.js`, or, `functions.js`, etc.

Note, at the top of the `app.js` file, there's the <a href="https://github.com/OperationSpark/javascript-wiki/wiki/Shebang" target="_blank">linux shebang for the node binary</a>. Always leave this at the top of the file.  This tells the operating system where to look for the program that should run your file, in this case, where to find node. 

Also, below the shebang, note the `'use strict';` directive - this tells node we want to run our JavaScript in strict mode, which, among other things, will prevent our program from silently failing on certain errors. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" target="_blank">Read more about strict mode here...</a>

---

## Getting Started with Debugging

Beyond cloud storage, and ease of sharing, one of the main reasons we start students off using Cloud9, and writing and submitting homework in the Scratch-Pad project, is that Cloud9 has a good debugger.

It is extremely important for you to begin debugging as you work. It's important to make use of `console.log(someValue);` to print expected values to the console and inspect your work. It is also highly valuable to get use to using breakpoints and the debugging tools of Cloud9 (and any other IDE you choose to use in the future)

<a href="https://docs.c9.io/docs/debugging-your-code" target="_blank">Watch this video on getting started with Node.js debugging in Cloud9</a>. This is how you should inspect your work in Scratch-Pad as you complete your homework assignments.

---

## Homework 

Your homework assignments are located in JavaScript (.js) files in the directory `homework` of whichever day you are on.

---

### Checking your Code

As you code your solutions and save your work, you have four options for checking your code:

1. In the top level of the `Scratch-Pad` directory there is an `index.html` file. You can run this file to see ALL the tests we will be completing in this project!

2. In each `day-x` directory there is an `index.html` file. Running this file will run all the unit tests _only_ for that day.

3. In your terminal you can test your code using the `opspark` client. To do so, run the command `os test`. 

4. To use the debugger and breakpoints and _step thru_ your code, you can run your code by **having the file selected in the text-editor** and clicking the green **Run** button. This will open up a new process in the console view that will output your log statements. Breakpoints will be caught by the debugger and you can step through and inspect your code at runtime.

**TIP** It's important to note the difference between running `.js` files and `.html` files! JavaScript can do a bunch of awesome things, as you will see. Running a `.js` file means you are having each line of JavaScript code in the file run, one by one, from top to bottom. What it will NOT do is create a web page for you. In c9, running a `.js` file results in a new tab that shows everything that is console.logged in that file. 

If you want to see an actual web page, you should run an `.html` file. Anything with the suffix `.html` is going to be HTML, or Hypertext Markup Language. HTML is like the skeleton of a website, it is the structure, so when you want to see a visualization of something you use HTML. It's possible for HTML to access your JavaScript files and run them inside the website, which we will play with more later in the course.

---

### Submitting Scratch-Pad

You must submit the Scratch-Pad project by running `os submit`. Doing so will re-run the tests one last time to make sure you are passing all of them, then send the results to Greenlight if you have passed all tests. 

**You must pass ALL the tests for EACH day to get a green light.**

If you do not have a green light when you submit, run `os test` to check if you are failing any tests. If you have any questions after that, consult your teacher.