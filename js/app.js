// get dom elements
ratingCard = document.getElementById("rating-card");
thankYouCard = document.getElementById("thank-you-card");
innerWrapper = document.getElementById("inner-wrapper");
buttonOne = document.getElementById("button-1");
buttonTwo = document.getElementById("button-2");
buttonThree = document.getElementById("button-3");
buttonFour = document.getElementById("button-4");
buttonFive = document.getElementById("button-5");
userRating = document.getElementById("user-stars");

let numberRating = "";

function oneStar() {
  if (buttonTwo.classList.contains("active")) {
    buttonTwo.classList.remove("active");
  }
  if (buttonThree.classList.contains("active")) {
    buttonThree.classList.remove("active");
  }
  if (buttonFour.classList.contains("active")) {
    buttonFour.classList.remove("active");
  }
  if (buttonFive.classList.contains("active")) {
    buttonFive.classList.remove("active");
  }

  buttonOne.classList.add("active");
  numberRating = "1 ";
}

function twoStar() {
  if (buttonOne.classList.contains("active")) {
    buttonOne.classList.remove("active");
  }
  if (buttonThree.classList.contains("active")) {
    buttonThree.classList.remove("active");
  }
  if (buttonFour.classList.contains("active")) {
    buttonFour.classList.remove("active");
  }
  if (buttonFive.classList.contains("active")) {
    buttonFive.classList.remove("active");
  }

  buttonTwo.classList.add("active");
  numberRating = "2 ";
}

function threeStar() {
  if (buttonOne.classList.contains("active")) {
    buttonOne.classList.remove("active");
  }
  if (buttonTwo.classList.contains("active")) {
    buttonTwo.classList.remove("active");
  }
  if (buttonFour.classList.contains("active")) {
    buttonFour.classList.remove("active");
  }
  if (buttonFive.classList.contains("active")) {
    buttonFive.classList.remove("active");
  }

  buttonThree.classList.add("active");
  numberRating = "3 ";
}

function fourStar() {
  if (buttonOne.classList.contains("active")) {
    buttonOne.classList.remove("active");
  }
  if (buttonTwo.classList.contains("active")) {
    buttonTwo.classList.remove("active");
  }
  if (buttonThree.classList.contains("active")) {
    buttonThree.classList.remove("active");
  }
  if (buttonFive.classList.contains("active")) {
    buttonFive.classList.remove("active");
  }

  buttonFour.classList.add("active");
  numberRating = "4 ";
}

function fiveStar() {
  if (buttonOne.classList.contains("active")) {
    buttonOne.classList.remove("active");
  }
  if (buttonTwo.classList.contains("active")) {
    buttonTwo.classList.remove("active");
  }
  if (buttonThree.classList.contains("active")) {
    buttonThree.classList.remove("active");
  }
  if (buttonFour.classList.contains("active")) {
    buttonFour.classList.remove("active");
  }

  buttonFive.classList.add("active");
  numberRating = "5 ";
}

function submitRating() {
  if (numberRating == "") {
    return;
  } else {
    innerWrapper.style.transform = "rotateY(-180deg)";
    userRating.innerText = numberRating;
  }
}
