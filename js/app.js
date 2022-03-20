const userInput = document.getElementById("email");
const errorMessage = document.getElementById("error-text");

let userEmail = "";

function getEmail() {
  userEmail = userInput.value;
}

function validateForm() {
  const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (userEmail.match(validateEmail) || (userEmail.match(validateEmail) && userInput.classList.contains("active"))) {
    userInput.classList.remove("active");
    errorMessage.style.display = "none";
  } else {
    userInput.classList.add("active");
    errorMessage.style.display = "block";
  }

  if (userEmail !== "" && userEmail.match(validateEmail)) {
    submit();
  }
}

function resetForm() {
  setTimeout(() => {
    userInput.value = "";
  }, 3000);
}

function submit() {
  console.log("sent!");
  resetForm();
}
