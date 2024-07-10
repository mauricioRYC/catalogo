import { Module } from '@nestjs/common';
import { CurpController } from './curp.controller';
import { CurpService } from './curp.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurpEntity } from './Entity/curp.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CurpEntity])],
  controllers: [CurpController],
  providers: [CurpService],
})
export class CurpModule {}
