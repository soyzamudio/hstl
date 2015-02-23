'use strict';

var Apartment = require('../../models/apartment');

module.exports = {
  handler: function(request, reply) {
    Apartment.findOne({_id: request.params.apartmentId}, function(err, apartment) {
      apartment.update(request.payload, function(err) {
        if (err) { console.error(err); }
      });
      reply.redirect('/admin');
    });
  }
};
