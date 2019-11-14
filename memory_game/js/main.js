
console.log("Up and running!");
// var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
console.log(cardsInPlay);

// This is Array Object 
const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images / queen - of - hearts.png"
	},
	{
		rank: "queen",
		suit: "diamand",
		cardImage: "images / queen - of - dimonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images / king - of - hearts.png"
	},

	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images / king - of - dimonds.png"
	}

];

// this is function 
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
	// Display Rank 
	console.log("User flipped--" + cards[cardId].rank);
	// Display Image 
	console.log("Image --" + cards[cardId].cardImage);
	//	Display Suit 
	console.log("suit--" + cards[cardId].suit);

	if (cardsInPlay.length === 3) {
		checkForMatch();
		if (cardsInPlay[1] === cardsInPlay[2]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again");
		}
	}
}

flipCard(0);
flipCard(2); 
 
