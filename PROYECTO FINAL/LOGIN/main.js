function handlerClickSignUp() {
  const signupButton = document.getElementById("signup-button");
  const userForms = document.getElementById("user_options-forms");

  /**
   * Add event listener to the "Sign Up" button
   */
  signupButton.addEventListener(
    "click",
    () => {
      userForms.classList.remove("bounceRight");
      userForms.classList.add("bounceLeft");
    },
    false
  );
}

function handlerClickLogin() {
  let loginButton = document.getElementById("login-button");
  let userForms = document.getElementById("user_options-forms");

  /**
   * Add event listener to the "Login" button
   */
  loginButton.addEventListener(
    "click",
    () => {
      userForms.classList.remove("bounceLeft");
      userForms.classList.add("bounceRight");
    },
    false
  );
}

function loginUser() {
  let emailInput = document.querySelector('input[type="email"]');
  let passwordInput = document.querySelector('input[type="password"]');

  let email = emailInput.value;
  let password = passwordInput.value;

  if (email === "valdezmiguelangel@hotmail.com" && password === "12345678") {
    alert("Bienvenido");
  } else {
    alert("Error de credenciales");
  }
}
  document.querySelector('.forms_buttons-action').addEventListener('click', function () {
    window.location.href = 'file:///C:/Users/User/Desktop/PROYECTO%20FINAL/API%20DE%20GOOGLE%20MAPS/index.html';
  });

  document
    .querySelector('input[type="submit"]')
    .addEventListener("click", loginUser);