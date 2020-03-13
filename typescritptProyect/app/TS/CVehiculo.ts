import './IManejar'

export class CVehiculo implements IManejar{
    
    private _precio : number;
    private _marca : string;

    public get precio() : number {
        return this._precio;
    }
    public set precio(v : number) {
        this._precio = v;
    }
    
    public get marca() : string {
        return this._marca;
    }
    
    constructor(precio:number, marca:string) {        
        this._marca=marca;
        this._precio=precio;
    }
    public DoblarIzquierda() {
        return "doblando a la isquierda";
    } 
    public DoblarDerecha() {
        return "doblando a la isquierda";
    } 
    public Frenar() {
        return "doblando a la isquierda";
    } 
}