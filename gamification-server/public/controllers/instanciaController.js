var Instancia = require('../schemas/instanciaSchema');

let listar = (req, res) => {
    Instancia.find({}, (err, InstanciasList) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            InstanciasList
        });
    });
};
let agregar = (req, res) => {
    // create a new Instancia
    let newInstancia = new Instancia({
        nombre: req.body.nombre,
        instanciaId: req.body.instanciaId,
        adminGroupName: req.body.adminGroupName
    });
    Instancia.find({ instanciaId: newInstancia.instanciaId }, (err, instancia) => {
        if (instancia.length > 0) {
            return res.status(200).json({
                ok: false,
                instancia: instancia
            });
        } else {
            newInstancia.save((err, Instancia) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        err
                    });
                }
                return res.status(200).json({
                    ok: true,
                    newInstancia: Instancia
                });
            });
        }
    });

    // save the Instancia
};
let obtenerById = (req, res) => {
    Instancia.findById(req.params.id, (err, instancia) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            instancia
        });
    });
};
let actualizar = (req, res) => {
    Instancia.findById(req.params.id, (err, instancia) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        instancia.nombre = req.body.nombre;
        instancia.password = req.body.password;
        instancia.instanciaId = req.body.instanciaId;
        instancia.adminGroupName = req.body.adminGroupName
        instancia.save((err, updatedInstancia) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                Instancia: updatedInstancia
            });
        });
    });
};
let eliminar = (req, res) => {
    Instancia.findById(req.params.id, (err, instancia) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        instancia.remove((err, removedInstancia) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                Instancia: removedInstancia
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
