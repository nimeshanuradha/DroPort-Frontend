var mysql = require('mysql');

var dbconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'droport_new'
});

dbconnection.connect(function(err){
    if(err){
        console.log('Error connect DB')
    }else{
        console.log('connected')
    }
    
});

module.exports = dbconnection;

