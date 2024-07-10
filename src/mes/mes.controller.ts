import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MesService } from './mes.service';
import { MesEntity } from './Entity/mes.entity';

@Controller('mes')
export class MesController {
    constructor(private readonly service:MesService) {}

    @Post()
    async create(@Body()create:MesEntity){
        return await this.service.create(create);
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
    async update(@Param('id') id:number,@Body()data:MesEntity){
        return await this.service.update(id,data);
    }

    @Delete(':id')
    async remove(@Param('id') id:number){
        return await this.service.remove(id);
    }
}
