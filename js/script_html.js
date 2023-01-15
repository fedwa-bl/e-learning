const quizData = [
   {
       question: "Choose the correct HTML element for the largest heading:",
       a: "<head>",
       b: "<h1>",
       c: "<h6>",
       d: "<heading>",
       correct: "b",
   },
   {
       question: "What is the correct HTML element for inserting a line break?",
       a: "<lb>",
       b: "<break>",
       c: "<br>",
       d: "<tab>",

       correct: "c",
   },
   {
       question: "What does HTML stand for?",
       a: "Hypertext Markup Language",
       b: "Hypertext Markdown Language",
       c: "Hyperloop Machine Language",
       d: "Helicopters Terminals Motorboats Lamborginis",
       correct: "a",
   },
   {
       question: "How can you open a link in a new tab/browser window?",
       a: " <a href='url' target='new'>",
       b: " <a href='url' target='_blank'>",
       c: " <a href='url' new>",
       d: " <a href='url' new_window>",
       correct: "b",
   },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
   deselectAnswers()
   const currentQuizData = quizData[currentQuiz]
   questionEl.innerText = currentQuizData.question
   a_text.innerText = currentQuizData.a
   b_text.innerText = currentQuizData.b
   c_text.innerText = currentQuizData.c
   d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
   answerEls.forEach(answerEl => answerEl.checked = false)
}
function go_home(){
    window.location.href="home.html";
}
function getSelected() {
   let answer
   answerEls.forEach(answerEl => {
       if(answerEl.checked) {
           answer = answerEl.id
       }
   })
   return answer
}
submitBtn.addEventListener('click', () => {
   const answer = getSelected()
   if(answer) {
      if(answer === quizData[currentQuiz].correct) {
          score++
      }
      currentQuiz++
      if(currentQuiz < quizData.length) {
          loadQuiz()
      } else if(score<3){
          quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Your score is too low. Reload to retake the quiz</button>
          `
      }else{
        quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="go_home()">Congratulations! You have finished the course.</button>
          `
      }


   }
})