import { Injectable } from '@nestjs/common';
import { EstadoRepository } from './repositorio/repository';
import { EstadoEntity } from './Entity/estado.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoService implements EstadoRepository {
    constructor(
        @InjectRepository(EstadoEntity)
        private readonly repository: Repository<EstadoEntity>,
    ) {}

    async create(data: EstadoEntity): Promise<EstadoEntity> {
        return await this.repository.save(data);
    }

    async findById(id: number): Promise<EstadoEntity | null> {
        return await this.repository.findOne({ where: { id } });
    }

    async findAll(): Promise<EstadoEntity[] | null> {
        return await this.repository.find();
    }

    async update(id: number, data: EstadoEntity): Promise<EstadoEntity> {
        let entity = await this.repository.findOne({ where: { id } });
        entity = this.repository.merge(entity, data);
        await this.repository.save(entity)
        return entity
    }

    async remove(id: number): Promise<EstadoEntity> {
        const entity = await this.repository.findOne({ where: { id } });
        return await this.repository.remove(entity);
    }
}
