import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SexoService } from './sexo.service';
import { SexoEntity } from './entity/sexo.entity';

@Controller('sexo')
export class SexoController {
  constructor(private readonly service: SexoService) {}

  @Post()
  async create(@Body() crate: SexoEntity) {
    return await this.service.create(crate);
  }

  @Get()
  async findAll() {
    return await this.service.findAll();
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() crate: SexoEntity) {
    return await this.service.update(id, crate);
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.service.findById(id);
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.service.remove(id);
  }
}
