import { Module } from '@nestjs/common';
import { NacionalidaController } from './nacionalida.controller';
import { NacionalidaService } from './nacionalida.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NacioEntity } from './Entity/nacionalidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NacioEntity])],
  controllers: [NacionalidaController],
  providers: [NacionalidaService],
})
export class NacionalidaModule {}
