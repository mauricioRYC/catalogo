import { NacioEntity } from "../Entity/nacionalidad.entity";

export interface NacioRepository{
    create(data:NacioEntity):Promise<NacioEntity>;
    findById(id:number):Promise<NacioEntity|null>;
    findAll():Promise<NacioEntity[]|null>;
    update(id:number,data:NacioEntity):Promise<NacioEntity>;
    remove(id:number):Promise<NacioEntity>;
}