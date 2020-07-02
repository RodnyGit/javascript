var Campagna = require('../schemas/campagnaSchema');
var Regla = require('../schemas/reglaSchema');
var Instancia = require('../schemas/instanciaSchema');

let listar = (req, res) => {
    Campagna.find({}, (err, CampagnasList) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            CampagnasList
        });
    });
};
let agregar = (req, res) => {
    // create a new Campagna
    let newCampagna = new Campagna({
        nombre: req.body.nombre,
        reglaId: req.body.reglaId,
        instanciaId: req.body.instanciaId,
        config: req.body.config
    });
    Regla.findById(req.body.reglaId, (err, regla) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
    });
    Instancia.findById(req.body.instanciaId, (err, instancia) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        newCampagna.save((err, Campagna) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            instancia.campagnas.push(Campagna._id);
            instancia.save((err, updatedInstancia) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        err
                    });
                }
            });
            return res.status(200).json({
                ok: true,
                newCampagna: Campagna
            });
        });
    });



};
let obtenerById = (req, res) => {
    Campagna.findById(req.params.id, (err, campagna) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            campagna
        });
    });
};
let actualizar = (req, res) => {
    Campagna.findById(req.params.id, (err, campagna) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        campagna.nombre = req.body.nombre;
        campagna.empresaId = req.body.empresaId;
        campagna.reglaId = req.body.reglaId;
        campagna.config = req.body.config;
        campagna.save((err, updatedCampagna) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                Campagna: updatedCampagna
            });
        });
    });
};
let eliminar = (req, res) => {
    Campagna.findById(req.params.id, (err, campagna) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        Instancia.findById(campagna.instanciaId, (err, instancia) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            var arr = [];
            arr = instancia.campagnas.filter(e => {
                return e != req.params.id
            })
            instancia.campagnas = JSON.parse(JSON.stringify(arr))
            instancia.save((err, updatedInstancia) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        err
                    });
                }
                console.log(updatedInstancia);
            });
        });
        campagna.remove((err, removedCampagna) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                Campagna: removedCampagna
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
