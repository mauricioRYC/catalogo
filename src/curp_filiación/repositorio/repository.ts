import { FiliacionEntity } from '../Entity/filiación.entity';

export interface curp_filiaciónRepository {
  create(data: FiliacionEntity): Promise<FiliacionEntity>;
  findById(id: number): Promise<FiliacionEntity | null>;
  findAll(): Promise<FiliacionEntity[] | null>;
  update(id: number, data: FiliacionEntity): Promise<FiliacionEntity>;
  remove(id: number): Promise<FiliacionEntity>;
}
