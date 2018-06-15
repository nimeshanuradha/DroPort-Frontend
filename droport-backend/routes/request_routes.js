

// THIS IS ROUTES FILE FOR FR RELATED ROUTES //
const request_routes = require('express').Router();
const dbcon = require('../dbconnection')


function get_last_req_id() {
	return new Promise(function (resolve, reject) {
		dbcon.query('SELECT req_id as id FROM request ORDER BY req_id DESC LIMIT 1', (err, rows) => {
			console.log("in qry " + rows[0].id)
			if (rows[0].id > 0) {
				resolve(rows[0].id)
				console.log("in qry resolve " + rows[0].id)
			} else {
				reject("erro in promise")
			}

		});

	})
};


// POST- New  flying Request

request_routes.post('/new', (req, res) => {
	console.log('data recieved to back end')

	//getting data from http request
	// var promise_data = get_last_req_id()
	// var asd = promise_data.then(function(data){
	// 	req_id = data;
	// 	return req_id
	// })

	// console.log("global " + asd.catch(req_id))


	var req_id = Math.floor((Math.random() * 10000) + 1);
	var req_type = req.body.req_type
	var district = req.body.district
	var town = req.body.town
	var area = req.body.area
	var date = req.body.date
	var time = req.body.time
	var cus_id = null
	var map_area = null
	var start_time = null
	var end_time = null
	var quality_categoty = null
	var max_flight_time = null
	var drone_recieved = "pending";
	var media_recieved = "pending";
	var media_confirmed = "pending";
	var completed = "pending"
	var cus_id = "45"	// cus_id must get using sessions
	var own_id = null
	var pil_id = null
	var dro_id = null

	// Updating request table

	var req_data = [req_id, district, town, area, date, time, cus_id, map_area]
	console.log(req_data)
	var sql1 = "INSERT INTO request(req_id,district,town,area,date,time,cus_id,map_area) VALUES(?,?,?,?,?,?,?,?)"
	dbcon.query(sql1, req_data, (err, result) => {
		if (err) {
			console.log("Error in query request")
		} else {
			console.log("Number of records inserted to request: " + result.affectedRows);
		}
	});

	//Updating req_status table

	var status_data = [req_id, drone_recieved, media_recieved, media_confirmed, completed]
	var sql2 = "INSERT INTO req_status(req_id,drone_recieved,media_recieved,media_confirmed,completed) VALUES(?,?,?,?,?)"
	dbcon.query(sql2, status_data, (err, result) => {
		if (err) {
			console.log("Error in query req_status" + err)
		} else {
			console.log("Number of records inserted to req_status: " + result.affectedRows);
		}
	})


	//Updating req_assigned table

	var assigned_data = [req_id, cus_id, own_id, pil_id, dro_id]
	var sql3 = "INSERT INTO req_assigned(req_id,cus_id,own_id,pil_id,dro_id) VALUES(?,?,?,?,?)"
	dbcon.query(sql3, assigned_data, (err, result) => {
		if (err) {
			console.log("Error in query req_assigned" + err)
		} else {
			console.log("Number of records inserted to req_assigned: " + result.affectedRows);
		}
	})


})

//GET All requests
request_routes.get("/all", (req, res) => {

	dbcon.query("SELECT * FROM request", (err, results) => {
		if (err) {
			console.log(err)
		}
		var result_data = []
		result_data = JSON.stringify(results)
		res.send(result_data)

	})



})



//GET All pending requests
request_routes.get("/all_pending", (req, res) => {
	console.log("GET All pending requests recieved to back end")
	dbcon.query("SELECT * FROM request WHERE req_id IN (SELECT req_id FROM req_assigned WHERE own_id IS NULL)", (err, results) => {
		if (err) {
			console.log(err)
		}
		console.log(JSON.stringify(results))
		res.send(results)
	})
})



//GET one request by ID
request_routes.get("/:id", (req, res) => {
	var req_id = req.params.id
	dbcon.query("SELECT * FROM request WHERE req_id= ? ",req_id, (err, results) => {
		if (err) {
			console.log(err)
		}
		var result_data = []
		result_data = JSON.stringify(results)
		res.send(result_data)
		//console.log(result_data)

	})

})


module.exports = request_routes



