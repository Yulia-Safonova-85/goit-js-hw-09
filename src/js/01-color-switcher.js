
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const color = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let colorChangeId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);


function changeBgColor() {
    let bodyColor = getRandomHexColor(color);
    document.body.style.background = bodyColor;
}

function onStartBtnClick() {
    colorChangeId = setInterval(() => {
        changeBgColor();
    }, 1000);
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
}


function onStopBtnClick() {
    clearInterval(colorChangeId);
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', true);
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
}