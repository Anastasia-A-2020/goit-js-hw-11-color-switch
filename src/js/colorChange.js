import colors from "./colors";

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

let intervalForChangeColor = null;

refs.startBtn.addEventListener("click", onStartBtnClick);
refs.stopBtn.addEventListener("click", onStopBtnClick);


function changeBackground() {
    const max = colors.length - 1;
    const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }; 
    const index = randomIntegerFromInterval(0, max);
    document.body.style.backgroundColor = colors[index];
}

function onStartBtnClick() {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    intervalForChangeColor = setInterval(changeBackground, 1000)
};

function onStopBtnClick() {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(intervalForChangeColor)
};