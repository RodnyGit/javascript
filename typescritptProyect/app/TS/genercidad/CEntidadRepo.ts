import { CEntidad } from "./CEntidad";

export class CEntidadRepo{   

    private _container: Array<CEntidad> = [];

    public get container(): Array<CEntidad> {
        return this._container
    }

    constructor(container: Array<CEntidad>) {
        this._container = container;
    }

    public AddValue(value: CEntidad) {
        if (!this.contains(value)) {
            this._container.push(value);
        }
    }

    public contains(value: CEntidad): boolean {
        let exist: boolean = false;
        this._container.some((element) => {
            if (value === element) {
                exist = true;
            }
        })
        return exist;
    }

    
}