const timeArray = Array.from(document.querySelectorAll("[data-time]"));

// Or spread it into an new array
// const timeArray = [...document.querySelectorAll("[data-time]")];

const totalTime = timeArray
  .map((timeLength) => timeLength.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((totalSeconds, videoSeconds) => totalSeconds + videoSeconds);

let secondsLeft = totalTime;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
