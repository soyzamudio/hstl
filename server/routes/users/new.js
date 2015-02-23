'use strict';

var active = require('../../views/helpers/active');

module.exports = {
  auth: {
    mode: 'try'
  },
  handler: function(request, reply) {
    reply.view('templates/users/new', {path: '/register'});
  }
};
