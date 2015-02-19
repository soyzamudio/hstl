'use strict';

var active = require('../../views/helpers/active');
var Apartment = require('../../models/apartment');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    Apartment.findOne({_id: request.params.aparmentId}).populate('renters').exec(function(err, apartment) {
      console.log('**********apartment***********', apartment);
      reply.view('templates/apartments/show', {path: '/apartments', active: active, apartment: apartment, _:_});
    });
  }
};
