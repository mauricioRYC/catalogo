import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MunicipioRepository } from './repositorio/repository';
import { MunicipioEntity } from './Entity/municipio.entity';

@Injectable()
export class MunicipioService implements MunicipioRepository {
  constructor(
    @InjectRepository(MunicipioEntity)
    private readonly repository: Repository<MunicipioEntity>,
  ) {}
  async create(data: MunicipioEntity): Promise<MunicipioEntity> {
    return await this.repository.save(data);
  }
  async findById(id: number): Promise<MunicipioEntity | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['estado'],
    });
  }
  async findAll(): Promise<MunicipioEntity[] | null> {
    try {
      return await this.repository.find({relations:['estado']});
    } catch (error) {
      console.log(error, ' que pasa ');
    }
  }
  async update(id: number, data: MunicipioEntity): Promise<MunicipioEntity> {
    const entity = await this.repository.findOne({ where: { id } });
    await this.repository.update(id, {
      municipio: data.municipio,
      updatedAt: new Date(),
    });
    return entity;
  }
  async remove(id: number): Promise<MunicipioEntity> {
    const entity = await this.repository.findOne({ where: { id } });
    return await this.repository.remove(entity);
  }
}
