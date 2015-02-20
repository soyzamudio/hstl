'use strict';

var Apartment = require('../../models/apartment');
var Renter = require('../../models/renter');
// var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    Renter.findOne({_id:request.params.renterId}, function(err, renter) {
      Apartment.findOne({_id: renter.rental}, function(err, apartment) {

        apartment.renters.forEach(function(r, i) {
          if (JSON.stringify(r) === JSON.stringify(renter._id)) {
            console.log(apartment.renters);
            apartment.renters.splice(i, 1);
            console.log(apartment.renters);
          } else { console.log('Not found'); }
        });
        renter.hasRented = false;

        apartment.save(function() {
          renter.save(function() {
            reply.redirect('/admin');
          });
        });
      });
    });
  }
};
