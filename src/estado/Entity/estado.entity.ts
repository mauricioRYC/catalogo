import { MunicipioEntity } from 'src/municipio/Entity/municipio.entity';
import {
    Entity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';

@Entity('estados')
export abstract class EstadoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'estado',
    type: 'varchar',
    length: 100,
  })
  estado: string;

  @Column({
    name: 'is_activated',
    type: 'boolean',
    default: true,
  })
  isActivated: boolean;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    default: null,
  })
  deletedAt: Date;
  
  @OneToMany((municipio) => MunicipioEntity, (id_municipio) => id_municipio.id, {
    eager: false,
    lazy: false,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  orphanedRowAction: 'delete',
  })
  municipio: MunicipioEntity[];
}


