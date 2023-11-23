const data = [
  {
    id: 1,
    question: "Which of these fish is actually a fish?",
    answers: [
      { answer: "swordfish", isCorrect: true },
      { answer: "jellyfish", isCorrect: false },
      { answer: "starfish", isCorrect: false },
      { answer: "crayfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "A group of which animals is referred to as a wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".resultado")
const question = document.querySelector(".pregunta")
const answersContainer = document.querySelector(".respuestas")
const submit = document.querySelector(".enviar")
const play = document.querySelector(".jugar")

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;;

const playAgain = () => {
   qIndex = 0;
   correctCount = 0;
   wrongCount = 0;
   total = 0;
showQuestion(qIndex);
};

play.addEventListener("click", ()=>{
  playAgain();
  resultScreen.style.display = "none"
  gameScreen.style.display= "block"
})

const showResult = ()=>{
  resultScreen.style.display = "block"
  gameScreen.style.display= "none"

  resultScreen.querySelector(".correcto").textContent=
  `Respuestas correctas: ${correctCount}`

  resultScreen.querySelector(".incorrecto").textContent=
  `Respuestas incorrectas: ${wrongCount}`

  resultScreen.querySelector(".score").textContent=
  `Tu escore: ${(correctCount - wrongCount )*10}`
}


const showQuestion = (qNumber) =>{
  if(qIndex === data.length) return showResult()

  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers.map((item,index)=>
    `
    <div class="respuesta">
    <input name="respuesta" type="radio" id=${index} value=${item.isCorrect}/>
    <label for="1">${item.answer}</label>
</div>
`
  ).join('');
  selectAnswer();
};

  const selectAnswer = () =>{
    answersContainer.querySelectorAll("input").forEach((el) => {
      el.addEventListener("click", (e)=>{
        selectedAnswer = e.target.value;
      })
    })
  };


const submitAnswer = () => {
  submit.addEventListener("click", ()=>{
    if(selectedAnswer != null){
      selectedAnswer === 'true'? correctCount++ : wrongCount ++;
      qIndex++;
      showQuestion(qIndex)
    }else alert('Selecciona una respuesta!')
  } )
}

showQuestion(qIndex)
submitAnswer()