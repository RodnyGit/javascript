import { IEntity } from "./IEntity";

export interface IUseContainer <T>{
    Agregar<T extends IEntity>(elemento: T): IEntity;
    Obtener(id: number): IEntity|undefined;
    Listar(): IEntity[];
    Eliminar(id: number): IEntity[];
    Actualizar<T extends IEntity>(elemnto: T): IEntity[];
    Exist<T extends IEntity>(elemento: T): boolean
}