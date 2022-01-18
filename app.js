// GLOBALS
const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";
const MOVES = [ROCK, PAPER, SCISSOR];
let USER_SCORE = 0;
let COMPUTER_SCORE = 0;
let DRAWS = 0;

// Fetching DOM elements
const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorButton = document.getElementById("scissorBtn");
const handDiv = document.querySelector(".hand__container");
const userImage = document.getElementById("userImage");
const computerImage = document.getElementById("computerImage");
const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");
const draws = document.getElementById("draw");

// Function to update score
const updateScore = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    DRAWS = DRAWS + 1;
    draws.innerText = DRAWS;
  } else if (userChoice === ROCK && computerChoice === SCISSOR) {
    USER_SCORE = USER_SCORE + 1;
    userScore.innerText = USER_SCORE;
  } else if (userChoice === ROCK && computerChoice === PAPER) {
    COMPUTER_SCORE = COMPUTER_SCORE + 1;
    computerScore.innerText = COMPUTER_SCORE;
  } else if (userChoice === PAPER && computerChoice === ROCK) {
    USER_SCORE = USER_SCORE + 1;
    userScore.innerText = USER_SCORE;
  } else if (userChoice === PAPER && computerChoice === SCISSOR) {
    COMPUTER_SCORE = COMPUTER_SCORE + 1;
    computerScore.innerText = COMPUTER_SCORE;
  } else if (userChoice === SCISSOR && computerChoice === PAPER) {
    USER_SCORE = USER_SCORE + 1;
    userScore.innerText = USER_SCORE;
  } else if (userChoice === SCISSOR && computerChoice === ROCK) {
    COMPUTER_SCORE = COMPUTER_SCORE + 1;
    computerScore.innerText = COMPUTER_SCORE;
  }
};

// Function to create computer's move
const generateMove = (userChoice) => {
  const randIndex = Math.floor(Math.random() * MOVES.length);
  if (MOVES[randIndex] === ROCK) {
    computerImage.setAttribute("src", "./images/computer-rock.png");
  } else if (MOVES[randIndex] === PAPER) {
    computerImage.setAttribute("src", "./images/computer-paper.png");
  } else {
    computerImage.setAttribute("src", "./images/computer-scissor.png");
  }
  updateScore(userChoice, MOVES[randIndex]);
};

// Adding click event listener on rock button
rockButton.onclick = () => {
  userImage.setAttribute("src", "./images/user-rock.png");
  computerImage.setAttribute("src", "./images/computer-rock.png");
  handDiv.classList.add("animate");
  setTimeout(() => {
    userImage.setAttribute("src", "./images/user-rock.png");
    generateMove(ROCK);
    handDiv.classList.remove("animate");
  }, 1500);
};

// Adding click event listener on paper button
paperButton.onclick = () => {
  userImage.setAttribute("src", "./images/user-rock.png");
  computerImage.setAttribute("src", "./images/computer-rock.png");
  handDiv.classList.add("animate");
  setTimeout(() => {
    userImage.setAttribute("src", "./images/user-paper.png");
    generateMove(PAPER);
    handDiv.classList.remove("animate");
  }, 1500);
};

// Adding click event listener on scissor button
scissorButton.onclick = () => {
  userImage.setAttribute("src", "./images/user-rock.png");
  computerImage.setAttribute("src", "./images/computer-rock.png");
  handDiv.classList.add("animate");
  setTimeout(() => {
    userImage.setAttribute("src", "./images/user-scissor.png");
    generateMove(SCISSOR);
    handDiv.classList.remove("animate");
  }, 1500);
};
