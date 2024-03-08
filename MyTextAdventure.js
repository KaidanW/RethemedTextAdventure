// Text Adventure Game
const start = `Welcome to the Backrooms Text Adventure Game. Click 'OK' to start the game.`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const q1 = `You have noclipped into the backrooms and you need to escape, Should you...
1. Stay calm and think of a strategy.
OR
2. Starting running as fast as you can.
${enter}`;

const gameOver1 = `You become incredibly lost and get taken by the bacteria. Game Over. ${gameOver}`;

const q2 = `You think of two possible plans. Which is safer?
1. Put your hand on a wall and follow it.
OR
2. Get into the ceiling and follow the lights wiring to the exit.
${enter}`;

const gameOver2 = `You become lost and confused in the ceiling and get stuck forever. Game Over. ${gameOver}`;

const q3 = `You come to the end of the wall and find a white tiled room with pools. Should you...
1. Ignore the hallway and keep going.
OR
2. Enter the Poolrooms.
${enter}`;

const gameOver3 = `You come in contact with the bacteria and cannot outrun it. Game Over. ${gameOver}`;

const q4 = `You have entered the Poolrooms and can safely rest. Should you...
1. Rest on the side.
OR
2. Relax in the pools.
${enter}`;

const gameOver4 = `The pool starts to drain quickly and you become stuck. Game Over. ${gameOver}`;

const q5 = `You rest up and start to explore the Poolrooms again when you find a dark hallway with a light at the end. Should you...
1. Ingore the light and keep exploring.
OR
2. Go down the hallway and into the light.
${enter}`;

const gameOver5 = `You walk away and never find the exit of The Backrooms. Game Over. ${gameOver}`;

const win = `The light was an exit and you safely escaped The Backrooms!`;

// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput = prompt(q1);

// NESTED CONDITIONAL STATEMENTS
// 1ST Conditional Statement
// NOTE: Prompts return the value entered as a string. That is why double equals == is used instead of triple equals (AKA Strict Equality)
if (userInput == 1){
  userInput = prompt(q2);

  // 2ND Conditional Statement
  if (userInput == 1){
    userInput = prompt(q3);

    // 3RD Conditional Statement
    if (userInput == 2){
      userInput = prompt(q4);

      // 4TH Conditional Statement
      if (userInput == 1){
        userInput = prompt(q5);

        // 5TH Conditional Statement
        if (userInput == 2){
          alert(win);
        } else {
          alert(gameOver5);
        }

      } else {
        alert(gameOver4);
      }

    } else {
      alert(gameOver3);
    }

  } else {
    alert(gameOver2);
  }

} else {
  alert(gameOver1);
}