const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Whats the name of Dudley Durselys dad?',
    answers: [
      { text: 'Vernon', correct: true },
      { text: 'Ivan', correct: false },
      { text: 'Vesuvius', correct: false },
      { text: 'Ivan', correct: false },
    ]
  },
  {
    question: 'How many Harry Potter books are there in total?',
    answers: [
      { text: '6', correct: false },
      { text: '12', correct: false },
      { text: '7', correct: true },
      { text: '10', correct: false }
    ]
  },
  {
    question: 'What shape scar does Harry have on his forehead?',
    answers: [
      { text: 'A night moon', correct: false },
      { text: ' A Lightening Bolt', correct: true },
      { text: 'A sparkling star', correct: false },
      { text: 'An axe', correct: false }
    ]
  },
  {
    question: 'What is a muggle ?',
    answers: [
      { text: 'Someone whose parents are magical and can perform magic', correct: false },
      { text: 'Someone whose parents arent magical and cant perform magic', correct: true },
      { text: 'Someone whose parents are part of slytherine', correct: true },
      { text: 'Someone whose parents are not part of slytherine', correct: true },
    ]
  }
]