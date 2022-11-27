const textSizeRef = document.querySelector('[min]');
const inputRef = document.querySelector('#font-size-control');
const editTextRef = document.querySelector('#text');

inputRef.setAttribute('value', '16');

inputRef.addEventListener('change', onRangeChange);

function onRangeChange() {
  editTextRef.style.fontSize = `${textSizeRef.value}px`;
}
