let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Welches Tier ist bekannt dafür, das größte Säugetier der Welt zu sein?",
        "answer_1": "Elefant",
        "answer_2": "Blauwal",
        "answer_3": "Giraffe",
        "answer_4": "Nashorn",
        "right_answer": 2
    },
    {
        "question": "Wer malte die Mona Lisa?",
        "answer_1": "Vincent van Gogh",
        "answer_2": "Pablo Picasso",
        "answer_3": "Leonardo da Vinci",
        "answer_4": "Michelangelo",
        "right_answer": 3
    },
    {
        "question": "Welche Sprache hat die meisten Muttersprachler weltweit?",
        "answer_1": "Englisch",
        "answer_2": "Spanisch",
        "answer_3": "Hindi",
        "answer_4": "Mandarin",
        "right_answer": 4
    },
    {
        "question": "In welchem Jahr fand der Fall der Berliner Mauer statt?",
        "answer_1": "1985",
        "answer_2": "1989",
        "answer_3": "1991",
        "answer_4": "1993",
        "right_answer": 2
    },
    {
        "question": "Welcher Planet wird oft als der 'Rote Planet' bezeichnet?",
        "answer_1": "Mars",
        "answer_2": "Saturn",
        "answer_3": "Venus",
        "answer_4": "Neptun",
        "right_answer": 1
    },
    {
        "question": "Wie viele Kontinente gibt es auf der Erde?",
        "answer_1": "5",
        "answer_2": "6",
        "answer_3": "7",
        "answer_4": "8",
        "right_answer": 3
    }
];

let currentQuestion = 0;

function init() {
    document.getElementById('quizLength').innerHTML = questions.length;
    showQuestion()
}

function showQuestion() {
    let question = questions[currentQuestion];

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

    if (selectionQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort !!!')
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('Falsche Antwort !!!')
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
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