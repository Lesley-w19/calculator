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
  document.querySelector(".clear").addEventListener("click", () => {
    document.querySelector('input[name="displayResult"]').value = "";
  });
};
clear();

const del = () => {
  document.querySelector(".del").addEventListener("click", () => {
    const val = document
      .querySelector('input[name="displayResult"]')
      .value.slice(0, -1);
    document.querySelector('input[name="displayResult"]').value = val;
  });
};
del();
