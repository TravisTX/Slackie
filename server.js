var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
//var config = require('./config');
var morgan = require('morgan');
var log = require('./services/log');

var app = express();

var server = http.createServer(app);

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


morgan.token('body', function getId(req) {
  return JSON.stringify(req.body);
})

// use morgan to log requests to the console
app.use(morgan(':method :url :status :response-time ms - :user-agent - :body', { "stream": log.stream }));


app.use('/api/tfs', require('./routes/tfs'));

log.debug("listening on port " + 999);
server.listen(999);
