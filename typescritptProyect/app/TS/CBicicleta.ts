import { CVehiculo } from './CVehiculo';

export class CBicicleta extends CVehiculo {

    private _cantRuedas: number;
    private _tamanno: string;

    public get cantRuedas(): number {
        return this._cantRuedas;
    }


    public get tamanno(): string {
        return this._tamanno;
    }


    constructor(precio: number, marca: string, ruedas: number, tamanno: string) {
        super(precio, marca);
        this._cantRuedas = ruedas;
        this._tamanno = tamanno;
    }
}

let newBici = new CBicicleta(25, "foenix", 2, "mediana");
