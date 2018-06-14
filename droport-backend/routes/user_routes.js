// THIS IS ROUTES FILE FOR USER RELATED ROUTES //

const user_routes = require('express').Router();
const dbcon = require('../dbconnection')

//GET All Customers
user_routes.get('/cus', (req, res) => {
    console.log('user_routes called')
    dbcon.query("SELECT * FROM customer", (err, results) => {
        if (err) {
            console.log(err)
        }
        var all_cus_arr = []
        all_cus_arr = JSON.stringify(results)
        console.log(all_cus_arr)
        res.send(all_cus_arr)

    })
})

//GET Customer by ID
user_routes.get('/cus/:id', (req, res) => {
    console.log('user_routes called')
    var id = req.body.id
    dbcon.query("SELECT * FROM customer WHERE cus_id=?",id, (err, results) => {
        if (err) {
            console.log(err)
        }
        var user_data_arr = []
        user_data_arr = JSON.stringify(results)
        //console.log(user_data_arr)
        res.send(user_data_arr)

    })
})

//GET All Pilots
user_routes.get('/pil', (req, res) => {
    console.log('user_routes called')
    dbcon.query("SELECT * FROM drone_pilot", (err, results) => {
        if (err) {
            console.log(err)
        }
        var all_pil_arr = []
        all_pil_arr = JSON.stringify(results)
        console.log(all_pil_arr)
        res.send(all_pil_arr)

    })
})

//GET Pilot by ID
user_routes.get('/pil/:id', (req, res) => {
    console.log('user_routes called')
    var id = req.body.id
    dbcon.query("SELECT * FROM drone_pilot WHERE pil_id=?",id, (err, results) => {
        if (err) {
            console.log(err)
        }
        var user_data_arr = []
        user_data_arr = JSON.stringify(results)
        //console.log(user_data_arr)
        res.send(user_data_arr)

    })
})

//GET All Owners
user_routes.get('/own', (req, res) => {
    console.log('user_routes called')
    dbcon.query("SELECT * FROM drone_owner", (err, results) => {
        if (err) {
            console.log(err)
        }
        var all_own_arr = []
        all_own_arr = JSON.stringify(results)
        console.log(all_own_arr)
        res.send(all_own_arr)

    })
})

//GET Owner by ID
user_routes.get('/own/:id', (req, res) => {
    console.log('user_routes called')
    var id = req.body.id
    dbcon.query("SELECT * FROM drone_owner WHERE own_id=?",id, (err, results) => {
        if (err) {
            console.log(err)
        }
        var user_data_arr = []
        user_data_arr = JSON.stringify(results)
        //console.log(user_data_arr)
        res.send(user_data_arr)

    })
})

//GET All Admins
user_routes.get('/admin', (req, res) => {
    console.log('user_routes called')
    dbcon.query("SELECT * FROM admin", (err, results) => {
        if (err) {
            console.log(err)
        }
        var all_admin_arr = []
        all_admin_arr = JSON.stringify(results)
        console.log(all_admin_arr)
        res.send(all_admin_arr)

    })
})

//GET Admin by ID
user_routes.get('/admin/:id', (req, res) => {
    console.log('user_routes called')
    var id = req.body.id
    dbcon.query("SELECT * FROM admin WHERE adm_id=?",id, (err, results) => {
        if (err) {
            console.log(err)
        }
        var user_data_arr = []
        user_data_arr = JSON.stringify(results)
        //console.log(user_data_arr)
        res.send(user_data_arr)

    })
})

module.exports = user_routes;
