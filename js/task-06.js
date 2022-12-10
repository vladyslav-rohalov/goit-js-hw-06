const inputValueRef = document.querySelector('#validation-input');
const stringLength = inputValueRef.getAttribute('data-length');

inputValueRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  inputValueRef.classList.remove('invalid');
  const inputStrLength = event.currentTarget.value.split('');
  if (inputStrLength.length === Number(stringLength)) {
    inputValueRef.classList.add('valid');
  } else {
    inputValueRef.classList.add('invalid');
  }
}
