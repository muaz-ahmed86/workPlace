const stopwatchCounterStart = document.getElementById('start');
const stopwatchCounterReset = document.getElementById('reset');
const stopwatchCounterPause = document.getElementById('pause');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let min;
let sec = 0;
let timer = null;
let watchRunning = false;

function start() {
    if(!watchRunning) {
        watchRunning = true;
        timer = setInterval(function() {
            sec++;
            let {min , second} = getTime(sec);
            minutes.textContent = min < 10 ? ('0' + min) : min;
            seconds.textContent = second < 10 ? ('0' + second) : second;
            stopwatchCounterStart.textContent = 'Start';
        }, 1000)
    }
}

function reset() {
    watchRunning = false;
    clearInterval(timer)
    min = 0;
    sec = 0;
    minutes.textContent = '00';
    seconds.textContent = '00';
}

function pause() {
    watchRunning = false;
    clearInterval(timer);
    stopwatchCounterStart.textContent = 'Continue';
}

function getTime(sec) {
    min = parseInt(sec / 60);
    let second = parseInt(sec % 60);
    return {
        min,
        second
    }
}

stopwatchCounterStart.addEventListener('click', start)
stopwatchCounterReset.addEventListener('click', reset)
stopwatchCounterPause.addEventListener('click', pause)
