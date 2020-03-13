import { IEntity } from "./IEntity";

export class CUsuario implements IEntity {
  private _id: number;
  private _nombre: string;
  private _sexo: string;
  private _edad: number;
  private _oficio: string;
  private _nacionalidad: string;

  public getId(): number {
    return this._id;
  }

  public get nacionalidad(): string {
    return this._nacionalidad;
  }

  public get oficio(): string {
    return this._oficio;
  }

  public get edad(): number {
    return this._edad;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public get sexo(): string {
    return this._sexo;
  }

  constructor(
    id: number,
    sexo: string,
    nombre: string,
    edad: number,
    oficio: string,
    nacionalidad: string
  ) {
    this._id = id;
    this._nombre = nombre;
    this._sexo = sexo;
    this._edad = edad;
    this._oficio = oficio;
    this._nacionalidad = nacionalidad;
  }
}
