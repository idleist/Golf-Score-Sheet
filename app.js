// Global Variables - Document Elements

const inputDetailsBtn = document.getElementById("inputbutton");
const toggleP1 = document.getElementById("player1button");
const toggleP2 = document.getElementById("player2button");
const playerOneName = document.getElementById("player1name");
const playerTwoName = document.getElementById("player2name");
const courseName = document.getElementById("heading");
const playerOneScore = document.getElementById("player1Score");
const playerTwoScore = document.getElementById("player2Score");
const playerOnePar = document.getElementById("player1Par");
const playerTwoPar = document.getElementById("player2Par");
const inputDetails = document.getElementById("inputDetails");
const inputCourse = document.getElementById("inputCourse");
const inputPlayerOne = document.getElementById("inputPlayerOne");
const inputPlayerTwo = document.getElementById("inputPlayerTwo");
const scorecard1 = document.getElementById("scoreBody1");
const scorecard2 = document.getElementById("scoreBody2");
const icon = document.querySelector(".far");

// Add up the scores from the scoreboard
const scores = document.querySelectorAll(".score");
const pars = document.querySelectorAll("input[type='radio']");

// Add event listeners
scores.forEach(function(score) {
  score.addEventListener("input", addScore);
});

pars.forEach(function(par) {
  par.addEventListener("change", addScore);
});

// Dynamically update scores and par

// Adds up the score and inputs into scorecard
function addScore(e) {
  let shots1 = 0;
  let shots2 = 0;
  let parshot1 = 0;
  let parshot2 = 0;
  scores.forEach(function(score) {
    if (score.parentElement.parentElement.parentElement.id === "scoreBody1") {
      shots1 += Number(score.value);
    }
    if (score.parentElement.parentElement.parentElement.id === "scoreBody2") {
      shots2 += Number(score.value);
    }
  });

  // Adds or subtracts the score based on par of the hole
  pars.forEach(function(par) {
    if (
      par.checked === true &&
      par.parentElement.parentElement.children[2].value > 0
    ) {
      if (
        par.parentElement.parentElement.parentElement.parentElement.id ===
        "scoreBody1"
      ) {
        parshot1 +=
          Number(par.parentElement.parentElement.children[2].value) -
          Number(par.value);
      }
      if (
        par.parentElement.parentElement.parentElement.parentElement.id ===
        "scoreBody2"
      ) {
        parshot2 +=
          Number(par.parentElement.parentElement.children[2].value) -
          Number(par.value);
      }
    }
  });
  playerOneScore.innerText = String(shots1);
  playerTwoScore.innerText = String(shots2);
  playerOnePar.innerText = String(parshot1);
  playerTwoPar.innerText = String(parshot2);
}

// Input Details
inputDetailsBtn.addEventListener("click", addName);

function addName(e) {
  inputDetails.classList.toggle("display");
}

inputPlayerOne.addEventListener("input", function(e) {
  playerOneName.innerText = e.target.value;
});
inputPlayerTwo.addEventListener("input", function(e) {
  playerTwoName.innerText = e.target.value;
});
inputCourse.addEventListener("input", function(e) {
  courseName.innerText = e.target.value;
});

toggleP1.addEventListener("click", function(e) {
  if (!scorecard2.classList.contains("display")) {
    scorecard2.classList.add("display");
  }
});
toggleP2.addEventListener("click", function(e) {
  if (scorecard2.classList.contains("display")) {
    scorecard2.classList.remove("display");
  }
});

icon.addEventListener("click", addName);
