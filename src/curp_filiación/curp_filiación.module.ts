import { Module } from '@nestjs/common';
import { CurpFiliaciónController } from './curp_filiación.controller';
import { CurpFiliaciónService } from './curp_filiación.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FiliacionEntity } from './Entity/filiación.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FiliacionEntity])],
  controllers: [CurpFiliaciónController],
  providers: [CurpFiliaciónService],
})
export class CurpFiliaciónModule {}
