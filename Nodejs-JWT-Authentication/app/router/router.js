const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
const cors = require('cors');

module.exports = function(app) {

	app.use(cors());
		const controller = require('../controller/controller.js');
		const controllerEquipo = require('../controller/controllerEquipos.js');
 
	app.post('/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);
	
	app.post('/auth/signin', controller.signin);
	
	app.get('/api/test/user', [authJwt.verifyToken], controller.userContent);
	
	app.get('/api/test/pm', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);
	
	app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

  app.route('/tasks')
    .get(controllerEquipo.list_all_tasks)
    .post(controllerEquipo.create_a_task);
   
   app.route('/tasks/:taskId')
    .get(controllerEquipo.read_a_task)
    .put(todcontrollerEquipooList.update_a_task)
    .delete(controllerEquipo.delete_a_task);
    };

	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
		res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
		res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
		next();
	  });
}