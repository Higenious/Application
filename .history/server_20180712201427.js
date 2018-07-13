var mongoose       = require('mongoose');
var express     =  require('express');
var bodyParser  =  require('body-parser');
var app            =  express();
var path           = require('path');
var port           =  5000;
var empModel       =  require('../aarkenia/model/employee').emp;
  

//connect to DB
mongoose.connect('mongodb://localhost:27017/Employee', { useNewUrlParser: true } );
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
        userModel(data).save().
            then(function (result) {
                successData({status: 200, data: data, message : "suceesfullly inserted"});
            }).catch(function (error) {
                errorData(error) 
            })
    } catch  (error) {
        errorData(); 
           
    }
})


app.get('/api/emp/getall', function(req, res){
    console.log('gettimng all emplloyee record');
    res.send('all employees');
})


app.listen(port, function ()  {
    console.log(`Server listening on port ${port}`);
});