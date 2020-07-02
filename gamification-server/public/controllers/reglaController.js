var Regla = require('../schemas/reglaSchema');

let listar = (req, res) => {
    Regla.find({}, (err, ReglasList) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            ReglasList
        });
    });
};
let agregar = (req, res) => {
    // create a new Regla
    let newRegla = new Regla({
        nombre: req.body.nombre,
        data: req.body.data
    });
    newRegla.save((err, Regla) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            newRegla: Regla
        });
    });
    // save the Regla
};
let obtenerById = (req, res) => {
    Regla.findById(req.params.id, (err, regla) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            regla
        });
    });
};
let actualizar = (req, res) => {
    Regla.findById(req.params.id, (err, regla) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        regla.nombre = req.body.nombre;
        regla.data = req.body.data;
        regla.save((err, updatedRegla) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                Regla: updatedRegla
            });
        });
    });
};
let eliminar = (req, res) => {
    Regla.findById(req.params.id, (err, regla) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        regla.remove((err, removedRegla) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                Regla: removedRegla
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
