(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
            return value._id === id;
        });
        return result;
    }
    ;
    Obtener2(id) {
        let result;
        this._container.forEach(value => {
            if (value._id === id) {
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
        if (!this.Obtener(elemento._id)) {
            this._container.push(elemento);
        }
        else {
            let lista = this.Eliminar(elemento._id);
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

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CUsuario_1 = require("./CUsuario");
const CGenericRepo_1 = require("./CGenericRepo");
let user1 = new CUsuario_1.CUsuario(1, "M", "Ramon", 70, "Marine", "Cubano");
let user2 = new CUsuario_1.CUsuario(2, "M", "Paco", 54, "Cocinero", "Cubano");
let user3 = new CUsuario_1.CUsuario(3, "F", "Yania", 22, "Moza", "Cubano");
let user4 = new CUsuario_1.CUsuario(4, "F", "Lili", 33, "Tester", "Cubano");
let user5 = new CUsuario_1.CUsuario(5, "M", "Henry", 33, "Desarrollador", "Cubano");
let user6 = new CUsuario_1.CUsuario(6, "F", "Martha", 65, "Doctora", "Cubano");
let user7 = new CUsuario_1.CUsuario(7, "M", "Julio", 24, "Merolico", "Cubano");
let user8 = new CUsuario_1.CUsuario(8, "F", "Lucresia", 80, "Dulcera", "Cubano");
let container = new CGenericRepo_1.CGenericRepo([]);
container.Agregar(user1);
container.Agregar(user2);
container.Agregar(user3);
container.Agregar(user4);
container.Agregar(user5);
container.Agregar(user6);
container.Agregar(user7);
container.Agregar(user8);
////////////////////////////////////////////////
let user9 = new CUsuario_1.CUsuario(7, "M", "Julio", 40, "Merolico", "Cubano");
console.log(container.Actualizar(user9));
console.log(container.Eliminar(user2._id));
console.log(container.Obtener(user6._id));

},{"./CGenericRepo":1,"./CUsuario":2}]},{},[3]);
