import { IUseContainer } from "./IUseContainer";
import { IEntity } from "./IEntity";

export class CGenericRepo<T extends IEntity> implements IUseContainer<T>{
    private _container: Array<IEntity> = [];

    constructor(container: Array<T>) {
        this._container = container;
    };

    public Agregar<T extends IEntity>(elemento: T): T {
        if (!this.Exist(elemento)) {
            this._container.push(elemento)
        }
        return elemento;
    };

    public Obtener(id: number): IEntity | undefined {
        let result: IEntity | undefined;
        result = this._container.find((value) => {
           return value.getId() === id;
        })
        return result;
    };

    public Obtener2(id: number): IEntity | undefined {
        let result: IEntity | undefined;        
        this._container.forEach(value => {
            if (value.getId() === id) {
                result = value
            };
        })
        return result
    };

    public Listar(): IEntity[] {
        return this._container
    };

    public Eliminar(id: number): IEntity[] {
        let result: IEntity | undefined = this.Obtener(id);
        if (result) {
            let lista: IEntity[] = this._container.filter((value) => {
                return value !== result;
            });
            this._container = lista;
        }
        return this.Listar();
    };

    public Actualizar<T extends IEntity>(elemento: T): IEntity[] {
        if (!this.Obtener(elemento.getId())) {
            this._container.push(elemento);
        }
        else {
            let lista: IEntity[] = this.Eliminar(elemento.getId())
            lista.push(elemento);
            this._container = lista;
        }
        return this.Listar();
    };

    public Exist<T extends IEntity>(elemento: T): boolean {
        let result: boolean = false;
        this._container.some((value) => {
            if (value === elemento) {
                result = true;
            }
        })
        return result;
    };
}


