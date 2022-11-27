function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const placeInputDivRef = document.querySelector('#boxes');
const buttonCreateDivRef = document.querySelector('[data-create]');
const buttonDestroyDivRef = document.querySelector('[data-destroy]');
const inputNumberRef = document.querySelector('#controls').firstElementChild;
console.dir(inputNumberRef);

buttonCreateDivRef.addEventListener('click', createBoxes);
buttonDestroyDivRef.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  placeInputDivRef.innerHTML = '';
  inputNumberRef.value = '';
}

function createBoxes(amount) {
  amount = inputNumberRef.value;
  console.log(amount);
  const sizeDiv = [];
  let initialVal = 20;
  for (let i = 0; i < amount; i++) {
    initialVal += 10;
    sizeDiv.push(initialVal);
  }

  const divArray = [];
  for (let i = 0; i < amount; i++) {
    divArray.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${
        sizeDiv[i]
      }px; height: ${sizeDiv[i]}px;"></div>`
    );
  }

  placeInputDivRef.insertAdjacentHTML('beforeend', divArray.join(''));
}
