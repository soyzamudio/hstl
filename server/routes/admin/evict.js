'use strict';

var Apartment = require('../../models/apartment');
var User = require('../../models/user');
// var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    User.findOne({_id:request.params.userId}, function(err, user) {
      Apartment.findOne({_id: user.rental}, function(err, apartment) {
        apartment.renters.forEach(function(r, i) {
          if (JSON.stringify(r) === JSON.stringify(user._id)) {
            apartment.renters.splice(i, 1);
          } else { console.log('Not found'); }
        });
        user.isRenting = false;
        apartment.save(function() {
          user.save(function() {
            reply.redirect('/admin');
          });
        });
      });
    });
  }
};
