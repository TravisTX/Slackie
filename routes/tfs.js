var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('hello');
});

router.post('/', function(req, res) {
    // var token = req.body.token;
    // var team_id = req.body.token;
    // var team_domain = req.body.team_domain;
    // var channel_id = req.body.channel_id;
    // var channel_name = req.body.channel_name;
    // var user_id = req.body.user_id;
    // var user_name = req.body.user_name;
    // var command = req.body.command;
    // var text = req.body.text;
    // var response_url = req.body.response_url;

    var result = {
        response_type: 'in_channel',
        text: 'hello world'
    };

    var options = {
      uri: req.body.response_url,
      method: 'POST',
      json: result
    };

    request(options);
    res.send('');
});

function postData(url, string) {

}

module.exports = router;
