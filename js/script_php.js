const quizData = [
    {
        question: "PHP server scripts are surrounded by delimiters, which?",
        a:  "<&>...</&>",
        b: "<?php...?>",
        c: " <script>...</script>",
        d: "<?php>...</?>",
        correct: "b",
    },
    {
        question: "What is the correct way to end a PHP statement?",
        a: " New line",
        b: ".",
        c: ";",
        d: " </php>",
 
        correct: "c",
    },
    {
        question: "Which superglobal variable holds information about headers, paths, and script locations?",
        a: " $_SERVER",
        b: " $_GET",
        c: "$_SESSION ",
        d: " $GLOBALS",
        correct: "a",
    },
    {
        question: "What is a correct way to add a comment in PHP?",
        a: "  <comment>...</comment>",
        b: "   /*...*/",
        c: "   <!--...-->",
        d: "   *\...\*",
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