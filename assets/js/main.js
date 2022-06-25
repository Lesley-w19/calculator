// const calculator = () => {

//   const clear = () => {  };

//   const delete = () =>{};

//   const appendNumber = (number) => {};
//   const chooseOperation = (operation) => {};
//   const compute = () => {};
//   const updateDisplay = () => {};
// };
// calculator();


let displayResult = document.querySelector('input[name="displayResult"]');


// ----------- Per your index.html layout -----------

const calcNumbers = (numValue) => {
  document.querySelector('input[name="displayResult"]').value += numValue;

  return numValue;
};
calcNumbers();

const clear = () => {
  document.querySelector('input[name="displayResult"]').value = "";
};
clear();
