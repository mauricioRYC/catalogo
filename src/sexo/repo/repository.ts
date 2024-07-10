import { SexoEntity } from "../entity/sexo.entity";

export interface SexoRepository {
  create(data: SexoEntity);
  findById(id: number): Promise<SexoEntity | null>;
  findAll(): Promise<SexoEntity[] | null>;
  update(id: number, data: SexoEntity): Promise<SexoEntity>;
  remove(id: number): Promise<SexoEntity>;
}
