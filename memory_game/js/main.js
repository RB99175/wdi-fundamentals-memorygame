console.log("Up and running!");
var cards = ["queen", "queen", "king" , "king"];
var cardsInPlay = [];
var cardOne = 'queen';
cardsInPlay.push('cardOne');
var cardTwo = 'king';
cardsInPlay.push('cardTwo');

var cardThree = 'king';
cardsInPlay.push('cardTwo');

console.log(cardsInPlay);

if(cardsInPlay.length === 3){ 
	if (cardsInPlay[1] === cardsInPlay[2]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
 }



 


