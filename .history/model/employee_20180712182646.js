var express    = require('express');
var mongoose = require('mongoose');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;

var emp = new Schema({ 
    name: { type: String, required: true },
    companyName: {type: String, required :true},
    country: {type: String, required: true },
    
})




module.exports.user = mongoose.model('emp', emp);
