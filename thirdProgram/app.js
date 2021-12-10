let dayName = document.getElementById('dayname');
let month = document.getElementById('month');
let monNum = document.getElementById('monnum');
let year = document.getElementById('year');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let period = document.getElementById('period');

function showTime() {
    let date = new Date()
    // console.dir(date)
    let day = findDay(date.getDay());
    let mon = findMonth(date.getMonth());
    let monNo = date.getMonth() + 1;
    let yr = date.getFullYear();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let pe = (hr > 12) ? 'PM' : 'AM';

    dayName.textContent = day;
    month.textContent = mon;
    monNum.textContent = monNo;
    year.textContent = yr;
    if (hr == 0) {
        hr = 12;
    }
    hr = (hr > 12) ? hr - 12 : hr;
    hour.textContent = (hr < 10) ? '0' + hr : hr;
    minute.textContent = (min < 10) ? '0' + min : min;
    second.textContent = (sec < 10) ? '0' + sec : sec;
    period.textContent = pe;

    setTimeout(showTime, 1000)
}
showTime()

function findDay(v) {
    let day = ''
    switch (v) {
        case 0:
           day = 'Sunday';
           break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
    }
    return day
}

function findMonth(v) {
    let mon = ''
    switch (v) {
        case 0:
           mon = 'January';
           break;
        case 1:
            mon = 'February';
            break;
        case 2:
            mon = 'March';
            break;
        case 3:
            mon = 'Afril';
            break;
        case 4:
            mon = 'May';
            break;
        case 5:
            mon = 'June';
            break;
        case 6:
            mon = 'July';
            break;
        case 7:
            mon = 'August';
            break;
        case 8:
            mon = 'September';
            break;
        case 9:
            mon = 'October';
            break;
        case 10:
            mon = 'November';
            break;
        case 11:
            mon = 'December';
            break;
    }
    return mon
}