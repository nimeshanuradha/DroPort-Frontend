// THIS IS SERVER FILE FOR DROPORT BACKEND //

// initializing
//var dbcon = require('dbconnection');
var express = require('express');
var app = express();
var cons = require('consolidate');
var path =require('path');
var bodyParser = require('body-parser');

//../droport- frontend/src/app/view/

var request_routes = require('./routes/request_routes')
var user_routes = require('./routes/user_routes')

//  Config
app.use('/req',request_routes);
app.use('/user',user_routes);
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}));
app.set('views', path.join(__dirname, '../droport- frontend/src/app/view'));





app.listen(3000 ,()=>{
    console.log('LIstning On port 3000')
})