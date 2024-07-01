const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        answers: ["París", "Londres", "Roma", "Madrid"],
        correct: 0
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        answers: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar", "Jorge Luis Borges"],
        correct: 0
    },
    // Agrega más preguntas aquí
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answerButtons = document.querySelectorAll('.answer-btn');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.onclick = () => selectAnswer(index);
    });
    
    resetTimer();
    startTimer();
}

function selectAnswer(selectedIndex) {
    const correctAnswerIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctAnswerIndex) {
        score++;
        document.getElementById('score').textContent = score;
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. La respuesta correcta es " + questions[currentQuestionIndex].answers[correctAnswerIndex]);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        clearInterval(timerInterval);
        alert("¡Has terminado el juego! Tu puntaje es: " + score);
    }
}

function startTimer() {
    timeLeft = 10;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            selectAnswer(-1); // Simula respuesta incorrecta si se acaba el tiempo
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = timeLeft;
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
});