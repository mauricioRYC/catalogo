import { Module } from '@nestjs/common';
import { EstadoController } from './estado.controller';
import { EstadoService } from './estado.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoEntity } from './Entity/estado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoEntity])],
  controllers: [EstadoController],
  providers: [EstadoService]
})
export class EstadoModule {}
