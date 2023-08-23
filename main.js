let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loose: 0,
  draw: 0,
};

updateScoreElement();

// if(score=== null){
//   score = {
//     win : 0,
//     loose : 0,
//     draw : 0
//   }
// }

document.querySelector('.js-rock-btn').addEventListener('click',() =>{
  ourResult('Rock');
});
document.querySelector('.js-paper-btn').addEventListener('click',() =>{
  ourResult('Paper');
});
document.querySelector('.js-scissors-btn').addEventListener('click',() =>{
  ourResult('Scissors');
});

document.body.addEventListener('keydown',(event) =>{
  if(event.key==='r'){
    ourResult('Rock');
  }else if(event.key==='p'){
    ourResult('Paper');
  }else if(event.key === 's'){
    ourResult('Scissors');
  }
})

function compFunc() {
  let computerMov = "";
  const randomNum = Math.random();

  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMov = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMov = "paper";
  } else if (randomNum >= 2 / 3 && randomNum < 3 / 3) {
    computerMov = "Scissors";
  }
  return computerMov;
}

function ourResult(playerMov) {
  let computerMov = compFunc();
  let result = "";

  if (playerMov === "Scissors") {
    if (computerMov === "rock") {
      result = "You Loose";
    } else if (computerMov === "paper") {
      result = "You Win";
    } else {
      result = "Match Tie";
    }
  } else if (playerMov === "Rock") {
    if (computerMov === "rock") {
      result = "Match Tie";
    } else if (computerMov === "paper") {
      result = "You Loose";
    } else {
      result = "You Win";
    }
  } else {
    if (computerMov === "rock") {
      result = "You Win";
    } else if (computerMov === "paper") {
      result = "Match Tie";
    } else {
      result = "You Loose";
    }
  }

  if (result === "You Win") {
    score.win += 1;
  } else if (result === "You Loose") {
    score.loose += 1;
  } else if (result === "Match Tie") {
    score.draw += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="image/${playerMov}-emoji.png" class="move-icon" ><img src="image/${computerMov}-emoji.png" class="move-icon">Computer`;

  return result;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.win}, loose: ${score.loose}, Ties: ${score.draw}`;
}

function updateResultElement() {}
