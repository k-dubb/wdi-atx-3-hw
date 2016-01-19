var number = prompt("What number do you want to convert to roman numerals?");

function romanize(number){
    result = " ";

    var matches = [
        {numbers: 1, roman: "I"},
        {numbers: 2, roman: "II"},
        {numbers: 3, roman: "III"},
        {numbers: 4, roman: "IV"},
        {numbers: 5, roman: "V"},
        {numbers: 6, roman: "VI"},
        {numbers: 7, roman: "VII"},
        {numbers: 8, roman: "VIII"},
        {numbers: 9, roman: "IX"},
        {numbers: 10, roman: "X"},
        {numbers: 50, roman: "L"},
        {numbers: 100, roman: "C"},
        {numbers: 500, roman: "D"},
        {numbers: 1000, roman: "M"},
        {numbers: 40, roman: "XL"},
        {numbers: 90, roman: "XC"},
        {numbers: 400, roman: "CD"},
        {numbers: 900, roman: "CM"}
    ];

    for (var i = 0; i < matches.length; i++) {
        matches = matches[i];
        
        while (number >= matches.numbers) {
            result += matches.roman;
            number -= matches.numbers;
        }
    
    }
    
    console.log(result);
    return result;
}