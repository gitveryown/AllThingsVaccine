// We are completing the drop box for the answer on the FAQ page



const question = document.querySelectorAll('.question')
const answer = document.querySelectorAll('.answer')
const caret = document.querySelectorAll('.caret')


for(let i = 0; i < question.length; i++){
    let qText = question[i]
    qText.addEventListener('click' , () =>{
        answer[i].classList.toggle('answer-opened');
        caret[i].classList.toggle('caret-rotate');
    })
}

