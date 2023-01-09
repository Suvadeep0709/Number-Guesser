let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);
const compareGuesses = (userGuess, computerGuess, secret) => {
  let user = Math.abs(userGuess - secret);
  let computer = Math.abs(computerGuess - secret);
  if (user < computer) return true;
  if (user > computer) return false;
  if (user === computer) return true;
};
const updateScore = string => {
  if (string === 'human') humanScore++;
  if (string === 'computer') computerScore++;
};
const advanceRound = () => {
  currentRoundNumber++;
};


