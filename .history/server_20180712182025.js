var express     =  require('express');
var bodyParser  =  require('body-parser');
var app            =  express();
var port           =  5000;


app.use(express.static(__dirname + '/Client'));

app.get('/', function(req, res){
    console.log('Running on server');
    res.sendfile('index');
})

app.post('/api/emp/register', function(req, res){
    console.log('register api called');
    res.send('register api called');
});


app.get('/api/emp/getall', function(req, res){
    console.log('gettimng all emplloyee record');
    res.send('all employees');
})


app.listen(`application successfully runnning on ${port}`);
