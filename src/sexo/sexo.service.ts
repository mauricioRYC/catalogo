import { Injectable } from '@nestjs/common';
import { SexoRepository } from './repo/repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SexoEntity } from './entity/sexo.entity';

@Injectable()
export class SexoService implements SexoRepository {
  constructor(
    @InjectRepository(SexoEntity)
    private readonly repository: Repository<SexoEntity>,
  ) {}
  async create(data: SexoEntity) {
    return await this.repository.save(data);
  }
  async findById(id: number): Promise<SexoEntity | null> {
    return await this.repository.findOne({ where: { id } });
  }
  async findAll(): Promise<SexoEntity[] | null> {
    return await this.repository.find();
  }
  async update(id: number, data: SexoEntity): Promise<SexoEntity> {
    const entity = await this.repository.findOne({ where: { id } });
    await this.repository.update(id, { sexo: data.sexo });
    return entity;
  }
  async remove(id: number): Promise<SexoEntity> {
    const entity = await this.repository.findOne({ where: { id } });
    return await this.repository.remove(entity);
  }
}
