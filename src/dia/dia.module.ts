import { Module } from '@nestjs/common';
import { DiaController } from './dia.controller';
import { DiaService } from './dia.service';
import { DayEntity } from './Entity/dia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([DayEntity])],
  controllers: [DiaController],
  providers: [DiaService]
})
export class DiaModule {}
