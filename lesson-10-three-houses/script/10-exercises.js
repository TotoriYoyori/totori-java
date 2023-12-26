const jsTestButton = document.querySelector('.js-test-button');
console.log (
  jsTestButton.classList.contains('js-test-button')
);

// Gnashing Fang Combo
function continuationToggle(combo) {
  const jsContinuation= document.querySelector(`.js-${combo}-button`);

  switch (jsContinuation) {
    case document.querySelector(`.js-gnash-button`):
      if (jsContinuation.classList.contains('cont-ready')) {
        jsContinuation.classList.remove('cont-ready');
        jsContinuation.innerHTML = 'Gnashing Fang';
      } else {
        jsContinuation.classList.add('cont-ready');
        jsContinuation.innerHTML = 'Ready to Rip';
        gnashCheck;
      };
      break;

    case document.querySelector(`.js-claw-button`):
      if (jsContinuation.classList.contains('cont-ready')) {
        jsContinuation.classList.remove('cont-ready');
        jsContinuation.innerHTML = 'Savage Claw';
      } else {
        jsContinuation.classList.add('cont-ready');
        jsContinuation.innerHTML = 'Ready to Tear';
        clawCheck;
      };
      break;

    case document.querySelector(`.js-talon-button`):
      if (jsContinuation.classList.contains('cont-ready')) {
        jsContinuation.classList.remove('cont-ready');
        jsContinuation.innerHTML = 'Wicked Talon';
      } else {
        jsContinuation.classList.add('cont-ready');
        jsContinuation.innerHTML = 'Ready to Gouge';
        talonCheck;
      };
  };
};

// Amazon Calculator
function calculateTotal() {
  const costInputLm = document.querySelector('.js-cost-input');
  const calcAppearance = document.querySelector('.total-cost').classList;
  
  if (costInputLm.value < 0) {
    calcAppearance.add (
      "error-cost")
    document.querySelector('.js-total-cost')
    .innerHTML = 'Error: cost cannot be below $0';
  } else {
    const cost = costInputLm.value < 40 ?
    Number(costInputLm.value) + 10
    :Number(costInputLm.value);

    document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;

    calcAppearance.contains("error-cost") ?
    calcAppearance.remove ("error-cost")
    : calcAppearance;
  };
};

function igorBecomesJakob() {
  const igorButtonLm = document.querySelector('.js-igor-button');

  igorButtonLm.innerHTML = 
  (igorButtonLm.innerHTML === 'Jakob Berglund Rogert')? 
    'Igor Sogorovecs'
    :`Jakob Berglund Rogert`;
};
