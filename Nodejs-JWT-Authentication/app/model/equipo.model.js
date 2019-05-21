module.exports = (sequelize, Sequelize) => {
	const Equipo = sequelize.define('equipos', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true
	  },
	  nombre: {
		  type: Sequelize.STRING
	  }
	});
	
	return Equipo;
}