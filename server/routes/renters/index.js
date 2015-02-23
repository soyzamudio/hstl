'use strict';

var active = require('../../views/helpers/active');
var User = require('../../models/user');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    User.find(function(err, users) {
      reply.view('templates/renters/index', {path: '/renters', active: active, users: users, _:_});
    });
  }
};
