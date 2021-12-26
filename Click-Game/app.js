let countingStatus = document.getElementById('counting-status');
let btnStart = document.getElementById('start');
let btnClick = document.getElementById('click');
let showResults = document.getElementById('show-result')

let winScore = 10;
let count = 0;

btnStart.addEventListener('click', () => {
    btnClick.removeAttribute('disabled')
    count = 0;
    showResults.innerHTML = '';
    countingStatus.innerHTML = count;
    startCounting()
})

btnClick.addEventListener('click', () =>{
    count++;
    countingStatus.innerHTML = count;
})

function startCounting() {
    setTimeout(() => {
        if (win(count)) {
            showResults.innerHTML = 'Yea! You are win...';
            showResults.style.color = 'green';
        } else {
            showResults.innerHTML = 'Ahh! You are lost...';
            showResults.style.color = 'red';
        }
        btnClick.setAttribute('disabled', true)
    }, 2000)
}

function win(v) {
    if(v >= winScore) {
        return true
    } else {
        return false
    }
}