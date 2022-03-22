const IDBOX = document.querySelector(".id-box");
const ADVICEBOX = document.querySelector(".advice-box");

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  const advice = data.slip.advice;
  const adviceId = data.slip.id;

  IDBOX.innerHTML = adviceId;
  ADVICEBOX.innerHTML = advice;

  console.log(adviceId, advice);
}

window.onload(getAdvice());
