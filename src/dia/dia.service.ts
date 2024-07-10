import { Injectable } from '@nestjs/common';
import { DayRepository } from './repository/repository';
import { DayEntity } from './Entity/dia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DiaService implements DayRepository{
    constructor(
        @InjectRepository(DayEntity)
        private readonly repository: Repository<DayEntity>
    ) {
        
    }
    async create(data: DayEntity) {
        return await this.repository.save(data)
    }
    async findById(id: number): Promise<DayEntity | null> {
        return await this.repository.findOne({where:{id}})
    }
    async findAll(): Promise<DayEntity[] | null> {
        return await this.repository.find()
    }
    async update(id: number, data: DayEntity): Promise<DayEntity> {
        const entity = await this.repository.findOne({where:{id}})
        await this.repository.merge(entity, data);
        await this.repository.save(entity);
        return entity;
    }
    async remove(id: number): Promise<DayEntity> {
        const entity = await this.repository.findOne({where:{id}})
        return await this.repository.remove(entity)
    }
}
