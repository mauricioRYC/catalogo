import { MunicipioEntity } from '../Entity/municipio.entity';

export interface MunicipioRepository {
  create(data: MunicipioEntity): Promise<MunicipioEntity>;
  findById(id: number): Promise<MunicipioEntity | null>;
  findAll(): Promise<MunicipioEntity[] | null>;
  update(id: number, data: MunicipioEntity): Promise<MunicipioEntity>;
  remove(id: number): Promise<MunicipioEntity>;
}
