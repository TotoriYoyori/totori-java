//12A:
const add = function (){
  console.log(2+3);
};

//12B:
function runTwice(func) {
  func();
  func();
;}

runTwice(add);

//12C + D

function delayToggle() {
  setTimeout( 
    function() {
      document.querySelector('.js-finish-button')
        .innerHTML = 'Finished';
    },
    1000
  );

  document.querySelector('.js-finish-button')
    .innerHTML = 'Loading...';
};

//12E + F
let timeoutID;

function addedConfirm() {
  const confirmMsgLm = document.querySelector('.js-confirm-message');
  
  confirmMsgLm.innerHTML = 'Added';
  clearTimeout(timeoutID);

  timeoutID = setTimeout(
    function(){
      confirmMsgLm.innerHTML = '';
    }, 2000
  );
};

//12G
/* 
let notification = 0;
if (notification === 0){
  document.title = 'App'
  };
let intervalID;

function modifyNotification (amount){
  if (notification + amount < 0) {
    return;
  } else {
    notification += amount;
    document.title = `(${notification}) New Messages`

    // Start the interval when notification increases above 0 and there hasn't been an interval already.
    if (notification > 0 &&!intervalID) {
      intervalID = setInterval(
        function() {
          notification ++
          document.title = `(${notification}) New Messages`
        },
        1000
      ); 
    }

    // Stop the interval only when notification reaches 0 and there is already an interval running.
    if (notification === 0 && intervalID){
      clearInterval(intervalID);
      intervalID = null;
      document.title = 'App'; // We switch title name back to App when it reaches 0 this way. 
    };
  };
};
*/ 

//12G2
let message = 0;
let intervalID;
let isDisplaying;

function checkMode(){
  if (message === 0){
    stopNotification();
  } else {
    displayNotification();
  };
};

function displayNotification(){
  if (isDisplaying){
    return;
  ;}
  
  isDisplaying = true;
  intervalID = setInterval(
    function(){
      if (document.title === 'App') {
        document.title = `(${message}) New messages`
      } else {
        document.title = 'App'
      };
    },
    1000
  );
};

function stopNotification (){
  isDisplaying = false;
  clearInterval(intervalID);
  document.title = 'App'
};

function modifyMessage(amount) {
  if (message + amount < 0) {
    return;
  } else {
    message += amount;
    document.title = `(${message}) New Messages`
    console.log(message);
  };
};

