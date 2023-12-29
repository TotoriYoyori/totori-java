//(1) Functions are values, just like numbers, strings and booleans. In fact, the syntax we have been using up to this point for declaring functions...
function greeting() {
  console.log('1 Hello');
};
  //(1.1) ...is just a shortcut for assigning a function a variable, like here:
  var greeting = function (){
    console.log('1.1 Hello');
  };
  //(1.2) Writing functions using the shorthand syntax, however, gives the advantage of 'hoisting', which means you can run a function before you declare it.
  goodbye ();
  function goodbye(){
    console.log('1.2 Goodbye');
  };

//(2) When functions have no name like this inside a variable, it is called an 'Anonymous Function'. 
const function2 = function (){
  console.log('2 function2')
};
  //(2.1) Console logging the variable itself will simply show the function content, not the actual function within. Because this variable typeof is function.
  console.log(function2);
  console.log(typeof function2);

  //(2.2) You can however, run the function within the variable by simply calling the variable with normal bracket.
  function2();

//(3) As before, because function is a value, it can be stored inside an object as a method. 
const object1 = {
  num: 2,
  // (3.1) Remember, we can also clean up a method assignment by using anonymous function name since the property act as our function name, just as a variable would. 
  fun: function (){
    console.log('3 Hello3');
  }
};
object1.fun();

function display(param) {
  console.log(param);
};
display(2);

//(4) You can also insert a function into another function A. This means that this function A specializes in running other functions. 

  //(4.1) The function 'run' takes a function, and run it. 
  function run(func) {
    func();
  };

  //(4.2) We then call run() with another function inside. This is called 'Passing a function into another'. 
  run(function(){
    console.log('Hello4')
  });

  //(4.3) The function nested within another function is called a 'Callback'. 

//(5) setTimeout is a built-in function that allows you to run a function in the future. It takes two parameters: a function, and a duration in ms (1000ms = 1s)
  setTimeout(
    function(){
      console.log('5 Timeout');
      console.log('5 Timeout 2')
    },
    3000
  );
  //(5.1) This delay effect is used to set up asynchronous coding, where the computer doesn't solve codes line-by-line. Synchronous code is how we have been writing for most of the time. 
  console.log('5.1 Next line');

  //(5.2) Async code is useful for setting a timer so that our code doesn't get blocked, and you can do something else while waiting. 

//(6) setInterval is a derivative of setTimeout, but unlike setTimeout where the delayed code only runs once, setInterval will repeat the code in intervals of ms. 
setInterval(
  function(){
    console.log('6 Interval')
  },
  3000
);

console.log('6.1 Next Line')

//(7) Another way to loop through an array is using the array's method of .forEach()
const chores = [
  'Make dinner',
  'Wash dishes',
  'Watch YouTube',
];
  //(7.1) The .forEach method parses each value in an array and return them as a parameter within a nested function. This is actually the preferred method of L2A. forEach can also return the index of each array value into the second parameter.
    //.forEach(function (arrayValue, arrayIndex))
  chores.forEach (function(value, index) {
    if (value === 'Wash dishes') {
      return; // This return works the same way as continue in a traditional for-loops. It simply ends the function early for the specific iteration. 
    }
    console.log(value);
    console.log(index);
  } );

    // There's no good equivalent for break in forEach loops. If you have to use break, then it is better to just use for-loops. 

