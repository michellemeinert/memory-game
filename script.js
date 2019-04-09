const cards = document.querySelectorAll('.card');

let firstCardSelected = false;
let lockBoard = false; 
let firstCard;
let secondCard;

function flipCard () {
 if (lockBoard) {
   return;
 }
if (firstCard === this) {
  return;
}
 this.classList.add('flip');

 // first card 
  if (firstCardSelected === false) {
   firstCardSelected = true;
   firstCard = this;
   return;
 }
 //secondCard
 secondCard = this;
 lockBoard = true;

 checkForMatch();

 }

function checkForMatch () {
  let isMatch = firstCard.dataset.cardvalue === secondCard.dataset.cardvalue;
  if (isMatch) {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
    resetBoard();
    return;
  }
  //unflip cards
  setTimeout( function () {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    // resetBoard;
    resetBoard();
   }, 1500)
}


 // reset board 
 function resetBoard () {
 firstCardSelected = false;
 lockBoard = false;
 firstCard = null;
 secondCard = null;
 return;
 }


cards.forEach( function (element) {
 element.addEventListener('click', flipCard);
})

