var mongoose       = require('mongoose');
var express     =  require('express');
var bodyParser  =  require('body-parser');
var app            =  express();
var path           = require('path');
var port           =  5000;
var empModel       =  require('../aarkenia/model/employee').emp;
  

//connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/Employee',{ useNewUrlParser: true });
console.log('connected to database');
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({  extended: true }));
app.use(express.static(__dirname + '/Client'));

app.get('/', function(req, res){
    console.log('Running on server');
    res.sendfile('index');
})

app.post('/api/emp/register', function(req, res){
     var data =  req.body;
     console.log(data);
     try {
        empModel(data).save().
            then(function (result) {
                res.send({status: 200, data: data, message : "suceesfullly inserted"});
            }).catch(function (error) {
                res.send(error) 
            })
    } catch  (error) {
        res.send(); 
           
    }
})


app.get('/api/emp/getall', function(req, res){
    console.log('getting all emp record');
    try {
        empModel.find({}).
            then(function (result) {
                res.send({status: 200, result, message : "suceesfullly fetched all record"});
            }).catch(function (error) {
                res.send(error) 
            })
    } catch  (error) {
        res.send(); 
           
    }
})


app.post('/api/emp/update', function(req, res){
    var data  = req.body;
    console.log(data);
    try {
        empModel.findOneAndUpdate({ "employeeId": data.employeeId }, { $set: data }, { new: true, upsert: true }, function (error, result) {
            if (error) {
                errorData(error)
            } else {
                successData({status: 200, result, message : "User record udpated Successfully !"});

            }
        })
    } catch (error) {
        errorData(error)
    }


})




//remove emp

app.post('/api/emp/delete', function(req, res){
    var id = req.body.employeeId;
    console.log(id);
    try {
        empModel.find({ employeeId: id })
            .then(function (result) {
                if (result) {
                    try {
                        empModel.remove({ employeeId: id })
                            .then(function (result) {
                                res.send({status: 200, result, message : "Employee Successfully record"});
                            }).catch(function (error) {
                                res.send(error)
                            });
                    } catch (error) {
                        res.send(error)
                    }
                } else {
                    res.send({status: 200, result, message : "User record not Found"});
                }
            }).catch(function (error) {
                res.send(error)
            })
    } catch (error) {
        res.send(error)
    }
})




//start  application on port

app.listen(port, function ()  {
    console.log(`Server listening on port ${port}`);
});