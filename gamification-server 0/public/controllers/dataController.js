var Data = require('../schemas/dataSchema');

let listar = (req, res) => {
	Data.find({}, (err, DataList) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		return res.status(200).json({
			ok: true,
			DataList
		});
	});
};
let agregar = (req, res) => {
	// create a new Data
	let newData = new Data({
		nombre: req.body.nombre,
		params: req.body.params,
		nivel: req.body.nivel,
		// paramList: req.body.paramList
	});
	newData.save((err, Data) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		return res.status(200).json({
			ok: true,
			newData: Data
		});
	});
	// save the Data
};
let obtenerById = (req, res) => {
	Data.findById(req.params.id, (err, data) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		return res.status(200).json({
			ok: true,
			data
		});
	});
};
let actualizar = (req, res) => {
	Data.findById(req.params.id, (err, data) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		data.nombre = req.body.nombre;
		data.data = req.body.data;
		data.save((err, updatedData) => {
			if (err) {
				return res.status(400).json({
					ok: false,
					err
				});
			}
			return res.status(200).json({
				ok: true,
				Data: updatedData
			});
		});
	});
};
let eliminar = (req, res) => {
	Data.findById(req.params.id, (err, data) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		data.remove((err, removedData) => {
			if (err) {
				return res.status(400).json({
					ok: false,
					err
				});
			}
			return res.status(200).json({
				ok: true,
				Data: removedData
			});
		});
	});
};

module.exports = {
	listar,
	agregar,
	eliminar,
	obtenerById,
	actualizar
};
