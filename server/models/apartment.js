'use strict';

var mongoose = require('mongoose');

var apartmentSchema = mongoose.Schema({
  name      : {type:String, requried:true},
  bedrooms  : {type:Number, required:true},
  rent      : {type:Number, required:true},
  sqft      : {type:Number},
  photo     : {type:String, required:true},
  createdAt : {type: Date, default: Date.now, required: true},
  renters   : [{type: mongoose.Schema.ObjectId, ref: 'Renter'}]
});

module.exports = mongoose.model('Apartment', apartmentSchema);
