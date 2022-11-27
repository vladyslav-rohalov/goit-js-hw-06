const registerFormRef = document.querySelector('.login-form');

registerFormRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const emailVal = event.currentTarget.elements.email.value;
  const passVal = event.currentTarget.elements.password.value;
  if (emailVal === '' || passVal === '')
    alert('Вы не заполнили все обязательные поля!');
  const result = { email: emailVal, password: passVal };
  console.log(result);
  event.currentTarget.reset();
}
