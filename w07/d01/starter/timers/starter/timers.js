var time = 1;
var timerID;

function timeElapsed() {
    $("#timer").text("Time elapsed: " + time);
    time++;
};

$("#start").click(function() {
    timerID = setInterval(timeElapsed, 1000);
});

$("#pause").click(function() {
    clearInterval(timerID);
});

$("#reset").click(function() {
    time = 1;
    $("#timer").text("Stop Watch");
});    


