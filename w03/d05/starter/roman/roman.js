var number = prompt("What number do you want to convert to roman numerals?");

function romanize(number);


function romanize(){

    var roman;
    var i;

    var matches = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
    40: "XL",
    90: "XC",
    400: "CD",
    900: "CM"
    }

//    for (matches[i]) {
        for (i in matches) {
        while (number >= matches[i]) {
            roman += i;
            number -= matches[i];
        }
    }
    return roman;
    console.log(roman);
}
