let calculation = localStorage.getItem ('calculation') || '';
document.querySelector('.js-expression')
    .innerHTML = `${calculation}`;

function updateCalculation(insertValue) {
  calculation += insertValue;
  localStorage.setItem ('calculation', calculation);
  document.querySelector('.js-expression')
    .innerHTML = `${calculation}`;
  console.log(calculation);
};

function evalCalculation (){
  calculation = eval(calculation);
  document.querySelector('.js-expression')
    .innerHTML = `${calculation}`;
  localStorage.setItem ('calculation', calculation);
  console.log(calculation);
};

function resetCalculation (){
  calculation = '';
  localStorage.removeItem ('calculation');
  document.querySelector('.js-expression')
    .innerHTML = `${calculation}`;
};