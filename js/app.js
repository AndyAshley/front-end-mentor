const bill = document.getElementById("bill-total");
const people = document.getElementById("guest-total");
const custom = document.getElementById("tip-custom");
const tipDisplay = document.getElementById("tip-sum");
const totalDisplay = document.getElementById("total-sum");
const btnWrapper = document.getElementById("btn-wrapper");
const tipBtn5 = document.getElementById("tip-5");
const tipBtn10 = document.getElementById("tip-10");
const tipBtn15 = document.getElementById("tip-15");
const tipBtn25 = document.getElementById("tip-25");
const tipBtn50 = document.getElementById("tip-50");
const btnArray = [tipBtn5, tipBtn10, tipBtn15, tipBtn25, tipBtn50];

const defaultTipDisplay = "0.00";
const defaultTotalDisplay = "0.00";

let isCustom = false;
let billAmount = 0.0;
let guests = 1;
let customTip = "";
let tipAmount;

//initialize states on window load.
people.value = guests;
tipDisplay.innerText = defaultTipDisplay;
totalDisplay.innerText = defaultTipDisplay;
tipBtn5.classList.toggle("active");
setTip(5);
//event listeners

tipBtn5.addEventListener("click", (e) => {
  custom.value = "";
  isCustom = false;
  if (tipBtn5.classList.contains("active")) {
    return;
  } else {
    tipBtn5.classList.toggle("active");
    tipBtn10.classList.remove("active");
    tipBtn15.classList.remove("active");
    tipBtn25.classList.remove("active");
    tipBtn50.classList.remove("active");
  }
});

tipBtn10.addEventListener("click", (e) => {
  custom.value = "";
  isCustom = false;
  if (tipBtn10.classList.contains("active")) {
    return;
  } else {
    tipBtn5.classList.remove("active");
    tipBtn10.classList.toggle("active");
    tipBtn15.classList.remove("active");
    tipBtn25.classList.remove("active");
    tipBtn50.classList.remove("active");
  }
});

tipBtn15.addEventListener("click", (e) => {
  custom.value = "";
  isCustom = false;
  if (tipBtn15.classList.contains("active")) {
    return;
  } else {
    tipBtn5.classList.remove("active");
    tipBtn10.classList.remove("active");
    tipBtn15.classList.toggle("active");
    tipBtn25.classList.remove("active");
    tipBtn50.classList.remove("active");
  }
});

tipBtn25.addEventListener("click", (e) => {
  custom.value = "";
  isCustom = false;
  if (tipBtn25.classList.contains("active")) {
    return;
  } else {
    tipBtn5.classList.remove("active");
    tipBtn10.classList.remove("active");
    tipBtn15.classList.remove("active");
    tipBtn25.classList.toggle("active");
    tipBtn50.classList.remove("active");
  }
});

tipBtn50.addEventListener("click", (e) => {
  custom.value = "";
  isCustom = false;
  if (tipBtn50.classList.contains("active")) {
    return;
  } else {
    tipBtn5.classList.remove("active");
    tipBtn10.classList.remove("active");
    tipBtn15.classList.remove("active");
    tipBtn25.classList.remove("active");
    tipBtn50.classList.toggle("active");
  }
});

document.addEventListener("change", (e) => {
  if (isCustom === true) {
    tipBtn5.classList.remove("active");
    tipBtn10.classList.remove("active");
    tipBtn15.classList.remove("active");
    tipBtn25.classList.remove("active");
    tipBtn50.classList.remove("active");
  }
});

document.addEventListener("change", (e) => {
  showSum();
});

function showSum() {
  x = (billAmount * tipAmount) / 100;
  i = guests;
  splitTip = x / i;

  tipDisplay.innerText = x.toFixed(2);
  totalDisplay.innerText = splitTip.toFixed(2);
}

function getBill() {
  //get the value
  billAmount = bill.value;

  // when user inputs decimal, only allow 2 characters after it.
  if (billAmount.includes(".")) {
    i = billAmount.indexOf(".");
    x = i + 3;
    billAmount = billAmount.slice(0, x);

    //set display and amount
    bill.value = billAmount;
    billAmount = bill.value;
    showSum();
  }
}

function setCustom() {
  //get the vlaue
  customTip = custom.value;

  //if value has input, custom tip is true, else its false
  if (customTip !== "") {
    isCustom = true;
    custom.value = customTip;
    customTip = custom.value;
    tipAmount = customTip;
    showSum();
  } else {
    isCustom = false;
  }
}

function setTip(number) {
  //if custom tip is true, then set the tip amount to the custom amount, if not then set it to the amount on the button clicked.
  if (isCustom === true) {
    tipAmount = customTip;
  } else {
    tipAmount = number;
  }
  showSum();
}

function setPeople() {
  //set up input var
  guests = people.value;
  showSum();
}

function reset() {
  bill.value = "";
  people.value = "";
  custom.value = "";
  billAmount = "";
  guests = 1;
  customTip = "";
  isCustom = false;
  setTip(5);
  tipBtn5.classList.add("active");
  tipBtn10.classList.remove("active");
  tipBtn15.classList.remove("active");
  tipBtn25.classList.remove("active");
  tipBtn50.classList.remove("active");
}
