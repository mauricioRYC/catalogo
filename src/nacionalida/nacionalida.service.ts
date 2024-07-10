import { Injectable } from '@nestjs/common';
import { NacioRepository } from './repositorio/repositorio';
import { NacioEntity } from './Entity/nacionalidad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NacionalidaService implements NacioRepository {
    constructor(
        @InjectRepository(NacioEntity)
        private readonly nacioRepository: Repository<NacioEntity>,
    ) {}
    async create(data: NacioEntity): Promise<NacioEntity> {
        return await this.nacioRepository.save(data);
    }
    async findById(id: number): Promise<NacioEntity | null> {
        return await this.nacioRepository.findOne({ where: { id } });
    }
    async findAll(): Promise<NacioEntity[] | null> {
        return await this.nacioRepository.find();
    }
    async update(id: number, data: NacioEntity): Promise<NacioEntity> {
        const entity = await this.nacioRepository.findOne({where:{id}})
        this.nacioRepository.update(id,{nacionalidad:data.nacionalidad,updatedAt:new Date()})
        return entity;
    }
    async remove(id: number): Promise<NacioEntity> {
        const entity = await this.nacioRepository.findOne({where:{id}})
        this.nacioRepository.delete(id)
        return entity;
    }
}
