'use strict';

var active = require('../../views/helpers/active');
var Apartment = require('../../models/apartment');
var Renter = require('../../models/renter');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    Apartment.findOne({_id: request.params.apartmentId}).populate('renters').exec(function(err, apartment) {
      Renter.find({hasRented: false}, function(err, renters) {
        console.log(renters);
        reply.view('templates/apartments/show', {path: '/apartments', active: active, apartment: apartment, renters: renters, _:_});
      });
    });
  }
};
