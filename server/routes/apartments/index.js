'use strict';

var active = require('../../views/helpers/active');
var Apartment = require('../../models/apartment');
var _ = require('lodash');

module.exports = {
  auth: {
    mode: 'try'
  },
  handler: function(request, reply) {

    Object.keys(request.query).forEach(function(key) {
      if (!request.query[key]) {
        delete request.query[key];
      }
    });

    if (request.query.min) {
      request.query.rent = { $gte: request.query.min };
      delete request.query.min;
    }

    if (request.query.max) {
      request.query.rent = request.query.rent || {};
      _.merge(request.query.rent, { $lte: request.query.max });
      delete request.query.max;
    }

    Apartment.find(request.query, function(err, apartments) {
      reply.view('templates/apartments/index', {path: '/apartments', active: active, apartments: apartments, _:_});
    });
  }
};
