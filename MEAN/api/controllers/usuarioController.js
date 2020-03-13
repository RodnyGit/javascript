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
		edad: req.body.edad,
		sexo: req.body.sexo,
		oficio: req.body.oficio,
		nacionalidad: req.body.nacionalidad,
		email: req.body.email,
		password: req.body.password
	});
	Usuario.find({ email: newUser.email }, (err, user) => {
		if (user.length > 0) {
			return res.status(200).json({
				ok: false,
				user: user
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
		user.edad = req.body.edad;
		user.sexo = req.body.sexo;
		user.oficio = req.body.oficio;
		user.nacionalidad = req.body.nacionalidad;
		user.password = req.body.password;
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
	if (Object.keys(req.body.user).length > 0) {
		var user = req.body.user;
		Usuario.find({ nombre: user.nombre, email: user.email, password: user.password }, (err, user) => {
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
