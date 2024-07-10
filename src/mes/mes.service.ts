import { Injectable } from '@nestjs/common';
import { MesRepository } from './Entity/repository';
import { MesEntity } from './Entity/mes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MesService implements MesRepository{
    constructor(
        @InjectRepository(MesEntity)
        private readonly repository:Repository<MesEntity>
    ){}
    async create(data: MesEntity) {
        return await this.repository.save(data);
    }
    async findById(id: number): Promise<MesEntity | null> {
        return await this.repository.findOne({where:{id}});
    }
    async findAll(): Promise<MesEntity[] | null> {
        return await this.repository.find();
    }
    async update(id: number, data: MesEntity): Promise<MesEntity> {
        const entity = await this.repository.findOne({where:{id}})
        await this.repository.merge(entity,data)
        await this.repository.save(entity)
        return entity
    }
    async remove(id: number): Promise<MesEntity> {
        const entity= await this.repository.findOne({where:{id}})
        return await this.repository.remove(entity)
    }
}
