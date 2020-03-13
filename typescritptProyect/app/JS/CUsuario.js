"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CUsuario {
    constructor(id, sexo, nombre, edad, oficio, nacionalidad) {
        this._id = id;
        this._nombre = nombre;
        this._sexo = sexo;
        this._edad = edad;
        this._oficio = oficio;
        this._nacionalidad = nacionalidad;
    }
    getId() {
        return this._id;
    }
    get nacionalidad() {
        return this._nacionalidad;
    }
    get oficio() {
        return this._oficio;
    }
    get edad() {
        return this._edad;
    }
    get nombre() {
        return this._nombre;
    }
    get sexo() {
        return this._sexo;
    }
}
exports.CUsuario = CUsuario;
