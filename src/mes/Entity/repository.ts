import { MesEntity } from "./mes.entity";

export interface MesRepository {
    create(data: MesEntity);
    findById(id: number): Promise<MesEntity | null>;
    findAll(): Promise<MesEntity[] | null>;
    update(id: number, data: MesEntity): Promise<MesEntity>;
    remove(id: number): Promise<MesEntity>;
}
