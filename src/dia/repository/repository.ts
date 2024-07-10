import { DayEntity } from "../Entity/dia.entity";

export interface DayRepository {
  create(data: DayEntity);
  findById(id: number): Promise<DayEntity | null>;
  findAll(): Promise<DayEntity[] | null>;
  update(id: number, data: DayEntity): Promise<DayEntity>;
  remove(id: number): Promise<DayEntity>;
}
