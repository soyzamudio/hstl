'use strict';

var active = require('../../views/helpers/active');

module.exports = {
  auth: {
    mode: 'try'
  },
  handler: function(request, reply) {
    reply.view('templates/general/home', {path: '/', active: active});
  }
};
