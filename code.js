//const gameHolder = document. getElementById("game");
//console.log(gameHolder)

//create a card function

//add that single card to the page

//add eventListener to the card and have it do something

//use the function to make several cards

//graphics

//valid site on GH

//record and display high score

//animations

const button = document.querySelector("#deal", getACard())
button.addEventListener('click',func)

const button = document.querySelector("#hit", getACard())
button.addEventListener('click',func)

const button = document.querySelector("#stand", COMPUTER();determineWinner())
button.addEventListener('click',func)

const button = document.querySelector("#quit")
button.addEventListener('click',func)

function getTheSuit(){

    suit = Math.floor(Math.random() * 4) + 1
    if (suit == 1) {
        return "Hearts";
    }
    if (suit == 2) {
        return "Diamonds";
    }
    if (suit == 3) {
        return "Spades";
    }
    if (suit == 4) {
        return "Diamonds";
    }
}

function getACard(turn) {
    card = Math.floor(Math.random() * 13) + 1
    suit = getTheSuit();
    if (card ==1) {
        return 11;
    }
    if (card > 10){
        return 10;
    }
    return card;
}
let counter = 0;

function GenerateNewCard(){
    counter ++;
    let d = document.getElementsByClassName("HUM").innerHTML = "";
    let e = document.getElementsByClassName("COMP").innerHTML = "";
    let f = document.getElementsByClassName("COUNT").innerHTML = counter;
    let a = parseInt(document.getElementsByClassName("dealeris").value = 0);
    let res = document.getElementsByClassName("dealeris");
    let aa = parseInt(document.getElementsByClassName("youare").value = 0);
    let resa = document.getElementsByClassName("youare");
    resa.value = a+ getACard("You");
    res.value = aa + getACard("Dealer");
}

function COMPUTER(){
    let a = parseInt(document.getElementsByClassName("dealeris").value);
    let res = document.getElementsByClassName("dealeris";
    while(res.value<17) {
        let b = parseInt(document.getElementsByClassName("dealeris").value);
        res.value = b + getACard("Dealer");
    }
}

function HUMAN(){
    let a = parseInt(document.getElementsByClassName("youare").value);
    let res = document.getElementsByClassName("youare");
    if(res.value>21){
        whoWonC ++;
        document.getElementsByClassName("COMPW").innerHTML = whoWonC;
        let a = document.getElementsByClassName("COMP").innerHTML = "I WIN";
    }
}

let whoWonH = 0;
var whoWonC = 0;

function determineWinner() {
    let a = parseInt(document.getElementsByClassName("youare").value);
    let b = parseInt(document.getElementsByClassName("dealeris").value);
        if (b> 21){
            whoWonH ++;
        document.getElementsByClassName("HUMW").innerHTML = whoWonH;
    let winner = document.getElementsByClassName("HUM").innerHTML = "I WIN";
        return;
    }
    if (a==b){
        let a = document.getElementsByClassName("HUM").innerHTML = "TIE";
        let b = document.getElementsByClassName("COMP").innerHTML = "TIE";
    }
    if (a>b) {
        whoWonH ++
        document.getElementsByClassName("HUMW").innerHTML = whoWonH;
        let a = document.getElementsByClassName("HUM").innerHTML = "I WIN";
    }
    if (b>a){
        whoWonC ++;
        document.getElementsByClassName("COMPW").innerHTML = whoWonC;
        let g = document.getElementsByClassName("COMP").innerHTML = "I WIN";
    }
}








`const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'];

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.deck = [];

    }

    createDeck(suits, values) {
        for(let suit of suits) {
            for(let value of values){
                this.deck.push(new Card(suit, value));
            }
        }
        return this.deck;
    }

    shuffle() {
        let counter = this.deck.length, temp, i;

        while(counter){
            i=Math.floor(Math.random() * counter--);
            temp = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = temp;
        }
        return this.deck;
    }

    deal() {
        let hand = [];
        while(hand.length < 2) {
            hand.push(this.deck.pop());
        }
        return this.deck;
    }

}
let deck = new Deck();
deck.createDeck(suits, values);
deck.shuffle();
console.log(deck.createDeck(suits, values));

hand = []`

`const createCard = (id) =>{
    let newCard = document.createElement("div");
    newCard.setAttribute("id", id);
    newCard.className = 'card';
    newCard.addEventListener("click", (evt)=>{
        let cardNode = evt.target
        //finds the card in the dictionary
        let card = cards.find(card=>card.id == cardNode.id)
        console.log(card)  
        if(card.sideShown == "front"){
            card.sideShown = "back";
            cardNode.classList.add("back")
        } else {
            card.sideShown = "front";
            cardNode.classList.remove("back")
        }
    })
    return newCard
}
let cards = [['card1',"cat"],['card2',"cat"],['card3',"dog"],['card4','dog']].map(cardArr=>{
    return {
        id:cardArr[0],
        node:createCard(cardArr[0]),
        sideShown:'front',
        value:cardArr[1]
    }
})`

`let button = document.querySelector("#add-element")

const createCard = (title, content, extra) =>{
    let newCard = document.createElement("div");
    newCard.setAttribute("class", "card");

    let newH2 = document.createElement("h2");
    newH2.innerText = title;

    let newP = document.createElement("p");
    newP.append(content);

    let newEp = document.createElement("p");
    newEp.setAttribute("class", "extra");
    newEp.innerText=extra;

    newCard.append(newH2,newP,newEp);
    
    return newCard;
   

}

button.addEventListener('click', (evt)=>{
    
    let titleInput = document.getElementById("card-title")
    let contentInput = document.getElementById("card-content")
    let extraInput = document.getElementById("card-extra")
    console.dir(titleInput.value)

    let newCard = createCard(titleInput.value, contentInput.value, extraInput.value)
    document.getElementById("cards").append(newCard)

    titleInput.value = "";
    contentInput.value = "";
    extraInput.value = "";


})`

