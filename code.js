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

const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
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
console.log(deck.deal());

hand = []

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

