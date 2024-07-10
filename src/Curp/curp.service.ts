import { Injectable } from '@nestjs/common';
import { CurpRepository } from './Entity/curp.Repository';
import { CurpEntity } from './Entity/curp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Create } from './DTO/curp.dto';

@Injectable()
export class CurpService implements CurpRepository {
    constructor(
        @InjectRepository(CurpEntity)
        private readonly repository: Repository<CurpEntity>,
    ) {}

    async create(data: Create): Promise<CurpEntity> {
        const curpEntity = new CurpEntity();
        curpEntity.curp = data.curp;
        curpEntity.documento = data.documento
        return await this.repository.save(curpEntity);
    }
    async findAll(): Promise<CurpEntity[]> {
        const curp = await this.repository.find({});
        return curp;
    }
    async find(id: number): Promise<CurpEntity | null> {
        const curp = await this.repository.findOne({ where: { id: id } });
        if (!curp) return null;
        return curp;
    }
    async edit(id: number, data: Create): Promise<CurpEntity> {
        console.log(id);
        const curp = await this.repository.findOne({ where: { id: id } });
        console.log(curp);
        if (!curp) return null;
        const curpEntity = new CurpEntity();
        curpEntity.curp = data.curp;
        await this.repository.update(id, {
        curp: data.curp,
        updatedAt: new Date(),
        });
        return await this.repository.findOne({ where: { id } });
    }
    async delete(id: number): Promise<CurpEntity> {
        const curp = await this.repository.findOne({ where: { id } });
        if (!curp) return null;
        curp.deletedAt = new Date();
        return await this.repository.save(curp);
    }
}
