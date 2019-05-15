var mysql = require('mysql');
var bcrypt = require('bcryptjs');

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
	}

};