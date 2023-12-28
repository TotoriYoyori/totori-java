//11O: Creating a function that identifies the word 'search' exists in an array. 
const helloWorld = ['hello','world', 'no', 'good'];
const goodbyeWorld = ['goodbye', 'search','good','search'];

function searchFinder (array) {
  let result = -1; //Assume it doesn't exist in the beginning, then update it as needed, instead of inputing yes or no. This is a default-unless-otherwise-algorithm.\

  for (let i = 0; i < array.length; i++ ) {
    const string = array[i];

    if (string === 'search') {
      result = 2;
    };
  };

  return result;
};

console.log ( searchFinder (helloWorld) );
console.log ( searchFinder (goodbyeWorld) );

//11P: Creating a function that identifies the index number of the first instance of 'search'.
function searchx2Locator (array) {
  let result = "No instance of the string 'search' "; 

  for (let i = 0; i < array.length; i++ ) {
    const string = array[i];

    if (string === 'search') {
      result = i;
      break;
    };
  };

  return result;
};

console.log ( searchx2Locator(helloWorld) );
console.log ( searchx2Locator(goodbyeWorld) );

//11Q: Creating a function that returns the index number of the first occurence of a word. 
const redWorld = ['green','blue','red','red'];

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    //If currently parsed value i in the array is equal to the assigned word in the function, we return the index number i.
    if (array[i] === word) {
    //We also end the function early with a return this way. 
      return i;
    }
  };
    //Otherwise this function returns -1, indicating the word specified doesn't exist in the array. 
  return -1;
};

console.log ( findIndex(redWorld, 'red') );
console.log ( findIndex(redWorld, 'yellow') );

//11R + S: Creating a function that removes only the first two instances of the word 'egg'. 
const eggWorld = ['egg', 'apple', 'egg', 'egg', 'ham'];
function removeEgg(array) {
  const result = [];
  let eggDupe = 0;

  for (let i = 0; i < array.length; i++ ) {
    const string = array[i];

    if (string === 'egg' && eggDupe < 2) {
      eggDupe ++;
      continue;
    };

    result.push(string);
  };
  return result;
};

console.log ( removeEgg (eggWorld) );

//11T
function removeReverseEgg(array) {
  //Assign a variable as a copy + reverse of the input array.
  let revertArray = array.slice();
    revertArray.reverse();

  //Assign an empty const as an accumulator.
  const result = [];

  //Assign a tally variable to check for instances of duplication of the word 'egg'
  let eggDupe = 0;

  //Assign a variable 'string' that takes the form of each input array value in the new reverse array. 
  for (let i = 0; i < array.length; i++ ) {
    const string = revertArray[i];

  //If currently parsed 'string' is the word 'egg' and has not been a dupe more than twice (eggDupe counter < 2), increase the eggDupe counter by 1, and skip current 'string'.
    if (string === 'egg' && eggDupe < 2) {
      eggDupe ++;
      continue;
    };

//If currently parsed string is the word 'egg' but the eggDupe counter is >= 2 (has been duped more than twice) or if the string is something else entirely, then we can push this string to the result array.
    result.push(string);
  };

//Revert the result back to normal because we were working in backward using the reverseArray. 
  return result.reverse();
};

// At the end, each 'string' pushed to the result is a third occurence of the word 'egg' or a unique string entirely.
console.log ( removeReverseEgg (eggWorld) );
console.log (eggWorld);

//11V
for (let i = 1; i <= 20; i++) {
  // FizzBuzz is checked first to make sure it doesn't get overriden by other cases below. 
    if (i%3 === 0 && i%5 === 0){
      console.log('FizzBuzz'); 
      continue;
    } else if (i%3 === 0){
      console.log('Fizz');
      continue;
    } else if (i%5 === 0){
      console.log('Buzz');
    };
  console.log(i);
};

//11W: Creating a function that takes an array and return another array that removes all duplicates. 

const hastenWorld = ['speed', 'slow', 'slow', 'slow', 'steady', 'slow', 'speed'];

function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    if (findIndex(result, word) === -1) {
      result.push(word); 
    };
  } // Function checks for countercase and push. In this example, findIndex search the result array so far and find if the current word being parsed already exists in the result (if yes, it returns the index). 
  
  // If the index is return anything other than -1, this means the word being parsed exists in the result array (first occurence = already eixst). If it doesn't exist (return -1), then we can push this word being parsed. 

  return result;
};

console.log ( unique(hastenWorld) );