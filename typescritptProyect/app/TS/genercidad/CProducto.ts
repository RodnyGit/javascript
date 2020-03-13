import { CEntidad } from "./CEntidad";
    

export class CProducto extends CEntidad {
    
    private _nombre : string;
    private _marca : string;
    private _precio : number;
    private _distribuidor : string;
    private _tipo : string;

    public get nombre() : string {
        return this._nombre;
    }
    public get marca() : string {
        return this._marca;
    }    
    
    public get precio() : number {
        return this._precio;
    }   
    
    public get distribuidor() : string {
        return this._distribuidor;
    }
    
    public get tipo() : string {
        return this._tipo;
    }     
    
    constructor(id:number, nombre:string, marca:string, precio:number, distribuidor:string, tipo:string) {
        super(id);
        this._nombre=nombre;
        this._marca=marca;
        this._precio=precio;
        this._distribuidor=distribuidor;
        this._tipo=tipo;        
    }
}