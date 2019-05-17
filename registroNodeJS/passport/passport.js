var LocalStrategy = require('passport-local').Strategy;
var mysql = require('mysql');
var bcrypt = require('bcryptjs');

module.exports = function (passport) {

	passport.serializeUser(function (user, done) {
		done(null, user);
	});

	passport.deserializeUser(function (user, done) {
		done(null, user);
	});

	//passport.deserializeUser((id, done)=>{ passport.deserializeUser((id, done) => { User.findById(id).then((user) => { done(null, user); }).catch(done); }); });

	passport.use(new LocalStrategy({
		passReqToCallback: true

	}, function (req, email, password, done) {

		var config = require('.././database/config');
		//		nos conectamos a la base de datos
		var db = mysql.createConnection(config);
		db.connect();

		db.query('SELECT * FROM users WHERE username = ?', username, function (err, rows, fields) {
			if (err) throw err;
			db.end();
			if (rows.length > 0) {

				var user = rows[0];
				if (bcrypt.compareSync(password, user.password)) {
					return done(null, {
						id: user.id,
						username: user.username,
						email: user.email
					});
				}
			}

			return done(null, false, req.flash('authmessage', 'Email o Password incorrecto'));
		});


	}
	));

};

// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// const passportJWT = require("passport-jwt");
// const JWTStrategy   = passportJWT.Strategy;
// const ExtractJWT = passportJWT.ExtractJwt;

// passport.use(new LocalStrategy({
// 	usernameField: 'email',
// 	passwordField: 'password'
// },
// 	function (email, password, cb) {
// 		console.log("entre por la local");
// 		//this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
// 		return UserModel.findOne({ email, password })
// 			.then(user => {
// 				if (!user) {
// 					return cb(null, false, { message: 'Incorrect email or password.' });
// 				}
// 				return cb(null, user, { message: 'Logged In Successfully' });
// 			})
// 			.catch(err => cb(err));
// 	}
// ));

// passport.use(new JWTStrategy({
// 	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
// 	secretOrKey   : 'your_jwt_secret'
// },
// function (jwtPayload, cb) {
// 	console.log("entre por la jwt");
// 	//find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
// 	return UserModel.findOneById(jwtPayload.id)
// 		.then(user => {
// 			return cb(null, user);
// 		})
// 		.catch(err => {
// 			return cb(err);
// 		});
// }
// ));