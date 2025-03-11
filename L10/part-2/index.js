// Program to shuffle a deck of cards

// Declare card suits and values
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

// Empty array to contain cards
let deck = [];

// Create a deck of cards by combining suits and values
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// Shuffle the deck using the Fisher-Yates algorithm
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

// Display the first five shuffled cards
console.log('The first five cards are:');

for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`);
}

//This code creates a deck of cards by combining four suits (Spades, Diamonds, Clubs, Hearts) with thirteen values (Ace to King). It then shuffles the deck using the Fisher-Yates algorithm to randomize the order of the cards. Finally, it displays the first five cards after shuffling in the console.