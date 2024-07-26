function startGame() {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);
  let firstDicee = document.querySelector(".img1");
  let secondDicee = document.querySelector(".img2");
  let winner = document.querySelector("h1");

  switch (randomNumber1) {
    case 1:
      firstDicee.setAttribute("src", "images/dice1.png");
      break;
    case 2:
      firstDicee.setAttribute("src", "images/dice2.png");
      break;
    case 3:
      firstDicee.setAttribute("src", "images/dice3.png");
      break;
    case 4:
      firstDicee.setAttribute("src", "images/dice4.png");
      break;
    case 5:
      firstDicee.setAttribute("src", "images/dice5.png");
      break;
    case 6:
      firstDicee.setAttribute("src", "images/dice6.png");
      break;
  }

  switch (randomNumber2) {
    case 1:
      secondDicee.setAttribute("src", "images/dice1.png");
      break;
    case 2:
      secondDicee.setAttribute("src", "images/dice2.png");
      break;
    case 3:
      secondDicee.setAttribute("src", "images/dice3.png");
      break;
    case 4:
      secondDicee.setAttribute("src", "images/dice4.png");
      break;
    case 5:
      secondDicee.setAttribute("src", "images/dice5.png");
      break;
    case 6:
      secondDicee.setAttribute("src", "images/dice6.png");
      break;
  }

  if (randomNumber1 > randomNumber2) {
    winner.innerHTML = "🚩Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    winner.innerHTML = "Player 2 wins!🚩";
  } else {
    winner.innerHTML = "Roll again";
  }
}

document.querySelector(".start").onclick = startGame;
