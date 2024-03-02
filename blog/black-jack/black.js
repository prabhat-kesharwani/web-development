let player = {
    name: "Ali",
    chips: 145,
  };
  let cards = [];
  let sum = 0;
  let hasBlackJack = false;
  let isAlive = false;
  let message = "";
  let messageEl = document.getElementById("message-el");
  let sumEl = document.querySelector("#sum-el");
  let cardEl = document.querySelector("#cards-el");
  let playerEl = document.getElementById("player-el");
  playerEl.textContent = player.name + ": $" + player.chips;
  
  function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
      return 11;
    } else if (randomNumber > 10) {
      return 10;
    } else {
      return randomNumber;
    }
  }
  
  function startGame() {
    let firstcard = getRandomCard();
    let secondcard = getRandomCard();
    cards = [firstcard, secondcard];
    sum = firstcard + secondcard;
    isAlive = true;
    renderGame();
  }
  
  function renderGame() {
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
      cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
      message = "Do you want to draw a new card?";
    } else if (sum === 21) {
      message = "You have BlackJack!!!";
      hasBlackJack = true;
    } else {
      message = "You are out :c ";
      isAlive = false;
    }
    messageEl.textContent = message;
  }
  
  function newCard() {
    if (isAlive === true && hasBlackJack === false) {
      let thirdcard = getRandomCard();
      sum += thirdcard;
      cards.push(thirdcard);
      renderGame();
    }
  }
  
  function restartGame() {
    message = "Want to play a new round?";
    cardEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
    messageEl.textContent = message;
  }
  