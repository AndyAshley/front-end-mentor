const workCur = document.getElementById("work-current");
const workPrev = document.getElementById("work-previous");
const playCur = document.getElementById("play-current");
const playPrev = document.getElementById("play-previous");
const studyCur = document.getElementById("study-current");
const studyPrev = document.getElementById("study-previous");
const exerciseCur = document.getElementById("exercise-current");
const exercisePrev = document.getElementById("exercise-previous");
const socialCur = document.getElementById("social-current");
const socialPrev = document.getElementById("social-previous");
const careCur = document.getElementById("care-current");
const carePrev = document.getElementById("care-previous");

//buttons
const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

const appData = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const workData = appData[0].timeframes;
const playData = appData[1].timeframes;
const studyData = appData[2].timeframes;
const exerciseData = appData[3].timeframes;
const socialData = appData[4].timeframes;
const careData = appData[5].timeframes;

function daily() {
  dailyBtn.style.color = "white";
  monthlyBtn.style.color = "#bdc1ff";
  weeklyBtn.style.color = "#bdc1ff";
  workCur.innerHTML = workData.daily.current + "hrs";
  workPrev.innerHTML = "Yesterday - " + workData.daily.previous + "hrs";
  playCur.innerHTML = playData.daily.current + "hrs";
  playPrev.innerHTML = "Yesterday - " + playData.daily.previous + "hrs";
  studyCur.innerHTML = studyData.daily.current + "hrs";
  studyPrev.innerHTML = "Yesterday - " + studyData.daily.previous + "hrs";
  exerciseCur.innerHTML = exerciseData.daily.current + "hrs";
  exercisePrev.innerHTML = "Yesterday - " + exerciseData.daily.previous + "hrs";
  socialCur.innerHTML = socialData.daily.current + "hrs";
  socialPrev.innerHTML = "Yesterday - " + socialData.daily.previous + "hrs";
  careCur.innerHTML = careData.daily.current + "hrs";
  carePrev.innerHTML = "Yesterday - " + careData.daily.previous + "hrs";
}

function weekly() {
  dailyBtn.style.color = "#bdc1ff";
  weeklyBtn.style.color = "white";
  monthlyBtn.style.color = "#bdc1ff";
  workCur.innerHTML = workData.weekly.current + "hrs";
  workPrev.innerHTML = "Last Week - " + workData.weekly.previous + "hrs";
  playCur.innerHTML = playData.weekly.current + "hrs";
  playPrev.innerHTML = "Last Week - " + playData.weekly.previous + "hrs";
  studyCur.innerHTML = studyData.weekly.current + "hrs";
  studyPrev.innerHTML = "Last Week - " + studyData.weekly.previous + "hrs";
  exerciseCur.innerHTML = exerciseData.weekly.current + "hrs";
  exercisePrev.innerHTML = "Last Week - " + exerciseData.weekly.previous + "hrs";
  socialCur.innerHTML = socialData.weekly.current + "hrs";
  socialPrev.innerHTML = "Last Week - " + socialData.weekly.previous + "hrs";
  careCur.innerHTML = careData.weekly.current + "hrs";
  carePrev.innerHTML = "Last Week - " + careData.weekly.previous + "hrs";
}

function monthly() {
  dailyBtn.style.color = "#bdc1ff";
  weeklyBtn.style.color = "#bdc1ff";
  monthlyBtn.style.color = "white";
  workCur.innerHTML = workData.monthly.current + "hrs";
  workPrev.innerHTML = "Last Month - " + workData.monthly.previous + "hrs";
  playCur.innerHTML = playData.monthly.current + "hrs";
  playPrev.innerHTML = "Last Month - " + playData.monthly.previous + "hrs";
  studyCur.innerHTML = studyData.monthly.current + "hrs";
  studyPrev.innerHTML = "Last Month - " + studyData.monthly.previous + "hrs";
  exerciseCur.innerHTML = exerciseData.monthly.current + "hrs";
  exercisePrev.innerHTML = "Last Month - " + exerciseData.monthly.previous + "hrs";
  socialCur.innerHTML = socialData.monthly.current + "hrs";
  socialPrev.innerHTML = "Last Month - " + socialData.monthly.previous + "hrs";
  careCur.innerHTML = careData.monthly.current + "hrs";
  carePrev.innerHTML = "Last Month - " + careData.monthly.previous + "hrs";
}

window.onload = weekly();
