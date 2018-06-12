// THIS IS SERVER FILE FOR DROPORT BACKEND //



// initializing
var dbcon = require('./dbconnection');
var express = require('express');
var app = express();
var cons = require('consolidate');
var path =require('path');
var bodyParser = require('body-parser');
// var cors = require('cors');

app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}));

var request_routes = require('./routes/request_routes')
var user_routes = require('./routes/user_routes')

// // Config
// app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// app.set('views', path.join(__dirname, '../droport- frontend/src/app/view'));
// app.engine('html', cons.swig);
// app.set('view engine', 'html');

app.use('/api/req',request_routes);
app.use('/api/user',user_routes);




port = 3000;
app.listen(port ,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('LIstning On ' + port)
    }
    
})