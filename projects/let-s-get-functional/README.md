# lets-get-functional

An exercise in problem solving in the functional idiom.

## Step 0 - Release lodown
 - If you haven't release your lodown library to `npm` (node package manager), follow the steps in this video to do so:

    [publishing-npm-packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)

## Step 1 - Setup
 - Run `os install` to install `Lets Get Functional`
 - Copy the name of your `lodown`package. It should be something like `lodown-oliviasaborush`
 - In your bash terminal run the command `npm install --global lodown-oliviasaborush` with **your** lodown package
 - In your bash terminal run the command `npm link lodown-oliviasaborush` with **your** lodown package
    - These commands will not work unless you use **your** lodown name 
 - Open `index.js`
 - Update line 6 of `index.js` to reference your `lodown` library
 - It should look something like this:

```
const _ = require('lodown-oliviasaborush');
```

## Step 2 - Solve
 - Implement the functions outlined below, using your `lodown` library
 - Code and test your solutions in `index.js`
 - Data is available to you in an Array stored in the variable `customers`
 - To test your solutions run `npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional` in your terminal  
 
 _IMPORTANT_: Make sure you replace `<YOUR_GITHUB_FOLDER` with your actual github folder in your workspace.

### 1: `maleCount`
 - **Objective**: Find the number of male customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `filter`

### 2: `femaleCount`
 - **Objective**: Find the number of female customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `reduce`

### 3: `oldestCustomer`
 - **Objective**: Find the oldest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:

### 4: `youngestCustomer`
 - **Objective**: Find the youngest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:

### 5: `averageBalance`
 - **Objective**: Find the average balance of all customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**:

### 6: `firstLetterCount`
 - **Objective**: Find how many customer's names begin with a given letter
 - **Input**: `Array`, `Letter`
 - **Output**: `Number`
 - **Constraints**:

### 7: `friendFirstLetterCount`
 - **Objective**: Find how many friends of a given customer have names that start with a given letter
 - **Input**: `Array`, `Customer`, `Letter`
 - **Output**: `Number`
 - **Constraints**:

### 8: `friendsCount`
 - **Objective**: Find the customers' names that have a given customer's name in their friends list
 - **Input**: `Array`, `Name`
 - **Output**: `Array`
 - **Constraints**:

### 9: `topThreeTags`
 - **Objective**: Find the three most common tags among all customers' associated tags
 - **Input**: `Array`
 - **Output**: `Array`
 - **Constraints**:

### 10: `genderCount`
 - **Objective**: Create a summary of genders, the output should be:
```javascript
{
    male: 3,
    female: 4,
    non-binary: 1
}
```
 - **Input**: `Array`
 - **Output**: `Object`
 - **Constraints**: Use `reduce`


## Step 3: Submit
 - When you are passing all tests, run `os submit`
 - Select your current session
 - Select `Let's Get Functional`
 - If you pass all tests, you will get a green light!
