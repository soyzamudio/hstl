'use strict';

var User = require('../../models/user');
var Apartment = require('../../models/apartment');

module.exports = {
  handler: function(request, reply) {
    User.findOne({email: request.auth.credentials.email}, function(err, user) {
      Apartment.findById(request.params.apartmentId, function(err, apartment) {
        apartment.renters.push(user._id);
        user.isRenting = true;
        user.rental = apartment._id;
        console.log('\n\n******\n' + apartment + '\n******\n\n');
        console.log('\n\n******\n' + user + '\n******\n\n');
        apartment.save(function() {
          user.save(function() {
            reply.redirect('/apartments/' + apartment._id);
          });
        });
      });
    });
  }
};
