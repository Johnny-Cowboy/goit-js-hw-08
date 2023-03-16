let startButtonHTMLElement = document.querySelector("[data-start]");
let stopButtonHTMLElement = document.querySelector("[data-stop]");
let intervalId = null;
let typeEvent = "click";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startSwitchingColors() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startButtonHTMLElement.disabled = true;
}

function stopSwitchingColors() {
  clearInterval(intervalId);
  startButtonHTMLElement.disabled = false;
}

startButtonHTMLElement.addEventListener(typeEvent, startSwitchingColors);
stopButtonHTMLElement.addEventListener(typeEvent, stopSwitchingColors);
