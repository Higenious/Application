var express    = require('express');
var mongoose = require('mongoose');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;

var emp = new Schema({ 
    employeeId: { type: String, required: true },
    employeeName: {type: String, required :true},
    employeeAddress: {type: String, required :true},
    employeeImage: {type: String, required :true},
    employeeDcob: {type: String, required :true},
    employeePhone: {type: Number, required :true},
    employeeEmail: {type: String, required :true},  
})




module.exports.emp = mongoose.model('emp', emp);
