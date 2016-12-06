'use strict';

// Require Logic
var Hapi = require('hapi');
var getUser = require('./api/user/getUser');
var postUser = require('./api/user/postUser');
var getOffer = require('./api/offer/getOffer');
var postOffer = require('./api/offer/postOffer');

// Lambda Handler
module.exports.dispatch = function (event, context) {
  console.log(event); // check cloudwatch logs to see what this object contains
  var server = new Hapi.Server();
  server.connection();
  server.route({ method: 'GET', path: '/user/{id}', handler: getUser });
  server.route({ method: 'POST', path: '/user', handler: postUser });
  server.route({ method: 'GET', path: '/offer/{id}', handler: getOffer });
  server.route({ method: 'POST', path: '/offer', handler: postOffer });

  server.inject({ url: event.path, method: event.httpMethod }, function(res) {
    console.log('sending response', res);
    context.succeed({
      statusCode: '200',
      body: res.result,
    });
  });
};
