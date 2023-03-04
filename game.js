const levels = [10, 50, 100, 200, 500];
const messages = [
  "Too high! Enter a new guess, or type q to quit.",
  "Too low! Enter a new guess, or type q to quit."
];

let PLAYER_NAME = prompt("Hi there. Kindly tell us your name.");
while (!PLAYER_NAME) {
  PLAYER_NAME = prompt("We need your name to proceed with the game.");
}

alert(`Hi ${PLAYER_NAME}! Welcome and thank you for playing my guessing game!`);

let currentLevel = 0;
let userLevel = 0;
let totalAttempts = 0;
while (!levels.includes(userLevel)) {
  let userGuess=prompt("Enter the highest number. You can choose: 10, 50, 100, 200 or 500");
  userLevel=parseInt(userGuess);

}
currentLevel = levels.indexOf(userLevel)
while (currentLevel < levels.length) {
  let maximum = levels[currentLevel];
  let targetNum = Math.floor(Math.random() * maximum) + 1;
  let guess = prompt("Enter your first guess!");

  // Check if the user entered 'q' to quit the game
  if (guess === "q") {
    alert("OK. BYE");
    break;
  }

  // Convert the guess to a number and make sure it's valid
  guess = parseInt(guess);
  while (isNaN(guess)) {
    guess = prompt("Enter a valid guess!");
  }

  let attempts = 1;

  while (guess !== targetNum) {
    if (guess === "q") {
      alert("OK. BYE");
      break;
    }

    attempts++;
    totalAttempts++;

    if (guess > targetNum) {
      guess = prompt(messages[0]);
    } else {
      guess = prompt(messages[1]);
    }

    // Check if the user entered 'q' to quit the game
    if (guess === "q") {
      alert("OK. BYE");
      break;
    }

    // Convert the guess to a number and make sure it's valid
    guess = parseInt(guess);
    while (isNaN(guess)) {
      guess = prompt("Enter a valid guess!");
    }
  }

  if (guess === "q") {
    break;
  } else {
    currentLevel++;
    alert(`You got it ${PLAYER_NAME}! It took you ${attempts} guess(es).`);
  }
}

alert(`Thanks for playing, ${PLAYER_NAME}. You reached level ${currentLevel} in ${totalAttempts} attempt(s).`);