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
    {
        question: "¿Qué fue el Renacimiento y cómo transformó la cultura y el conocimiento en Europa?",
        answers: ["Fue un movimiento cultural que revitalizó el arte", "Fue una guerra por la independencia de Estados Unidos", "Fue un movimiento religioso que causó la Reforma", "Fue una expedición a América"],
        correct: 0
    },
    {
        question: "¿Qué factores llevaron al colapso del Imperio Romano?",
        answers: [" Invasiones bárbaras", "La invención de la imprenta", "La unificación de Alemania", "La construcción de las pirámides"],
        correct: 0
    },
    {
        question: "¿Cómo influyó la Ilustración en la Revolución Francesa y en el desarrollo de las democracias modernas?",
        answers: ["Promovió ideas de igualdad", "Causó la caída del Imperio Romano", "Estableció el sistema feudal", "Fundó el Imperio Bizantino"],
        correct: 0
    },
    {
        question: "¿Cuáles fueron las principales causas de la Primera Guerra Mundial?",
        answers: ["Nacionalismo, alianzas militares, militarismo e imperialismo.", "La Guerra de Independencia de Estados Unidos, la peste negra, el descubrimiento de América.", "La caída de Constantinopla, la Revolución Rusa, el Renacimiento.", "La Revolución Francesa, el Tratado de Versalles, la Guerra de los Cien Años."],
        correct: 0
    },
    {
        question: "¿Qué impacto tuvo la Revolución Industrial en la sociedad y la economía del siglo XIX?",
        answers: ["Aumento de la producción, urbanización y cambios en las condiciones laborales.", "La abolición de la esclavitud en Estados Unidos", "La independencia de América Latina", "La caída del Imperio Romano"],
        correct: 0
    },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;

// Función para barajar un array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

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
    shuffle(questions); // Baraja las preguntas antes de empezar
    showQuestion();
});
