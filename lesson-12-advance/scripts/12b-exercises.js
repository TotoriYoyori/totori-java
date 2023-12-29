//12J + K
const multiply = (num1,num2) => num1 * num2;

console.log ( multiply(2,3) );

//12L
const exArray1 = [1,-3,5];
const exArray2 = [-2,3,-5,7,10];

function countPositive(numArray){
  let result = 0;
  numArray.forEach( num => {
    if (num > 0) {result ++};
  } )
  return result;
};

console.log ( countPositive(exArray1) );
console.log ( countPositive(exArray2) );

//12M
function addNum(array,addition) {
  return array.map( num => num + addition );
};

console.log ( addNum(exArray1,5) );

//12N
const exFood = ['egg','egg','ham','apple','egg']
const exFood2 = ['egg','egg','ham','apple','egg','egg', 'egg', 'ham']

function removeAllEgg(foodArray) {
  return foodArray.filter( food => food !== 'egg' );
};

console.log( removeAllEgg(exFood) );

//12O
function remove2Eggs(foodArray) {
  let eggDupe = 0;
  return foodArray.filter( food => {
    if (food === 'egg' && eggDupe < 2) {
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
