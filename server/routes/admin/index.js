'use strict';

var active = require('../../views/helpers/active');
var Apartment = require('../../models/apartment');
var Renter = require('../../models/renter');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    Apartment.find(function(err, apartments) {
      Renter.find(function(err, renters) {
        var data = { revenue: 0, totalRooms: 0, filled: 0, vacant: 0, total: 0, apartments: 0};

        apartments.forEach(function(a) {
          data.totalRooms += a.bedrooms;
          data.vacant += a.bedrooms - a.renters.length;
          data.filled += a.renters.length;
          data.revenue += a.renters.length * a.rent;
          data.total += a.bedrooms * a.rent;
          if (a.renters.length !== a.bedrooms) { data.apartments++; }
        });
        reply.view('templates/admin/index', {path: '/admin', data: data, apartments: apartments, renters:renters, active:active, _:_});
      });
    });
  }
};
