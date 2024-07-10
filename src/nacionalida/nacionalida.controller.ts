import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NacionalidaService } from './nacionalida.service';
import { NacioEntity } from './Entity/nacionalidad.entity';

@Controller('nacionalida')
export class NacionalidaController {
    constructor(private readonly service: NacionalidaService) {}

    @Post()
    async create(@Body() data:NacioEntity) {
        return await this.service.create(data);
    }

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.service.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() data: NacioEntity) {
        return await this.service.update(id, data);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.service.remove(id);
    }
}
