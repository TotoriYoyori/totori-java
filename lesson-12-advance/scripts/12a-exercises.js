//12A: Creating a function using anonymous function and variable. 
const add = function (){
  console.log(2+3);
};

//12B: Creating a function that calls back a function two times. 
function runTwice(callback) {
  callback();
  callback();
;}

runTwice(add);

//12C + D: Creating a function that changes the text on a button from 'Finishing' to 'Finished' after 1 seconds. In between the duration, the text says 'Loading'.
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

//12E + F: Creating a message that pops up 'Added' every time you hit the Add button, which will last for 2s then disappearing. This button should also refresh itself everytime you hit it multiple times. 
let timeoutID;

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addedConfirm();
  } );

function addedConfirm() {
  const confirmMsgLm = document.querySelector('.js-confirm-message');
  
  confirmMsgLm.innerHTML = 'Added';
  clearTimeout(timeoutID); //Clear any existing timeout before running a new one. This effectively "refreshes" the duration everytime you click the button.

  timeoutID = setTimeout( () => {
      confirmMsgLm.innerHTML = '';
    }, 2000
  );
};

//12G: When the message count is above 0, it will constantly increases by itself, until it reaches 0 again. 
let notification = 0;
if (notification === 0){
  document.title = 'App'
  };

function modifyNotification (amount){
  if (notification + amount < 0) {
    return;
  } else {
    notification += amount;
    document.title = `(${notification}) New Messages`

    // Start the interval when notification increases above 0 and there hasn't been an interval already.
    if (notification > 0 && !intervalID) {
      intervalID = setInterval( () => {
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


//12H: Creating two buttons: A send and a remove button, each increases the number of messages you have. Then, if your messages count is at least, then the tab message will constantly flash between 'App' and the number of messages you currently have. If you have 0 messages, then the tab title stays at App. 
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


