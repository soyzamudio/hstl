'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User;

var userSchema = mongoose.Schema({
  email     : {type:String, required:true},
  password  : {type:String, required:true},
  name      : {type:String, requried:true},
  photo     : {type:String, required:true},
  admin     : {type:Boolean, default:false},
  isRenting : {type:Boolean, default:false},
  rental    : {type: mongoose.Schema.ObjectId, ref: 'Apartment'},
  createdAt : {type:Date, default: Date.now, required: true}
});

userSchema.methods.register = function(cb) {
  var self = this;
  User.findOne({email: self.email}, function(err, user) {
    if (user) { return cb(true); }
    self.password = bcrypt.hashSync(self.password, 8);
    self.save(cb);
  });
};

userSchema.statics.authenticate = function(user, cb) {
  User.findOne({email: user.email}, function(err, dbuser) {
    if (!dbuser) { return cb(true); }
    var isGood = bcrypt.compareSync(user.password, dbuser.password);
    if (!isGood) { return cb(true); }
    cb(null, dbuser);
  });
};

var User = mongoose.model('User', userSchema);
module.exports = User;
