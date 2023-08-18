let form = document.getElementById("sign-up-form");
let email = document.getElementById("email");
let country = document.getElementById("country");
let zipcode = document.getElementById("zipcode");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");



email.addEventListener('input', () => {
  checkEmailValidity();
});
country.addEventListener('input', () => {
  checkCountryValidity();
});
zipcode.addEventListener('input', () => {
  checkZipCodeValidity();
});
password.addEventListener('input', () => {
  checkPasswordValidity();
}); 
confirmPassword.addEventListener('input', () => {
  checkConfirmPasswordValidity();
});

function checkEmailValidity(){
  if(!email.validity.valid && email.value !== ''){
    if(email.validity.typeMismatch){
      showErrorMessage(email, "Please enter a valid email");
    }
    else if(email.validity.tooShort){
      showErrorMessage(email, "Email should be at least 8 characters long");
    }
  }
  else {
    hideErrorMessage(email);
  }
}

function checkCountryValidity(){
  if(!country.validity.valid && country.value !== ''){
    showErrorMessage(country, "Please enter a valid country");
  }
  else {
    hideErrorMessage(country);
  }
}

function checkZipCodeValidity(){
  if(!zipcode.validity.valid && zipcode.value !== ''){
    showErrorMessage(zipcode, "Please enter a valid zip code");
  }
  else {
    hideErrorMessage(zipcode);
  }
}

function checkPasswordValidity(){
  if(!password.validity.valid && password.value !== ''){
    if(password.validity.tooShort){
      showErrorMessage(password, "Password should be at least 8 characters long");
    }
    else if(password.validity.patternMismatch){
      showErrorMessage(password, "Passwords should contain uppercase and lowercase characters, and at least one number and symbol")
    }
  }
  else {
    hideErrorMessage(password);
  }  
}

function checkConfirmPasswordValidity(){
  if(confirmPassword.value !== password.value && confirmPassword.value !== ''){
    showErrorMessage(confirmPassword, "The passwords don't match");
  }
  else {
    hideErrorMessage(confirmPassword);
  }  
}

function showErrorMessage(element, message){
  let errorElement = document.querySelector(`#${element.id} + .error`);
  errorElement.classList.add("active");
  errorElement.textContent = message;
}

function hideErrorMessage(element){
  console.log('hiding')
  let errorElement = document.querySelector(`#${element.id} + .error`);
  errorElement.classList.remove("active");
  errorElement.textContent = "";
}


//form submit
form.addEventListener('submit', (e) => {
  [email, country, zipcode, password, confirmPassword].forEach((formField) => {
    if(!formField.validity.valid){
      e.preventDefault();
      if(formField.value == ""){
        showErrorMessage(formField, "This field is required");
      }
    }
  });
});