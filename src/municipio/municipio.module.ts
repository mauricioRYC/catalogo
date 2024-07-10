import { Module } from '@nestjs/common';
import { MunicipioController } from './municipio.controller';
import { MunicipioService } from './municipio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipioEntity } from './Entity/municipio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipioEntity])],
  controllers: [MunicipioController],
  providers: [MunicipioService],
})
export class MunicipioModule {}
