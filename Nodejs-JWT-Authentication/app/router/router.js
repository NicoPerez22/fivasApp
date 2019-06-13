const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
const cors = require('cors');

module.exports = function(app) {

	app.use(cors());
		const controller = require('../controller/controller.js');
		const controllerEquipo = require('../controller/controllerEquipos.js');
 
	app.post('/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);
	
	app.post('/auth/signin', controller.signin);
	
	app.get('/test/user', [authJwt.verifyToken], controller.userContent);
	
	app.get('/api/test/pm', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);
	
	app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

	app.get('/json',  controllerEquipo.getAllTask);

	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
		res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
		res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
		next();
	  });
}