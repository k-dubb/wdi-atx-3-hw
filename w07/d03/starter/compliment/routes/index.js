var express = require('express');
var router = express.Router();
var compliments = ["Your instructors love you", "High five = ^5", "Is it Ruby Tuesday yet?", "It's almost beer o'clock", "The Force is strong with you"];
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

/* GET home page. */
router.get('/', function(req, res, next) {
    var comp = compliments[Math.floor(Math.random() * compliments.length)];
    var color_back = colors[Math.floor(Math.random() * colors.length)];
    res.render('index', { title: 'Hey,', compliment: comp, back: color_back });
});

router.get('/:name', function(req, res, next) {
    var name = req.params.name,
    comp = compliments[Math.floor(Math.random() * compliments.length)];
    color_back = colors[Math.floor(Math.random() * colors.length)];
    res.render('index', { title: 'Hey ' + name + ',', compliment: comp, back: color_back });
});

module.exports = router;
