var Producto = require("../models/productoModel");

let listar = (req, res) => {
	Producto.find({}, (err, productosList) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		return res.status(200).json({
			ok: true,
			productosList
		});
	});
};
let obtener = (req, res) => {
	Producto.findById(req.params.id, (err, product) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		return res.status(200).json({
			ok: true,
			product
		});
	});
};
let agregar = (req, res) => {
	// create a new product
	let newProduct = new Producto({
		nombre: req.body.nombre,
		marca: req.body.marca,
		precio: req.body.precio,
		distribuidor: req.body.distribuidor,
		tipo: req.body.tipo
	});

	// save the product
	newProduct.save((err, product) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		return res.status(200).json({
			ok: true,
			newProduct: product
		});
	});
};
let actualizar = (req, res) => {
	Producto.findById(req.params.id, (err, product) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		product.nombre = req.body.nombre;
		product.marca = req.body.marca;
		product.precio = req.body.precio;
		product.distribuidor = req.body.distribuidor;
		product.tipo = req.body.tipo;
		product.save((err, updatedProduct) => {
			if (err) {
				return res.status(400).json({
					ok: false,
					err
				});
			}
			return res.status(200).json({
				ok: true,
				producto: updatedProduct
			});
		});
	});
};
let eliminar = (req, res) => {
	Producto.findById(req.params.id, (err, product) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}
		product.remove((err, removedProduct) => {
			if (err) {
				return res.status(400).json({
					ok: false,
					err
				});
			}
			return res.status(200).json({
				ok: true,
				producto: removedProduct
			});
		});
	});
};

module.exports = {
	listar,
	obtener,
	agregar,
	actualizar,
	eliminar
};
