'use strict';

var active = require('../../views/helpers/active');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    reply.view('templates/admin/index', {path: '/admin', active:active, _:_});
  }
};
