var express     =  require('express');
var bodyParser  =  require('body-parser');
var app            =  express();
var port           =  5000;


app.use(express.static(__dirname + '/Client'));

app.get('/', function(req, res){
    console.log('Running on server');
    res.sendfile('index');
})



app.listen(`application successfully runnning on ${port}`);
