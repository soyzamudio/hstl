'use strict';

var active = require('../../views/helpers/active');
var Apartment = require('../../models/apartment');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    Apartment.findOne({_id: request.params.apartmentId}, function(err, apartment) {
      reply.view('templates/apartments/edit', {path: '/apartments', active: active, apartment: apartment, _:_});
    });
  }
};
