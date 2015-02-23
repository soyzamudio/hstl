'use strict';

var active = require('../../views/helpers/active');
var Apartment = require('../../models/apartment');
var _ = require('lodash');

module.exports = {
  auth: {
    mode: 'try'
  },
  handler: function(request, reply) {
    Apartment.findOne({_id: request.params.apartmentId}).populate('renters').exec(function(err, apartment) {
      reply.view('templates/apartments/show', {path: '/apartments', active: active, apartment: apartment, _:_});
    });
  }
};
