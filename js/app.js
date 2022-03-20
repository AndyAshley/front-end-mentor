//set up DOM elements
const mainContainer = document.getElementById("m-content");
const toastBefore = document.getElementById("toast-before");
const userInput = document.getElementById("email");
const errorMessage = document.getElementById("error-text");

//set up user input
let userEmail = "";

//get user input && remove errors when they start typing if previous attempt failed
function getEmail() {
  userEmail = userInput.value;
  if (userEmail != "" && userInput.classList.contains("active")) {
    userInput.classList.remove("active");
    errorMessage.style.display = "none";
  }
}

// validate user input && confirm its a valid email
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
  } else if (userEmail == "") {
    return;
  }
}

//set up the toast and insert it into the DOM on successful submit

function createToast(text) {
  //what we want our toast to say, ex. "Success!"
  const message = text;

  // create the element and add the toast class
  const toast = document.createElement("div");
  toast.className = "toast";
  const toastText = document.createElement("p");
  toastText.innerHTML = message;
  toast.appendChild(toastText);
  mainContainer.insertBefore(toast, toastBefore);

  // automatically remove the element after 5s
  setTimeout(() => {
    toast.remove();
  }, 5000);

  // Or remove the element on click
  toast.addEventListener("click", () => {
    toast.remove();
  });
}

// reset the user input && email input field after 3s
function resetForm() {
  userEmail = "";
  setTimeout(() => {
    userInput.value = "";
  }, 1000);
}

//submit the form
function submit() {
  createToast("Success!");
  resetForm();
}
