// THIS IS ROUTES FILE FOR FR RELATED ROUTES //
const request_routes = require('express').Router();

request_routes.get('/',(req,res)=>{
    console.log('routes works in req root')
});

request_routes.get('/asd',(req,res)=>{
    console.log('routes works in asd')
    
    //customer/cus-new-re/cus-new-req.component.html

});


request_routes.get('/req/asd',(req,res)=>{
    console.log('routes works in req/asd')
});

module.exports = request_routes



