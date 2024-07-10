import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EstadoService } from './estado.service';
import { EstadoEntity } from './Entity/estado.entity';

@Controller('estado')
export class EstadoController {
    constructor(private readonly service:EstadoService) {}
    @Post()
    async create(@Body() data:EstadoEntity) {
        return await this.service.create(data);
    }

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id:string) {
        return await this.service.findById(Number(id));
    }

    @Put(":id")
    async update(@Param('id') id:number, @Body() data:EstadoEntity) {
        return await this.service.update(id,data);
    }
    @Delete(":id")
    async remove(@Param('id') id:number) {
        return await this.service.remove(id);
    }
}
