// Selectors---
let typingText = selector('.typing-text p'),
inpFeild = selector('.input-field'),
mistakes = selector('.mistake span'),
timeTag = selector('.time b'),
wpmTag = selector('.wpm span'),
cpmTag = selector('.cpm span'),
tryAgainBtn = selector('.try');

// Variables---
let texts = [
    `The preamble is part of the statute, and that no part of a
    statute can be regarded as independent of the rest,... It is
    therefore clearly permissible to have recourse to it as an aid
    to construing the enacting provisions. The preamble is not,
    however, of the same weight as an aid to construction of a
    section o f the Act as are other relevant enacting words to be
    found elsewhere in the Act, or even related Acts, there may
    be no exact correspondence between preamble andenactment,
    and the enactment may go beyond, or it may fall short of, the
    indications that may be gathered from the preamble. Again,
    the preamble cannot be o f such, or any, assistance in the
    construing provisions which embody qualifications o`,
    `The preamble is part of the statute, and that no part of a
    statute can be regarded as independent of the rest,... It is
    therefore clearly permissible to have recourse to it as an aid
    to construing the enacting provisions. The preamble is not,
    however, of the same weight as an aid to construction of a
    section o f the Act as are other relevant enacting words to be
    found elsewhere in the Act, or even related Acts, there may
    be no exact correspondence between preamble andenactment,
    and the enactment may go beyond, or it may fall short of, the
    indications that may be gathered from the preamble. Again,
    the preamble cannot be o f such, or any, assistance in the
    construing provisions which embody qualifications o`,
    `The first paragraph of the preamble of the Constitution of 
    Bangladesh says that “We,/A« people of Bangladesh, having 
    proclaimed our independence on the 26th day of march, 1971 
    and through a historic war for national independence, 
    established the independent, sovereign People's Republic of 
    Bangladesh;" Thus it indicates the source, viz. the people of 
    Bangladesh from which the Constitution comes.`
];

let timer,
maxtime = 60,
timeLeft = maxtime,
isTyping,
index = 0,
mistake = 0;

// EventListeners---
inpFeild.addEventListener('input', initTyping);

tryAgainBtn.addEventListener('click', resetParagraph);


// Functions---
function randParagraph() {
    let randIndex = Math.floor(Math.random() * texts.length);
    typingText.innerHTML = '';
    texts[randIndex].split('').forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    typingText.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener('keydown', () => inpFeild.focus());
    document.addEventListener('click', () => inpFeild.focus());
}


function initTyping() {
    let charTag = typingText.querySelectorAll('span');
    let characters = charTag[index].innerText;
    let typedChar = inpFeild.value.split('')[index];
    
    if(index < charTag.length - 1 && timeLeft > 0) {
        if(!isTyping) {
            timer = setInterval(() => {
                if(timeLeft > 0) {
                    timeLeft--;
                    timeTag.innerHTML = timeLeft 
                } else {
                    clearInterval(timer)
                }
            }, 1000);
            isTyping = true;
        }    
    
        if (typedChar == undefined) {
            index--;
            if (charTag[index].classList.contains('incorrect')) {
                mistake--;
            }
            charTag[index].classList.remove('correct', 'incorrect');
        } else {
            if (characters === typedChar) {
                charTag[index].classList.add('correct');
            } else {
                mistake++;
                charTag[index].classList.add('incorrect');
            }
            index++;
        }
        
        charTag.forEach(span => span.classList.remove('active'))
        charTag[index].classList.add('active');
    
        let wpm = Math.round((((index - mistake) / 5) / (maxtime - timeLeft)) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        mistakes.innerHTML = mistake;
        wpmTag.innerHTML = wpm;
        cpmTag.innerHTML = index - mistake;
    } else {
        inpFeild.value = '';
        clearInterval(timer)
    }
}

function resetParagraph() {
    randParagraph();
    inpFeild.value = '';
    clearInterval(timer)
    timeLeft = maxtime;
    index = mistake = isTyping = 0;
    timeTag.innerHTML = timeLeft;
    mistakes.innerHTML = mistake;
    wpmTag.innerHTML = 0;
    cpmTag.innerHTML = 0;
}

function selector(id) {
    let select = document.querySelector(id);
    return select;
}