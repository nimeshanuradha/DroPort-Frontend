// THIS IS ROUTES FILE FOR USER RELATED ROUTES //

const user_routes = require('express').Router();

user_routes.get('/user',(req,res)=>{
    console.log('in user routes')
})

module.exports = user_routes;
