
let currentQuestion = 0;
let rightAnswers = 0;
let AUDIO_SUCCESS = new Audio('audio/correct.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
    document.getElementById('quizLength').innerHTML = questions.length;

    showQuestion()
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else { // Show question
        updateToNextQuestion();
        updateProgressBar();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('quizLengthEnd').innerHTML = questions.length;
    document.getElementById('header-image').src = './img/trophy.png';
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
    console.log('Fortschritt:', percent);
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('currentQeustion').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectionQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    console.log('Selection answer is ', selection);
    console.log('SelectionQuestionNumber is', selectionQuestionNumber);
    console.log('Current question is ', question['right_answer']);

    if (rightAnswerSelected(selectionQuestionNumber, question)) {
        rightAnswer(selection);
    } else {
        wrongAnswer(selection, idOfRightAnswer)
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectionQuestionNumber, question) {
    return selectionQuestionNumber == question['right_answer']
}

function rightAnswer(selection) {
    console.log('Richtige Antwort !!!')
    document.getElementById(selection).parentNode.classList.add('bg-success');
    AUDIO_SUCCESS.play();
    rightAnswers++
    document.getElementById('rightAnswers').innerHTML = rightAnswers;
}

function wrongAnswer(selection, idOfRightAnswer) {
    console.log('Falsche Antwort !!!')
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    AUDIO_FAIL.play();
}
 

function nextQuestion() {
    currentQuestion++ // z.B von von 0 auf 1
    document.getElementById('next-button').disabled = true; // der butten wird wieder disabled
    resetAnswerButton(); // führt die function aus die die antworten resetet
    showQuestion(); // rendert die fragen neu auf der nächsten stelle im array da currentQuestion hoch gesetzt wird 


}

function resetAnswerButton() { // entfernt die css-klassen
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('header-image').src = './img/pencil.jpg';
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
    currentQuestion = 0;
    rightAnswers = 0;
    init();
}