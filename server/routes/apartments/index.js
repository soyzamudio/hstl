'use strict';

var active = require('../../views/helpers/active');
var Apartment = require('../../models/apartment');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    Apartment.find(function(err, apartments) {
      reply.view('templates/apartments/index', {path: '/apartments', apartments: apartments, _:_});
    });
  }
};
