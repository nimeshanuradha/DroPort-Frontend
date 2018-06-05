

// THIS IS ROUTES FILE FOR FR RELATED ROUTES //
const request_routes = require('express').Router();
const dbcon = require('../dbconnection')


//############################################################################### TESTING AREA
request_routes.post('/zxc',(req,res)=>{
    console.log('data recieved to back end')
    var username  = req.body.username
    var password = req.body.password
    // var username = req.body.username
    // var password = req.body.password
    console.log(username,password)

    var sql ="INSERT INTO login(email,password) VALUES(?,?)"

    dbcon.query(sql,[username,password], function (err, result) {
        if(err){
            console.log("Error in query")
        }else{
            console.log("Number of records inserted: " + result.affectedRows);
        }
        
      })


});
//#############################################################################



// POST- New  flying Request

request_routes.post('/new',(req,res)=>{
    console.log('data recieved to back end')
    console.log(req.body)

    var district= req.body.district
    var town    = req.body.town
    var area    = req.body.area
    var date    = req.body.date
    var time    = req.body.time
    var cus_id  = null
    var map_area= null
    var start_time  = null
    var end_time    =null
    var quality_categoty = null
    var max_flight_time =null
    var drone_recieved="pending";
    var media_recieved="pending";
    var media_confirmed="pending";
    var completed ="pending"
    var last_id_arr = []
    // Getting next req_id
    var sql0 = ("SELECT req_id FROM request ORDER BY req_id DESC LIMIT 1")
    dbcon.query(sql0,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            setValue(result)
        }
    });
    
    function setValue(value){
        someVar = value;
        //console.log(JSON.stringify(someVar))
        last_id_arr = JSON.stringify(someVar)
        }
    
  
 
 

    // Updating request table
    var req_data = [district,town,area,date,time,cus_id,map_area]
    console.log(req_data)
    var sql1 = "INSERT INTO request(district,town,area,date,time,cus_id,map_area) VALUES(?,?,?,?,?,?,?)"
    dbcon.query(sql1,req_data,(err,result)=>{
        if(err){
            console.log("Error in query")
        }else{
            console.log("Number of records inserted: " + result.affectedRows);
        }
    })

    
    //Updating req_status table
    var status_data = [drone_recieved,media_recieved,media_confirmed,completed]
    var sql2 = "INSERT INTO req_status(drone_recieved,media_recieved,media_confirmed,completed) VALUES(?,?,?,?)"
    dbcon.query(sql2,status_data,(err,result)=>{
        if(err){
            console.log("Error in query" + err)
        }else{
            console.log("Number of records inserted: " + result.affectedRows);
        }
    })

})


//GET All requests
request_routes.get("/all",(req,res)=>{
    dbcon.query("SELECT * FROM request",(err,results)=>{
        if(err){
            console.log(err)
        }
        var result_data = []
        result_data = JSON.stringify(results)
        res.send(result_data)
        
    })

    
    
})

module.exports = request_routes



