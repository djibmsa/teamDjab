document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("active");
  });

// Tableau contenant les questions du quiz
const questions = [
    {
        question: "Quelle est la signification de l'acronyme sportif: NBA ?",
        answer: ["National Basketball American", "National Basketball Association", "National Basketball Action", "National Basketball Award"],
        correct: "National Basketball Association",
    },
    {
        question: "Une franchise NBA n'est pas située aux États-Unis, dans quel pays se situe-t-elle ?",
        answer: ["Mexique", "Australie", "Canada", "Puerto Rico"],
        correct: "Canada",
    },
    {
        question: "Depuis 2004, combien d'équipes de basket s'affrontent en NBA ?",
        answer: ["26", "30", "34", "40"],
        correct: "30",
    },
    {
        question: "Quel joueur a marqué le plus de points dans l'histoire de la NBA ?",
        answer: ["LeBron James", "Michael Jordan", "Kobe Bryant", "Kareem-Abdul-Jabbar"],
        correct: "LeBron James",
    },
    {
        question: "Combien y a-t-il de matchs au total sur une saison régulière en NBA ?",
        answer: ["42", "54", "70", "82"],
        correct: "82",
    },
    {
        question: "Combien de temps dure un match de basket en NBA ?",
        answer: ["40 minutes", "44 minutes", "48 minutes", "50 minutes"],
        correct: "48 minutes",
    },
    {
        question: "Quel joueur détient le record de points marqués dans un match NBA avec un total de 100 points ?",
        answer: ["LeBron James", "Michael Jordan", "Wilt Chamberlain", "Luka Doncic"],
        correct: "Wilt Chamberlain",
    },
    {
        question: "Comment se nomment les matchs éliminatoires de NBA organisés en quatre tours ?",
        answer: ["Les Playoffs", "Les Play-In", "Les Post-Season", "Les Finals"],
        correct: "Les Playoffs",
    },
    {
        question: "Quel joueur est représenté dans le logo iconique de la NBA ?",
        answer: ["Kobe Bryant", "Bill Russell", "Bill Walton", "Jerry West"],
        correct: "Jerry West",
    },
    {
        question: "Quelle est l'équipe NBA emblématique de Los Angeles ?",
        answer: ["Spurs", "Lakers", "Hawks", "Nuggets"],
        correct: "Lakers",
    },
    {
        question: "Comment se nomme le stade dans lequel évolue l'équipe de basket des New York Knicks ?",
        answer: ["Staples Center", "Madison Square", "Rockefeller Center", "Capital One Arena"],
        correct: "Madison Square",
    },
    {
        question: "Quel joueur de basket détient le record de titres de champion NBA ?",
        answer: ["Michael Jordan", "Robert Horry", "Bill Russell", "Sam Jones"],
        correct: "Bill Russell",
    },
    {
        question: "Laquelle de ces équipes NBA n'existe pas ?",
        answer: ["Minnesota Timberwolves", "Phoenix Suns", "Rochefeller Center", "Baltimore Cheyenne"],
        correct: "Baltimore Cheyenne",
    },
    {
        question: "Quelle est la première équipe NBA à qui l'on donne le nom de: BAD BOYS ?",
        answer: ["New York Knicks", "Boston Celtics", "Detroit Pistons", "Miami Heat"],
        correct: "Detroit Pistons",
    },
    {
        question: "Qui est considéré comme le meilleur meneur de l'histoire de la NBA ?",
        answer: ["Magic Johnson", "Stephen Curry", "John Stockton", "Steve Nash"],
        correct: "Magic Johnson",
    },
];


let currentQuestionIndex = 0; // Index de la question actuelle
let score = 0; // Score de l'utilisateur

// Sélectionner les éléments du DOM
const questionElement = document.querySelector('.quest_quizz');
const answerButtons = document.querySelectorAll('.quest_group');
const validateButton = document.querySelector('.btn_validate');

// Initialisation du quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

// Afficher la question suivante
function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

// Afficher la question et les réponses
function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.forEach((button, index) => {
        button.innerText = question.answer[index];
        button.classList.remove('correct', 'incorrect'); // Réinitialise les boutons
        button.disabled = false;
    });
    validateButton.disabled = true; // Désactive le bouton Valider au début
}

// Réinitialiser l'état des boutons
function resetState() {
    validateButton.innerText = "Valider";
    validateButton.disabled = true;
}

// Vérifier la réponse
answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectAnswer(button);
    });
});

function selectAnswer(selectedButton) {
    const selectedAnswer = selectedButton.innerText;
    const correctAnswer = questions[currentQuestionIndex].correct;

    if (selectedAnswer === correctAnswer) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
    }

    answerButtons.forEach(button => {
        button.disabled = true; // Désactiver tous les boutons après sélection
    });

    validateButton.disabled = false; // Activer le bouton Valider
}

// Passer à la question suivante ou terminer le quiz
validateButton.addEventListener('click', () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        endQuiz();
    }
});

// Fin du quiz et affichage du score
function endQuiz() {
    questionElement.innerText = `Quiz terminé ! Vous avez obtenu ${score} sur ${questions.length}.`;
    validateButton.innerText = "Recommencer";
    validateButton.addEventListener('click', startQuiz);
}

// Démarrage du quiz
startQuiz();
