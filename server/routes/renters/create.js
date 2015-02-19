'use strict';

var Renter = require('../../models/renter');

module.exports = {
  handler: function(request, reply) {
    var renter = new Renter(request.payload);
    renter.save(function() {
      reply.redirect('/');
    });
  }
};
