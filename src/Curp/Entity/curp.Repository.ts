import { CurpEntity } from './curp.entity';

export interface CurpRepository {
    create(data: CurpEntity): Promise<CurpEntity>;
    findAll(): Promise<CurpEntity[]>;
    find(id: number): Promise<CurpEntity | null>;
    edit(id: number, data: CurpEntity): Promise<CurpEntity>;
    delete(id: number): Promise<CurpEntity>;
}
