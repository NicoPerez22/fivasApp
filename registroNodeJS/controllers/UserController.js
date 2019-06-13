var mysql = require('mysql');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports ={

	getSignUp : function(req,res,next){
		return console.log('Todo piolita');
	},

	postSignUp : function(req,res,next){
		
		var salt = bcrypt.genSaltSync(10);
		var password = bcrypt.hashSync(req.body.password, salt);
		var user = {
			email : req.body.email,
			username : req.body.username,
			password : password,
			// psnID: req.body.psnID,
			// picture: req.body.picture,
			// equipo: req.body.equipo,
			// dorsal: req.body.dorsal,
			// apodo: req.body.apodo
		};
		var config =require('.././database/config');
		var db = mysql.createConnection(config);
		
		// conectamos la DB

		db.connect();
		
		// insertamos los valores enviados desde el formulario
		db.query('INSERT INTO users SET ?', user, function(err, rows, fields){
			if(err) throw err;
			db.end();
		});
		req.flash('info', 'Se ha registrado correctamente ya puede iniciar session');
		res.json(user);
	},

	getSignIn : function(req,res,next){
		res.json(user);
	},
	logout : function(req,res,next){
		//esta es una llamada a la funcion logout de passport
		req.logout();
	},
	getUserPanel : function(req,res,next){
		console.log('Todo piolita 3')
		res.json(user,{
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		 });
	},


	postUserLogin: function(req, res, next) {

		var config = require('.././database/config');
		//		nos conectamos a la base de datos
		var db = mysql.createConnection(config);
		db.connect();
		
		var username = req.body.username
		var password = req.body.password

		db.query('SELECT * FROM users WHERE username = ?', username, function (err) {
	   
		if( !(username === username && password === password)){
		  res.status(401).send({
			error: 'usuario o contraseña inválidos'
		  })
		  return
		}
		
	   user = {
		   username: username,
		   tipo: "feo",
		   edad: "58"
	   };
		var tokenData = {
		  user: user,
		  extra: "lauti es re groso"
		  // ANY DATA
		}
	   
		var token = jwt.sign(tokenData, 'Secret Password', {
		   expiresIn: 60 * 60 * 24 // expires in 24 hours
		})
	   
		res.send({
		  token: token
		})
	})
	},

	secure: function(req, res) {
		var token = req.headers['authorization']
		if(!token){
			res.status(401).send({
			error: "Es necesario el token de autenticación"
			})
			return
		}
	
		token = token.replace('Bearer ', '')
	
		jwt.verify(token, 'Secret Password', function(err, user) {
		if (err) {
			res.status(401).send({
			error: 'Token inválido'
			})
		} else {
			res.send({
			message: 'Correcto'
			})
		}
		})
	}
};