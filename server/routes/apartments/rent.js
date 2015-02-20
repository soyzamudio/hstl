'use strict';

var Renter = require('../../models/renter');
var Apartment = require('../../models/apartment');

module.exports = {
  handler: function(request, reply) {
    Renter.findById(request.payload.renterId, function(err, renter) {
      Apartment.findById(request.params.apartmentId, function(err, apartment) {
        apartment.renters.push(renter._id);
        apartment.bedroomsLeft--;
        renter.hasRented = true;
        apartment.save(function() {
          renter.save(function() {
            reply.redirect('/apartments/' + apartment._id);
          });
        });
      });
    });
  }
};
