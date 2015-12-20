// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays. 
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function deck_o_cards() {
    var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

    // Make 52 card objects and store them in the "cards" array
    var cards = [];

    for (var v = 0; v < values.length; v++) {
        var pickValue = values[v];

            for (var s = 0; s < suits.length; s++) {
                var pickSuit = suits[s];

            var newCard = new Card(pickValue, pickSuit);

            cards.push(newCard);
        }
    }   
    
    //console.log(cards.length);

    function Card(value, suit) { 
        this.values = value;
        this.suits = suit;
    }
    // Shuffle the Deck
    shuffle(cards);

    // Pull the top card
    // Console log the results
    var topCard = cards[0];

    console.log("The deck has " + cards.length + " cards.");
    console.log("The top card is the " + topCard.suits + " of " + topCard.values);
}
       
    // Fisher-Yates Shuffle 
    // http://stackoverflow.com/a/6274398
    // Shuffle the Deck
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;

}
