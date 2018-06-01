// THIS IS ROUTES FILE FOR FR RELATED ROUTES //
const request_routes = require('express').Router();
var dbcon = require('./dbconnection');


request_routes.get('/',(req,res)=>{
    console.log('routes works in req root')
});

request_routes.get('/asd',(req,res)=>{
    console.log('routes works in asd')
    res.send(
        [{
        "req_id": 1,
        "district": "A green door",
        "time": 12.50
        },
        {   
        "req_id": 2,
        "district": "A second door",
        "time": 12.50
        },
        {
        "req_id": 3,
        "district": "A third door",
        "time": 12.50
        },
        {
        "req_id": 4,
        "district": "A fourth door",
        "time": 12.50
        }]
    )
    

});


request_routes.post('/req/zxc',(req,res)=>{
    console.log('routes works in req/zxc')

    var username = req.params.username
    var password = req.params.password
    console.log(username,password)

});

module.exports = request_routes



