'use strict';

var active = require('../../views/helpers/active');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    reply.view('templates/renters/new', {path: '/renters', active: active, _:_});
  }
};
