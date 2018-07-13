var express    = require('express');
var mongoose   = require('mongoose');

var mongoose = require('mongoose');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;
// email,name,dob,gender,address,companyName,country

var user = new Schema({ 
    name: { type: String, required: true },
    companyName: {type: String, required :true},
    country: {type: String, required: true },
    
})




module.exports.user = mongoose.model('user', user);
