var mysql = require('mysql');
const jwt = require('jsonwebtoken');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const cors = require('cors');

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname));
});

app.post('/auth/register', function(request,response,next){
		
    // var salt = bcrypt.genSaltSync(10);
    // var password = bcrypt.hashSync(req.body.password, salt);
    var user = {
        id: request.body.id,
        email : request.body.email,
        username : request.body.username,
        password : request.body.password,
        // psnID: req.body.psnID,
        // picture: req.body.picture,
        // equipo: req.body.equipo,
        // dorsal: req.body.dorsal,
        // apodo: req.body.apodo
    };
    
    // insertamos los valores enviados desde el formulario
    connection.query('INSERT INTO accounts SET ?', user, function(err, rows, fields){
        if(err) throw err;
    });
    //response.send('info', 'Se ha registrado correctamente ya puede iniciar session');
    response.json(user);
}),

app.post('/auth/login', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {

                var user = results[0];
				request.session.loggedin = true;
				request.session.username = username;
				response.json(user);
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});



// app.get('/home', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.send('Welcome back, ' + request.session.username + '!');
// 	} else {
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });
