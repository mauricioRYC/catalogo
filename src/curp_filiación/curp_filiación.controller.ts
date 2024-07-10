import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CurpFiliaciónService } from './curp_filiación.service';
import { FiliacionEntity } from './Entity/filiación.entity';

@Controller('curpfiliación')
export class CurpFiliaciónController {
    constructor(private readonly service: CurpFiliaciónService) {}
    @Post()
    async create(@Body() data:FiliacionEntity){
        return await this.service.create(data);
    }

    @Get()
    async findAll(){
        return await this.service.findAll();
    }
    @Get(':id')
    async findById(@Param('id') id:string){
        return await this.service.findById(Number(id));
    }
    @Put(":id")
    async update(@Param('id') id:number, @Body() data:FiliacionEntity){
        return await this.service.update(id,data);
    }
    @Delete(":id")
    async remove(@Param('id') id:number){
        return await this.service.remove(id);
    }
}
