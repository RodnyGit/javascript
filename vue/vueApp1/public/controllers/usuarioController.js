var Usuario = require('../models/usuarioModel');
let listar = (req, res) => {
	Usuario.find({}, (err, usuariosList) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		return res.status(200).json({
			ok: true,
			usuariosList
		});
	});
};
let obtenerById = (req, res) => {
	Usuario.findById(req.params.id, (err, user) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		return res.status(200).json({
			ok: true,
			user
		});
	});
};
let agregar = (req, res) => {
	// create a new user
	let newUser = new Usuario({
		nombre: req.body.nombre,
		pwstId: req.body.pwstId,
		tipo: req.body.tipo,
		grupo: req.body.grupo,
		password: req.body.password
	});
	Usuario.find({ pwstId: newUser.pwstId }, (err, user) => {
		if (user.length > 0) {
			return res.status(200).json({
				ok: false,
				existe: user
			});
		} else {
			newUser.save((err, user) => {
				if (err) {
					return res.status(400).json({
						ok: false,
						err
					});
				}
				return res.status(200).json({
					ok: true,
					newUser: user
				});
			});
		}
	});
	// save the user
};
let actualizar = (req, res) => {
	Usuario.findById(req.params.id, (err, user) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		user.nombre = req.body.nombre;
		user.password = req.body.password;
		user.tipo = req.body.tipo;
		user.grupo = req.body.grupo;
		user.save((err, updatedUser) => {
			if (err) {
				return res.status(400).json({
					ok: false,
					err
				});
			}
			return res.status(200).json({
				ok: true,
				usuario: updatedUser
			});
		});
	});
};
let eliminar = (req, res) => {
	Usuario.findById(req.params.id, (err, user) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		user.remove((err, removedUser) => {
			if (err) {
				return res.status(400).json({
					ok: false,
					err
				});
			}
			return res.status(200).json({
				ok: true,
				usuario: removedUser
			});
		});
	});
}; //nombre: req.body.nombre, email: req.body.email, password: req.body.password
let login = (req, res) => {
	if (Object.keys(req.body).length > 0) {
		var user = req.body;
		Usuario.find({ nombre: user.nombre, pwstId: user.pwstId, password: user.password }, (err, user) => {
			if (user.length > 0) {
				return res.status(200).json({
					ok: true,
					req: req.body,
					user: user
				});
			} else {
				return res.status(200).json({
					ok: true,
					data: req.body.user,
					msj: 'Nada de login'
				});
			}
		});
	} else {
		return res.status(200).json({
			ok: true,
			msj: 'Mandame dato por dios...'
		});
	}
};

module.exports = {
	listar,
	obtenerById,
	agregar,
	actualizar,
	eliminar,
	login
};
