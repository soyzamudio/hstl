'use strict';

var mongoose = require('mongoose');

var renterSchema = mongoose.Schema({
  name      : {type:String, requried:true},
  age       : {type:Number, required:true},
  gender    : {type:String, required:true},
  photo     : {type:String, required:true},
  createdAt : {type:Date, default: Date.now, required: true},
  hasRented : {type:Boolean, default:false},
  rental    : {type: mongoose.Schema.ObjectId, ref: 'Apartment'}
});

module.exports = mongoose.model('Renter', renterSchema);
