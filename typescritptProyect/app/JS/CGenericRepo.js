"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CGenericRepo {
    constructor(container) {
        this._container = [];
        this._container = container;
    }
    ;
    Agregar(elemento) {
        if (!this.Exist(elemento)) {
            this._container.push(elemento);
        }
        return elemento;
    }
    ;
    Obtener(id) {
        let result;
        result = this._container.find((value) => {
            return value.getId() === id;
        });
        return result;
    }
    ;
    Obtener2(id) {
        let result;
        this._container.forEach(value => {
            if (value.getId() === id) {
                result = value;
            }
            ;
        });
        return result;
    }
    ;
    Listar() {
        return this._container;
    }
    ;
    Eliminar(id) {
        let result = this.Obtener(id);
        if (result) {
            let lista = this._container.filter((value) => {
                return value !== result;
            });
            this._container = lista;
        }
        return this.Listar();
    }
    ;
    Actualizar(elemento) {
        if (!this.Obtener(elemento.getId())) {
            this._container.push(elemento);
        }
        else {
            let lista = this.Eliminar(elemento.getId());
            lista.push(elemento);
            this._container = lista;
        }
        return this.Listar();
    }
    ;
    Exist(elemento) {
        let result = false;
        this._container.some((value) => {
            if (value === elemento) {
                result = true;
            }
        });
        return result;
    }
    ;
}
exports.CGenericRepo = CGenericRepo;
