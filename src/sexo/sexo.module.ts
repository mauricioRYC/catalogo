import { Module } from '@nestjs/common';
import { SexoController } from './sexo.controller';
import { SexoService } from './sexo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SexoEntity } from './entity/sexo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SexoEntity])],
  controllers: [SexoController],
  providers: [SexoService],
})
export class SexoModule {}
