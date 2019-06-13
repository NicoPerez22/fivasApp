var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');

router.get('/', controllers.HomeController.index);

//routes de usuario
router.get('/auth/signup', controllers.UserController.getSignUp);
router.post('/auth/signup', controllers.UserController.postSignUp);
router.get('/auth/signin', controllers.UserController.getSignIn);
router.post('/login', controllers.UserController.postUserLogin)
router.get('/secure', controllers.UserController.secure)

router.post('/auth/signin', passport.authenticate('local',{
	successRedirect: '/users/panel',
	failureRedirect:'/auth/signin',
	failureFlash: true
}));

router.get('/auth/logout', controllers.UserController.logout);
router.get('/users/panel', AuthMiddleware.isLogged, controllers.UserController.getUserPanel);


// router.post('/auth/signin', function (req, res, next) {
// 	passport.authenticate('local', { session: false }, (err, user, info) => {
// 		if (err || !user) {
// 			return res.status(400).json({
// 				message: 'Something is not right',
// 				user: user
// 			});
// 		}
// 		req.login(user, { session: false }, (err) => {
// 			if (err) {
// 				res.send(err);
// 			}
// 			// generate a signed son web token with the contents of user object and return it in the response
// 			const token = jwt.sign(user, 'your_jwt_secret');
// 			return res.json({ user, token });
// 		});
// 	})(req, res);
// });

module.exports = router;
