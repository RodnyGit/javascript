import { CVehiculo } from "./CVehiculo";
import "./IMotor";

export class CAuto extends CVehiculo implements IMotor{
    

    private _tipoMotor: string;
    private _tipoMecanica: string;

    public get tipoMotor(): string {
        return this._tipoMotor;
    }

    public get tipoMecanica(): string {
        return this._tipoMecanica;
    }

    constructor(precio: number, marca: string, motor: string, mecanica: string) {
        super(precio, marca);
        this._tipoMotor = motor;
        this._tipoMecanica = mecanica;
    }
    public Arrancar(){
        return "Arrancando";
    }
    public Acelerar(){
        return "Acelerando";
    }
    public Apagar(){
        return "Apagado";
    }
}

let newAuto=new CAuto(22,"toyota","gasolina","automatico");

