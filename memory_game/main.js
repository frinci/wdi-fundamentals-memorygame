// console.log("User flipped " + cardOne)
// console.log("User flipped " + cardFour)
let cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },

  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },

  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },

  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

let cardsInPlay = [];

let cardOne = cardsInPlay[0];

function checkForMatch(){
  src.setAttribute(cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!")
    } else {alert("Sorry, try again.")}
  }
};

 function flipCard(){
   let cardId = this.getAttribute('data-id', cards[i]);
   console.log("User flipped " + cards[cardId].rank + ".")
   cardsInPlay.push(cards[cardId].rank)
   console.log(cards[cardId].cardImage)
   console.log(cards[cardId].suit)

   checkForMatch()
 };

 function createBoard(){
   for (let i = 0; i < cards.length; i++) {
     let cardElement = document.createElement('img');
     cardElement.setAttribute("src", "images/back.png");
     cardElement.setAttribute("data-id", cards[i]);
     document.addEventListener('click', flipCard)
     document.cardElement.appendChild("game-board")
   }
 }

createBoard()
