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

function init(){
    document.getElementById('quizLength').innerHTML = questions.length;
    showQuestion()
}

function showQuestion(){
    let question = questions[currentQuestion];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}