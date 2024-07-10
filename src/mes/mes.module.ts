import { Module } from '@nestjs/common';
import { MesController } from './mes.controller';
import { MesService } from './mes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MesEntity } from './Entity/mes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MesEntity])],
  controllers: [MesController],
  providers: [MesService]
})
export class MesModule {}
