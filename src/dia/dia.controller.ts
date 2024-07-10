import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DiaService } from './dia.service';
import { DayEntity } from './Entity/dia.entity';

@Controller('dia')
export class DiaController {
    constructor(private readonly service:DiaService) {}

    @Post()
    async create(@Body() data:DayEntity){
        return await this.service.create(data)
    }

    @Get()
    async findAll(){
        return await this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id:number){
        return await this.service.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id:number, @Body() data:DayEntity){
        return await this.service.update(id,data);
    }

    @Delete(':id')
    async remove(@Param('id') id:number){
        return await this.service.remove(id);
    }
}
