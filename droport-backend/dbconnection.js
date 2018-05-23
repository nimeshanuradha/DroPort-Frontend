var mysql = require('mysql');

var dbconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'droport'
});

dbconnection.connect(function(err){
    if(err) throw err && Console.log('Error connect DB');
    console.log('connected')
});

module.exports = dbconnection;

