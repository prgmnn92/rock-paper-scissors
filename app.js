let rulesBtn = document.getElementById("rules");
let modal = document.getElementById("modal");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let playerRock = document.getElementById("player-rock");
let playerPaper = document.getElementById("player-paper");
let playerScissors = document.getElementById("player-scissors");

let houseRock = document.getElementById("house-rock");
let housePaper = document.getElementById("house-paper");
let houseScissors = document.getElementById("house-scissors");

let container = document.getElementById("container");
let game = document.getElementById("game");

let replay = document.getElementById("play-again");

let result = document.getElementById("result");

let scoreDisplay = document.getElementById("score");
let score = 0;

let playerId = 0;
let houseId = 0;

replay.addEventListener("click", () => {
  container.style.display = "block";
  game.style.opacity = "0";
  playerRock.style.display = "none";
  playerPaper.style.display = "none";
  playerScissors.style.display = "none";
  houseRock.style.display = "none";
  housePaper.style.display = "none";
  houseScissors.style.display = "none";
});

rulesBtn.addEventListener("click", () => {
  modal.classList.toggle("show");
});

modal.addEventListener("click", () => {
  modal.classList.toggle("show");
});

rock.addEventListener("click", () => {
  playerId = 1;
  container.style.display = "none";
  game.style.opacity = "1";
  playerRock.style.display = "block";
  playerRock.style.backgroundPosition = "center";
  playerRock.style.backgroundRepeat = "no-repeat";
  setHouseBtn();
  evalResult();
  scoreDisplay.innerHTML = score.toString();
});

paper.addEventListener("click", () => {
  playerId = 2;
  container.style.display = "none";
  game.style.opacity = "1";
  playerPaper.style.display = "block";
  playerPaper.style.backgroundPosition = "center";
  playerPaper.style.backgroundRepeat = "no-repeat";
  setHouseBtn();
  evalResult();
  scoreDisplay.innerHTML = score.toString();
});

scissors.addEventListener("click", () => {
  playerId = 3;
  container.style.display = "none";
  game.style.opacity = "1";
  playerScissors.style.display = "block";
  playerScissors.style.backgroundPosition = "center";
  playerScissors.style.backgroundRepeat = "no-repeat";

  setHouseBtn();
  evalResult();
  scoreDisplay.innerHTML = score.toString();
});

const setHouseBtn = () => {
  let val = Math.floor(Math.random() * 3) + 1;

  console.log(val);

  switch (val) {
    case 1:
      houseId = 1;
      houseRock.style.display = "block";
      houseRock.style.backgroundPosition = "center";
      houseRock.style.backgroundRepeat = "no-repeat";
      break;
    case 2:
      houseId = 2;
      housePaper.style.display = "block";
      housePaper.style.backgroundPosition = "center";
      housePaper.style.backgroundRepeat = "no-repeat";
      break;
    case 3:
      houseId = 3;
      houseScissors.style.display = "block";
      houseScissors.style.backgroundPosition = "center";
      houseScissors.style.backgroundRepeat = "no-repeat";
      break;
  }
};

evalResult = () => {
  //1 = rock, 2 = paper, 3 = scissors

  if (playerId === houseId) {
    //draw!
    result.innerHTML = "IT`S A DRAW";
    return null;
  }

  if (playerId === 1) {
    if (houseId === 2) {
      //LOSE
      result.innerHTML = "YOU LOSE";
      return null;
    }
    if (houseId === 3) {
      //WIN
      result.innerHTML = "YOU WIN";
      score += 1;
      return null;
    }
  }

  if (playerId === 2) {
    if (houseId === 1) {
      //WIN
      result.innerHTML = "YOU WIN";
      score += 1;
      return null;
    }
    if (houseId === 3) {
      //LOSE
      result.innerHTML = "YOU LOSE";
      return null;
    }
  }

  if (playerId === 3) {
    if (houseId === 1) {
      //LOSE
      result.innerHTML = "YOU LOSE";
      return null;
    }
    if (houseId === 2) {
      //WIN
      result.innerHTML = "YOU WIN";
      score += 1;
      return null;
    }
  }
};

console.log("ID", rock.id);
