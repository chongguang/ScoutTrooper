var http = require('http');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./lib/routes');

module.exports = Server;

function Server (doLogRequests) {
  var app = express();
  app.set('json spaces', 2);

  if (doLogRequests) {
    app.use(morgan('dev'));
  }
  app.use(bodyParser.json());

  app.get('/status', function (req, res) {
    res.json({up: true})
  })
  
  app.get('/test', function (req, res, next) {
    routes.tests(req, res, next);
  });
  
  app.post('/order', function (req, res, next) {
    routes.order(req, res, next);
  });
  
  app.post('/orderTest', function (req, res, next) {
    routes.orderTest(req, res, next);
  });
  
  app.post('/feedback', function (req, res, next) {
    routes.feedback(req, res, next);
  });
  
  app.get('/licenses/category/:category_name/country/:country_name', function (req, res, next) {
    routes.licenses(req, res, next);
  });


  var server = http.createServer(app);
  server.start = server.listen.bind(server, process.env.PORT || 3000);
  server.stop = server.close.bind(server);
  return server;
}


if (!module.parent) {
  var server = new Server(true);
  server.start(function () {
    console.log('server listening on port', server.address().port);
  });
}
