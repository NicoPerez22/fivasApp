const db = require('../config/db.config.js');
const config = require('../config/config.js');
const Equipo = db.equipo;
const Role = db.role;

const Op = db.Sequelize.Op;

exports.listGastos = function (req, res, next) {
    Gasto.find(function (err, equipos) {
        if (err) {
            res.error('Error al intentar recuperar todas las Gastos');
            res.error('El error es: ' + err);
            return next(err);
        }
        res.json({message: "Las Gastos son: ", Equipo: equipos});
    });
};

exports.getEquipos = function ( req, res, next) {
    var validId = Equipo.findOne(req.equipos.id);
    if (validId == false) {
        return res.json(412, {message: "Id inválido"});
    }
    equipos.findOne({_id: validId}, function (err, equipos) {
        if (err) {
            res.error('Error al buscar un equipo con id: ' + req.params.id + ' el error es:');
            res.error(err);
            return next(err);
        }
        if (equipos != undefined) {
            return res.json({message: "Los equipos son: ", Equipo: equipos});
        } else {
            return res.json({message: 'No existe el equipo'});
        }
    });
};


// Métodos POST para /api/jugadores
exports.createGastos = function (req, res, next) {
    console.log("la ocncha de tu puta madre")
	Equipo.create({
		nombre: req.body.nombre,
	})
    Equipo.save(equipos => { (err)
        if (err) {
            res.error('Error al añadir  la Gastos con jugador_key: ' + equipos.nombre + ' el error es:');
            res.error(err);
            return next(err);
        }
        res.info('Gastos añadida con éxito');
        return res.json({message: 'Gastos añadida', Equipo: equipos});
    });

};