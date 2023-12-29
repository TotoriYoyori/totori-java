//(8) Writing arrow function is a compact way to express f. It mostly works the same way as regular function or anonymous function + variable.
const regularFunction = function(param, param2) {
  console.log('Hello');
  return 5;
};

const arrowFunction = (param, param2) => {
  console.log('Hello');
  return 5;
};
arrowFunction();

  //(8.1) Arrow functions have a few shortcuts that normal functions don't have. First one is if a function only has one parameter, then the argument bracket is optional.
  const oneParam = param => {
    console.log(param + 1);
  };
  oneParam(2);

  //(8.2) Another shortcut is if the function only has one line code to return a value, then the curly bracket is optional as well.
  const oneLineLong = () => {
    return 2+3;
  };
  const oneLineShort = () => 2 + 3;

  console.log( oneLineLong() );
  console.log( oneLineShort() );

  //(8.3) Arrow function is best used in callbacks, while regular function is best used as the "big" function.

//(9) Going back to the .forEach L2A, it is actually recommended to write in arrow functions because it makes the code much easier to read. 
const chores = [
    'Make dinner',
    'Wash dishes',
    'Watch YouTube',
  ];

chores.forEach ( (value, index) => {
  if (value === 'Wash dishes') {
    return; 
  };
  console.log(value);
  console.log(index);
} );

//(10) You can also use arrow function for object's method, but the shorthand method is still recommended.
const object2 = {
  method: () => {
    console.log('10. Arrow function method')
  }
};

//(11) .addEventListener() is a method of all HTML elements that work identical to the onclick attributes. 
const buttonLm = document.querySelector('.js-button');
const eventListen = () => {
  console.log('click');
};
  //(11.1) There are more advantages to using .addEventListener compared to onclicks. First, you get to add multiple event listeners, you get to add multiple events, and you can also remove event listeners. 
  buttonLm.addEventListener('click', eventListen);

  buttonLm.removeEventListener('click', eventListen);

  buttonLm.addEventListener('click', ()=>{
    console.log('click2');
  });

  //(11.2) Note that when using eventListener, make a distinction between callbacks and declaring a function as a value. Here, this syntax will return the event as a a value, not a callback.
  buttonLm.addEventListener('click', eventListen() );

  //(11.3) This is corrected when using arrow functions or redeclaring a regular function, or using a variable that represents a function. 
  buttonLm.addEventListener('click', () => {});

  //(11.4) .addEventListener automatically adds event triggered through the listener as parameter for the function. 
  document.body.addEventListener('keydown', (event) => {} );

  //(11.5) If we use event.key to identify the keyboard pressed during the event, we can use it as specific argument to run a function.
  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
      console.log('A')
    };
  } );

//(12) Going back into array. Another special array that is auto-generated with document.querySelectorAll() can be used with forEach.

//(13) A derivative of forEach is .filter, which has the same syntax, but it will return a new array with specific value:index returns true. 

console.log ( [1,-3,-5].filter( (value,index) => 
{
  return value > 0; 
  // if (value >= 0) {
  //   return true;
  // } else {
  // return false;
  // };
} ) );

//(14) A derivative of forEach is .map, which has the same syntax, but it will return a new array with each value modified based on the return value. It is a transformative function.

console.log ( [1,1,3].map( (value,index) => {
  return value + 10;
} ) );
  //(14.1) Remember the shortcuts for arrow function if you only have one param and one line of return. 
  console.log ( [1,3,-5].filter(value => value > 1 && value < 5) );
  console.log ( [1,1,3].map(value => value + 10) );

//(15) Lastly, a feature of function is called 'Closure'. Which means after a function is resolved, all variables involved in the function scope is deleted. All declaration of that variable outside the function will not work. In other words, as long as the variable is enclosed within a function, the function will always have access to it. 
