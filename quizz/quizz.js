document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("active");
});

// Tableau contenant les questions du quiz
const questions = [
  {
    question: "Quelle est la signification de l'acronyme sportif: NBA ?",
    answer: [
      "National Basketball American",
      "National Basketball Association",
      "National Basketball Action",
      "National Basketball Award",
    ],
    correct: "National Basketball Association",
    image: "/assets/picture/stern.webp",
  },
  {
    question:
      "Une franchise NBA n'est pas située aux États-Unis, dans quel pays se situe-t-elle ?",
    answer: ["Mexique", "Australie", "Canada", "Puerto Rico"],
    correct: "Canada",
    image: "/assets/picture/vince-carter-dunk.webp", // Correction du .webb en .webp
  },
  {
    question: "Depuis 2004, combien d'équipes de basket s'affrontent en NBA ?",
    answer: ["26", "30", "34", "40"],
    correct: "30",
    image: "/assets/picture/stern.webp",
  },
  {
    question:
      "Quel joueur a marqué le plus de points dans l'histoire de la NBA ?",
    answer: [
      "LeBron James",
      "Michael Jordan",
      "Kobe Bryant",
      "Kareem-Abdul-Jabbar",
    ],
    correct: "LeBron James",
    image: "/assets/picture/vince-carter-dunk.webp", // Correction du .webb en .webp
  },
  // Ajout du reste des questions avec le même format et corrections des extensions d'image
  {
    question:
      "Quel joueur détient le record de points marqués dans un match NBA avec un total de 100 points ?",
    answer: [
      "LeBron James",
      "Michael Jordan",
      "Wilt Chamberlain",
      "Luka Doncic",
    ],
    correct: "Wilt Chamberlain",
    image: "/assets/picture/stern.webp",
  },
  // Autres questions...
];

let currentQuestionIndex = 0; // Index de la question actuelle
let score = 0; // Score de l'utilisateur

// Sélectionner les éléments du DOM
const questionElement = document.querySelector(".quest_quizz");
const answerButtons = document.querySelectorAll(".quest_group");
const validateButton = document.querySelector(".btn_validate");
const imgElement = document.querySelector("img.stern"); // Correction pour manipuler l'image

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
    button.classList.remove("correct", "incorrect"); // Réinitialise les boutons
    button.disabled = false;
  });
  validateButton.disabled = true; // Désactive le bouton Valider au début

  // Mise à jour de l'image pour la question actuelle
  if (question.image) {
    imgElement.src = question.image;
  } else {
    imgElement.src = "/assets/picture/default-image.webp"; // Image par défaut si aucune n'est fournie
  }
}

// Réinitialiser l'état des boutons
function resetState() {
  validateButton.innerText = "Valider";
  validateButton.disabled = true;
}

// Vérifier la réponse
answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectAnswer(button);
  });
});

function selectAnswer(selectedButton) {
  const selectedAnswer = selectedButton.innerText;
  const correctAnswer = questions[currentQuestionIndex].correct;

  if (selectedAnswer === correctAnswer) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }

  answerButtons.forEach((button) => {
    button.disabled = true; // Désactiver tous les boutons après sélection
  });

  validateButton.disabled = false; // Activer le bouton Valider
}

// Passer à la question suivante ou terminer le quiz
validateButton.addEventListener("click", () => {
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
  validateButton.addEventListener("click", startQuiz);
}

// Démarrage du quiz
startQuiz();
