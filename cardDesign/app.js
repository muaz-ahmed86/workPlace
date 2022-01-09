const buttons = document.querySelectorAll('.themes button');
const theme = document.querySelector(':root');
console.log(theme.style);
console.log(buttons)

buttons.forEach(button => {
    button.addEventListener('click', e => {
        let id = e.target;
        if(id.classList.contains('btn1')) {
            theme.style.setProperty('--theme-color', '#3498db')
        } else if(id.classList.contains('btn2')) {
            theme.style.setProperty('--theme-color', '#ff1756')
        } else if(id.classList.contains('btn3')) {
            theme.style.setProperty('--theme-color', '#1cb65d')
        } else if(id.classList.contains('btn4')) {
            theme.style.setProperty('--theme-color', '#8e44ad')
        } else if(id.classList.contains('btn5')) {
            theme.style.setProperty('--theme-color', '#f4b932')
        }
    })
})