function selector(v) {
    let select = document.getElementById(v);
    return select
}
// let weightInput = document.getElementById('weight-input')

let weightInput = selector('weight-input');
// console.log(weightInput)
let heightInput = selector('height-input');
let successButton = selector('btn-success');
let resetButton = selector('btn-reset');
let result = selector('dynamic__bmi');
let message = selector('bmi_text')


function calculateVMI() {
    let height, weight, vmi;
    height = Number(heightInput.value);
    weight = Number(weightInput.value);
    vmi = weight / (height * 0.0254 * height * 0.0254);
    result.textContent = vmi.toFixed(2);
    // message.textContent = showMessage(vmi)
    let msg = showMessage(vmi);
    message.textContent = msg;
}

function showMessage(vmiValue) {
    if (vmiValue < 16) {
        return "You are severe thin"
    } else if (vmiValue >= 16 && vmiValue <= 17) {
        return "You are Moderate thin"
    } else if (vmiValue > 17 && vmiValue <= 18.5) {
        return "You are Mid thin"
    } else if (vmiValue > 18.5 && vmiValue <= 25) {
        return "You are Normal"
    } else {
        return "You are Overweight"
    }
}

function reset() {
    heightInput.value = '';
    weightInput.value = '';
    result.textContent = '_______';
    message.textContent = '';
}

function eventHandler() {
    if(Number(heightInput.value) && Number(weightInput.value)) {
        calculateVMI()
    } else {
        alert('Please Provide a valid Input')
        reset()
    }
}

successButton.addEventListener('click', eventHandler)
resetButton.addEventListener('click', reset)