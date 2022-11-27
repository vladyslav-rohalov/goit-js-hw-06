const inputValueRef = document.querySelector('#validation-input');
const stringLength = inputValueRef.getAttribute('data-length');

inputValueRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  inputValueRef.classList.remove('invalid');
  const inputStrLength = event.currentTarget.value.split('');
  inputStrLength.length < stringLength
    ? inputValueRef.classList.add('invalid')
    : inputValueRef.classList.add('valid');
}
