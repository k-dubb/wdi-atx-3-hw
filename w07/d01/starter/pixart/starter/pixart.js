// #Pixart

// Warmup to help nail down Event Listeners

// ###Commit 1

// * When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.

$("#set-color").click(function(){
    var color = $("#color-field").val();
    $(".brush").css("background", color);
});

// ###Commit 2

// * The same thing should happen when I press the enter key from inside the input field

$("#color-field").keypress(function(){
    var color = $("#color-field").val();
    $(".brush").css("background", color);
        $('#set-color').click();   
});

// ###Commit 3

// * Using JavaScript, create 20 divs of the "square" class and append them to the body

// ###Commit 4

// * Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
$(".square").one("click", function(){
    var color2 = "green";
    $(this).css("background", color2);
});

// ###Commit 5

// * Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.
$(".square").one("click", function(){
    var color2 = $("#color-field2").val();
    $(this).css("background", color2);
});

// ###Commit 6

// * Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
// * Modify your code so that you are creating 8000 divs instead of 20.
// * Change the event that changes your box colors from 'click' to 'mouseover'
// * Paint a picture!