export class CEntidad {

    _id: number;
    public get id(): number {
        return this._id;
    }

    constructor(id:number) {
        this._id = id;
    }
}