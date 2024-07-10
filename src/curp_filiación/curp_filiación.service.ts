import { Injectable } from '@nestjs/common';
import { curp_filiaciónRepository } from './repositorio/repository';
import { FiliacionEntity } from './Entity/filiación.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CurpFiliaciónService implements curp_filiaciónRepository {
  constructor(
    @InjectRepository(FiliacionEntity)
    private readonly repository: Repository<FiliacionEntity>,
  ) {}
  async create(data: FiliacionEntity): Promise<FiliacionEntity> {
    return await this.repository.save(data);
  }
  async findById(id: number): Promise<FiliacionEntity | null> {
    return await this.repository.findOne({ where: { id } });
  }
  async findAll(): Promise<FiliacionEntity[] | null> {
    return await this.repository.find();
  }
  async update(id: number, data: FiliacionEntity): Promise<FiliacionEntity> {
    let entity = await this.repository.findOne({ where: { id } });
    entity = this.repository.merge(entity, data);
    await this.repository.save(entity);
    return entity;
  }
  async remove(id: number): Promise<FiliacionEntity> {
    const entity = await this.repository.findOne({ where: { id } });
    return await this.repository.remove(entity);
  }
}
