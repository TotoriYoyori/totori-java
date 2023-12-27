const nums = [10,20,30,40,50];
const yums = [1,2,3,4,5];
const non = [];
const onenum = [3];
const names = ['totori', 'totori', 'cillian', 'swift', 'yeatle'];

//11A
nums[nums.length - 1] = 99;
console.log(nums);

//11B
function getLastValue(array){
  const lastValue = array[array.length - 1];
  return lastValue;
};

console.log (getLastValue(nums));

//11C: Variable is used to store an information, but when you manipulate the actual information, don't call the variable again. Manipulate the form of the information. 
function arraySwap(array){
  const lastValue = array[array.length - 1];
  const firstValue = array[0];

  array[0] = lastValue;
  array[array.length - 1] = firstValue;
  return array;
};

console.log(arraySwap(nums));
console.log(arraySwap(names));

//11D
// for (let i = 0 ; i <= 10; i += 2) {
//  console.log(i);
// };

//11E
// for (let i = 5 ; i >= 0 ; i -= 1) {
//   console.log(i);
// };

//11F
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

/* 11G
const newArray = [];
for (let i = 0; i < nums.length ; i++) {
  const value = nums[i];
  newArray.push(value+1);
};

console.log(newArray);
*/ 

//11H
function addOne(array) {
  const addOneArray = [];
  for (let i = 0; i < array.length; i++){
    const value = array[i];
    addOneArray.push(value+1);
  };

  return addOneArray;
};

console.log ( addOne(nums) );

//11I
function addNum(array, num) {
  const addNumArray = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    addNumArray.push(value + num);
  };

  return addNumArray;
};

console.log ( addNum(nums,2) );

//11J
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


//11K
function countPositive(array) {
  let countPositive = 0;
  for (let i = 0; i < array.length; i++){
    const value = array[i];
    countPositive = value > 0? 
      countPositive + 1
      :countPositive;
  };

  return countPositive;
};

console.log ( countPositive(yums) );

//11L + M 
function minMax(array) {
  if (array.length === 0) {
    return { min: null, max: null };
  }

  let result = {
    min: array[0],
    max: array[0]
  };

  if (array.length === 1) {
    return result;
  }

  for (let i = 1; i < array.length; i++) {
    const value = array[i];

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

//11N 
function countNames(array) {
  let nameTally = {};
  for (let i = 0; i < array.length; i++) {
    const name = array[i];
    nameTally[`${name}`] = 1;

    if (array[1] === name) {
      nameTally[`${name}`] ++;
    };
  };
  return nameTally;
};

console.log ( countNames(names) );