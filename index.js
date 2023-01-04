let player = {
    name: "Maureen",
    chips: 900
}


let sum = 0
let message = ""
let isAlive = false
let hasBlackJack = false
let cards = []
// changing sum to 0 and the cards array to an empty array makes the card start at complete 0 so the player totally draws a new card

document.getElementById("para-el").textContent = player.name + ":  $" + player.chips

function startGame(){
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
      renderGame()
}

function renderGame(){
    // this for loops makes the cards array most especially the new cards we push show on the screen not just
    // summing it and the trigger is the  += cards[i]. to make the cards appear normal not in twos the the 
    // document. ---- "Cards: " then another document.--- += cards[i + " "]


    document.getElementById("cards-el").textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){

    document.getElementById("cards-el").textContent +=  cards[i] + " "
}

document.getElementById("sum-el").textContent = "Sum: " + sum

// to make the text change on the round-el paragraph after the if statement what actually 
// triggers it is the dpcument.--- = message this makes the message show
if (sum <= 20){
    message = "Do you want to draw another card?"
    isAlive = true
} else if (sum === 21) {
   message = "woohoo! you've got Black jack!"
   hasBlackJack = true
} else{
   message =  "You're out of the game!"
   isAlive = false
}
document.getElementById("round-el").textContent = message

}


// this helps us generate a random number from 1 to 13 and we did the if statement because theres no 
// 11, 12, 13 on standard cards and normally card 1(ace) equates to 11 hence it'll retuen only the numbers apart from them

function randomCard(){
let randomNumber = Math.floor(Math.random() * 13) + 1

if(randomNumber > 10){
    return 10
}else if(randomNumber === 1){
    return 11
} else{
    return randomNumber
}
}


function newCard(){
    //th if statemnet will stop user from drawing a new card if they've gotten black jack(won) or
    //if their cards sum number are higer than 21

    if(isAlive === true && hasBlackJack === false){
    let card = randomCard()
    sum += card
    cards.push(card)

    //calling rendergame function here makes the new card button play or start
    renderGame()
} }