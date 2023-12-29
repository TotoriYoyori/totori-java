//12J + K: Creating a function that takes two values, and multiply them together. 
const multiply = (num1,num2) => num1 * num2;

console.log ( multiply(2,3) );

//12L: Creating a function that counts the number of positive numbers in an array.
const exArray1 = [1,-3,5];
const exArray2 = [-2,3,-5,7,10];

// function countPositiveLong(numArray) {
//   for (let i = 0; i < numArray.length; i++) {
//     let result = 0;
//     const num = numArray[i];
//     if (num > 0) {
//       result ++;
//     };
//   };
//   return result; 
// };

function countPositive(numArray){
  let result = 0;
  numArray.forEach( num => {
    if (num > 0) {result ++};
  } )
  return result;
};

console.log ( countPositive(exArray1) );
console.log ( countPositive(exArray2) );

//12M: Create a function that takes an array, and an addition. This function returns an array whose each value is boosted by the addition. Using .map as the method for each array. (.map is a specialized .forEach that returns an array)
function addNum(array,addition) {
  return array.map( num => num + addition );
};

console.log ( addNum(exArray1,5) );

//12N: Create a function that filters all instances of a specified string. (in this example, 'egg')
const exFood = ['egg','egg','ham','apple','egg']
const exFood2 = ['egg','egg','ham','apple','egg','egg', 'egg', 'ham']

function removeAllEgg(foodArray) {
  return foodArray.filter( food => food !== 'egg' );
};

console.log( removeAllEgg(exFood) );

//12O: Create a function that filters out only the first two instances of the word 'egg'.
function remove2Eggs(foodArray) {
  let eggDupe = 0; // Declaring a variable as a duplication manager is used here to track the first two instances of the word 'egg'
  return foodArray.filter( food => {
    if (food === 'egg' && eggDupe < 2) { //The ifrst two eggs will satisfy both conditions and return false. The third 'egg' will have eggDupe > 2 and this is true. 
      eggDupe++;
      return false;
    } else {
      return true;
    };
  } );
};

console.log ( remove2Eggs(exFood) );
console.log ( remove2Eggs(exFood2) );

//12P: Done in 12A-exercises.js
//12Q-X: Done in 12-lodestar-rps.js
