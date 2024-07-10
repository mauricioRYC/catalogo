import { EstadoEntity } from "../Entity/estado.entity";

export interface EstadoRepository{
    create(data:EstadoEntity):Promise<EstadoEntity>;
    findById(id:number):Promise<EstadoEntity|null>;
    findAll():Promise<EstadoEntity[]|null>;
    update(id:number,data:EstadoEntity):Promise<EstadoEntity>;
    remove(id:number):Promise<EstadoEntity>;
}