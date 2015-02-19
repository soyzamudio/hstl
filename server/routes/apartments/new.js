'use strict';

var active = require('../../views/helpers/active');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    reply.view('templates/apartments/new', {path: '/apartments', active: active, _:_});
  }
};
