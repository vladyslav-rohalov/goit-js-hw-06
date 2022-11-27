const inputValueRef = document.querySelector('#name-input');
const outputValueRef = document.querySelector('#name-output');

inputValueRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  outputValueRef.textContent = event.currentTarget.value;
}

inputValueRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (outputValueRef.textContent === '') {
    outputValueRef.textContent = 'Anonymous';
  }
}
