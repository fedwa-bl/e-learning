const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<scripting>",
        b: "<script>",
        c: "<js>",
        d: "<javascript>",
        correct: "b",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "The <body> section",
        b: "The <head> section",
        c: "Both the <head> section and the <body> section are correct",
        d: "The <div> section",
 
        correct: "c",
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "alert('Hello World');",
        b: "msg('Hello World');",
        c: " msgBox('Hello World');",
        d: " alertBox('Hello World');",
        correct: "a",
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        a: "  var colors = 'red', 'green', 'blue'",
        b: "  var colors = ['red', 'green', 'blue']",
        c: "  var colors = (1:'red', 2:'green', 3:'blue')",
        d: "  var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
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