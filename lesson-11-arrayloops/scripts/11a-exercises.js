const nums = [10,20,30,40,50];
const yums = [1,2,3,4,5];
const non = [];
const onenum = [3];
const names = ['totori', 'totori', 'cillian', 'swift', 'yeatle', 'yeatle', 'yeatle', 'totori'];

//11A: Manipulate the last value of an array using array.length. The last value of an array is always array.length < 1
nums[nums.length - 1] = 99;
console.log(nums);

//11B: Creating a function that identifies the first value of an array. 
function getLastValue(array){
  const lastValue = array[array.length - 1];
  return lastValue;
};

console.log ( getLastValue(nums) );

//11C: Creating a function that swaps the value of the first and last array value. 

function arraySwap(array){
  // Variable is used to store an information and then becomes static. Steve and Bob will always be...the last and first value. 
  const lastValue = array[array.length - 1];
  const firstValue = array[0];

  // Assign the first value to be Bob, which is static. Assign the last value to be Steve, which is static. 
  array[0] = lastValue;
  array[array.length - 1] = firstValue;
  return array;

  // If you do Steve = Bob then it only makes the two of them equal, not switching them. 
};

console.log(arraySwap(nums));
console.log(arraySwap(names));

//11D: Counting up from 0 to 10, += 2
for (let i = 0 ; i <= 10; i += 2) {
  console.log(i);
};

//11E: Counting down from 5 to 0, -= 1
for (let i = 5 ; i >= 0 ; i -= 1) {
  console.log(i);
};

//11F: Same thing as above but in while-loops. Remember that while-loops is not as useful as for-loops for standard incremental loops. RNG loop is useful with while-loops. 
let i = 0;
while (i <= 10){
  console.log(i);
  i += 2;
};

let z = 5;
while (z >= 0) {
  console.log(z);
  z -= 1;
};

// 11G: Push a new array that is +1 in each value of a previous array. [1,2,3] -> [2,3,4]
const newArray = [];
for (let i = 0; i < nums.length ; i++) {
  const value = nums[i];
  newArray.push(value+1);
};

console.log(newArray);

//11H: Same thing as above but a generalized function.
function addOne(array) {
  const addOneArray = [];
  for (let i = 0; i < array.length; i++){
    const value = array[i];
    addOneArray.push(value+1);
  };

  return addOneArray;
};

console.log ( addOne(nums) );

//11I: Same thing as above, but it will add a specified number instead of always +1. 
function addNum(array, num) {
  const addNumArray = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    addNumArray.push(value + num);
  };

  return addNumArray;
};

console.log ( addNum(nums,2) );

//11J: Same thing as above, but will sum up two arrays together value by value. 
function addArrays(array1, array2) {
  const addArrays = [];

  for (let i = 0; i < array1.length; i ++) {
    const value = array1[i];
    const addition = array2[i];
    addArrays.push(value + addition);
  };
  
  return addArrays;
};

console.log ( addArrays(nums, yums) );


//11K: Creating a function that checks how many positive numbers there are in an array. 
function countPositive(array) {
  // Creating a variable that counts instance of positive numbers, set default to 0, assuming there are no positive numbers to start with. 
  let countPositive = 0;
  for (let i = 0; i < array.length; i++){
    const value = array[i];
    //Check if parsed string is above 0, if yes add to the positive tally counter, if not, leave the counter as is. 
    countPositive = value > 0? 
      countPositive + 1
      :countPositive;
  };

  return countPositive;
};

console.log ( countPositive(yums) );

//11L + M: Creating a function that identifies the max and min number in an array and return an object. If the array only has one number or no number, returns special objects. 
function minMax(array) {
  if (array.length === 0) {
    return { min: null, max: null };
  }

  //Set default minimum and maximum value to be the first value of an array. The key to choosing default value is to pick one that exists in the array itself. 
  let result = {
    min: array[0],
    max: array[0]
  };

  //If the array is only one number, then we can safely return the default value and the object will be good. 
  if (array.length === 1) {
    return result;
  }

  for (let i = 1; i < array.length; i++) {
    const value = array[i];

    //For each parsed value, check if it is lower than the currently identified minimum. If yes, update it to be the same as the value. This is repeated for the whole array so that at the end, only value remains lowest of all the values thus far assined to be result.min. 
    if (value < result.min) {
      result.min = value;
    };

    if (value > result.max) {
      result.max = value;
    };
  }
  return result;
}

console.log (minMax(non));

//11N: Creating a function that counts up how many times each name in array occurs. Using object[string] to access or modify an object property.

function countNames(array) {
  // Assign an empty to host the result object that will list out the name counter. 
  const result = {};

  for (let i = 0; i < array.length; i++) {
    const name = array[i];
    // If the name currently being parsed is not a property in the object result (doesn't exist yet in the result section), then we can add that new property to the object using the currently parsed name, and assign it a value of 1, indicating first appearance. 
    if (!result[name]){
      result[name] = 1;
    // Otherwise, if the current name i is already a property of result, then we can just modify this property and add 1 more instance to it, indicating future occurences. 
    } else {
      result[name] ++;
    };
  };
  
  return result;
};

console.log ( countNames(names) );

// A common theme with exercises revolving around duplications and identifying unique occurence is about checking if each string in the array is already existing in the resultant. This is a smart solution.

//Compared to if you were to check if each future string in the array is already existing before in the same array. The resulting array is a good place to check for progress on the current parsing of the array. 