var express = require('express');
var router = express.Router();
var secrets = require('../secrets');
var client = require('twilio')(secrets.accountSid, secrets.authToken); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
// Twilio Credentials 
//require the Twilio module and create a REST client 
 
  client.messages.create({ 
    to: "+14252605083", 
    from: "+14253104046", 
    body: "Good morning!",   
  }, function(err, message) { 
    console.log(message.sid); 
});
  res.render('index', { title: 'Express' });
});

module.exports = router;
