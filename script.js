const quizData = [
    {
        question: "Как вы воспринимаете изменения в жизни?",
        options: [
            { text: "Легко приспосабливаюсь к новому", element: "Кислород (O)" },
            { text: "Воспринимаю с осторожностью, но могу адаптироваться", element: "Углерод (C)" },
            { text: "Люблю стабильность, изменения — это стресс", element: "Железо (Fe)" },
            { text: "Инициирую изменения сам(а)", element: "Уран (U)" },
        ],
    },
    {
        question: "Какой цвет вам ближе?",
        options: [
            { text: "Синий — спокойствие и глубина", element: "Ртуть (Hg)" },
            { text: "Красный — энергия и страсть", element: "Фтор (F)" },
            { text: "Зелёный — гармония и природа", element: "Неон (Ne)" },
            { text: "Золотой — роскошь и ценность", element: "Золото (Au)" },
        ],
    },
    // Добавьте больше вопросов здесь
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
let currentQuestion = 0;
let score = {};

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    const questionHTML = `
        <div class="question">
            <h3>${questionData.question}</h3>
            <div class="options">
                ${questionData.options
                    .map(
                        (option, index) => `
                    <button onclick="selectOption(${index})">${option.text}</button>
                `
                    )
                    .join("")}
            </div>
        </div>
    `;
    quizContainer.innerHTML = questionHTML;
}

function selectOption(index) {
    const selectedElement = quizData[currentQuestion].options[index].element;
    score[selectedElement] = (score[selectedElement] || 0) + 1;
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const topElement = Object.keys(score).reduce((a, b) =>
        score[a] > score[b] ? a : b
    );
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultContainer.innerHTML = <h2>Ваш элемент: ${topElement}</h2>;
}

{
    question: "Как вы предпочитаете отдыхать?",
    options: [
        { text: "На природе", element: "Кислород (O)" },
        { text: "С друзьями", element: "Неон (Ne)" },
        { text: "Наедине с собой", element: "Аргон (Ar)" },
        { text: "В творческом процессе", element: "Литий (Li)" },
    ],
},

loadQuestion();