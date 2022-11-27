const buttonDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);

const counterResultRef = document.querySelector('#value');

let counterValue = 0;

const onButtonDecrement = function () {
  counterValue -= 1;
  counterResultRef.textContent = counterValue;
};

const onButtonIncrement = function () {
  counterValue += 1;
  counterResultRef.textContent = counterValue;
};

buttonDecrementRef.addEventListener('click', onButtonDecrement);

buttonIncrementRef.addEventListener('click', onButtonIncrement);
