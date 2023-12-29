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
document.querySelector('.js-finish-button')
  .addEventListener('click', () => {
    delayToggle();  
  } );

function delayToggle() {
  setTimeout( () => {
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

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addedConfirm();
  } );

function addedConfirm() {
  const confirmMsgLm = document.querySelector('.js-confirm-message');
  
  confirmMsgLm.innerHTML = 'Added';
  clearTimeout(timeoutID);

  timeoutID = setTimeout( () => {
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
document.querySelector('.js-send-button')
  .addEventListener('click', () => {
    modifyMessage(1);
    checkMode();  
  } );

document.querySelector('.js-remove-button')
  .addEventListener( 'click', () => {
    modifyMessage(-1);
    checkMode();
  } );
  
let message = 0;
let intervalID;
let isDisplaying;

const modifyMessage = amount => message + amount < 0?
  message
  :(message += amount);
  
const checkMode = () => message === 0?
  stopNotification()
  : displayNotification();

function displayNotification(){
  if (isDisplaying){
    return;
  ;}
  
  isDisplaying = true;
  intervalID = setInterval( () => {
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


