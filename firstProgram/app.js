let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let progress = document.getElementById('progress-bar');

function showCurrentTIme() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
    progress.style.width = (sec / 60) * 100 + '%'
}

setInterval(showCurrentTIme, 1000)