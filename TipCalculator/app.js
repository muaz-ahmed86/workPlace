let tipCalculator = document.querySelector('.left');
let totalTip = document.getElementById('tip-value');
let totalValue = document.getElementById('total-value');
// console.log(totalValue);
const data = {
    bill: 0,
    tip: 0,
    person: 1
}

// tipCalculator.addEventListener('click', (event) => {
//     if (event.target.id != '') {
//         event.target.value = '';
//         // calculate()
//     }
// })

tipCalculator.addEventListener('change', (e) => {
    // console.log(e)
    if (validateInput(e.target.value)) {
        data[e.target.name] = parseFloat(e.target.value);
        let tip =  (data.bill * data.tip) / 100;
        let total = data.bill + tip;
        total = total / data.person;
        total = total.toFixed(2);
        totalValue.innerHTML = total;
        let tipPerPerson = tip / data.person;
        tipPerPerson = tipPerPerson.toFixed(2);
        totalTip.innerHTML = tipPerPerson;
    } else {
        alert(`Enter the valid input in: '${e.target.name}'`)
    }
        
})



const validateInput = input => {
    return (/^\d+$/).test(input)
}
