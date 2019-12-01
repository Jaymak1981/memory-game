console.log("Up and running!");


var cards = ["Queen", "King", "Queen", "King"];

var cardsInPlay = [];

var cardOne = cards[0];

var cardTwo = cards[1];

function flipcard(cardId) {
	flipCard(0);
	flipCard(2);

console.log("User flipped" + cards[cardId]);
cardsInPlay.push(cards[cardId].rank);
}

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]); {
		alert("You found a match!")
	} else {
		alert("Sorry, try again.")
	}
}

function flipCard(cardId) {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]); {
		alert("You found a match!")
	} else {
		alert("Sorry, try again.")
	}
}
}

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImages: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImages: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImages: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImages: "images/king-of-diamonds.png"
}
];

function createBoard() {
	for (var i = 0; i < createBoard.length; i++) {

	}
}

function createElement() {
	var newListItem = document.createElement("images/queen-of-hearts.png");
	var newListItem = document.createElement("images/queen-of-diamonds.png");
	var newListItem = document.createElement("images/king-of-hearts.png");
	var newListItem = document.createElement("images/king-of-diamonds.png");
}






















