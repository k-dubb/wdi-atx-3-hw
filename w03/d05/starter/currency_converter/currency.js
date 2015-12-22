/* Write a function currencyConverter that takes 3 arguments: the currency it is converting from, the currency you are converting to, and the amount. It should output the appropriate string. */

currencyConverter();

function currencyConverter(currencyFrom, currencyTo, amount) {

var currencyFrom = prompt("What currency are you converting from?");
var currencyTo = prompt("What currency are you converting to?");
var amount = prompt("How much are you converting?");
var conv;

    if ((currencyFrom.toLowerCase() === "dollars") && (currencyTo.toLowerCase() === "pounds")) {

        function dollarsToPounds() {
            conv = (amount * 0.67); 
            return conv.toFixed(2); //decimal to two places
            //dollarConv.toString();
        };

        alert("$"+amount + " is " + "£"+dollarsToPounds(conv));
        //console.log(dollarsToPounds(amount));

    }   
    else if ((currencyFrom.toLowerCase() === "pounds") && (currencyTo.toLowerCase() === "dollars")) {
        
        function poundsToDollars() {
            conv = (amount * 1.49);
            return conv.toFixed(2) //decimal to two places
            //poundConv.toString();
        };

        alert("£"+amount + " is " + "$"+poundsToDollars(conv));
        //console.log(poundsToDollars(amount));
    }
}

/* Write a function dollarsToPounds that takes a dollar number as input and outputs a string of what the pound equivalent is.
    
var amount = prompt("How many dollars do you have?");

function dollarsToPounds() {
    return (amount * 0.67); 
    //dollarConv.toString();
};
    alert("$"+amount + " is " + "£"+dollarsToPounds(amount));
    console.log(dollarsToPounds(amount));

/* Write a function poundsToDollars that takes a pound number as input and outputs a string of what the dollar equivalent is. 

var amount = prompt("How many pounds do you have?");

function poundsToDollars() {
    return (amount * 1.49);
    //poundConv.toString();
};
    alert("£"+amount + " is " + "$"+poundsToDollars(amount));
    console.log(poundsToDollars(amount));

*/
