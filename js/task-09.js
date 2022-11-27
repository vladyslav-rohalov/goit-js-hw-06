function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColorRef = document.querySelector('button');
const areaBgRef = document.querySelector('.color');

buttonChangeColorRef.addEventListener('click', onPressButton);

function onPressButton() {
  areaBgRef.style.backgroundColor = getRandomHexColor();
}
