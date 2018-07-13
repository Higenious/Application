var express     =  require('express');
var bodyParser  =  require('body-parser');
var app            =  express();
var port           =  5000;
var empModel       =  require('../aarkenia/model/employee').emp;
  
app.use(express.static(__dirname + '/Client'));

app.get('/', function(req, res){
    console.log('Running on server');
    res.sendfile('index');
})

app.post('/api/emp/register', function(req, res){
    console.log('register api called');
    var data = req.body;
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

});


app.get('/api/emp/getall', function(req, res){
    console.log('gettimng all emplloyee record');
    res.send('all employees');
})


app.listen(port, function ()  {
    console.log(`Server listening on port ${port}`);
});