import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { MunicipioEntity } from './Entity/municipio.entity';

@Controller('municipio')
export class MunicipioController {
    constructor(private readonly municipioService: MunicipioService) {}

    @Post()
    async create(@Body() createMunicipioDto: MunicipioEntity) {
        return await this.municipioService.create(createMunicipioDto);
    }

    @Get()
    async findAll() {
        try {
        return await this.municipioService.findAll();
        } catch (error) {
        console.log(error, ' esto es de controller ');
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        console.log("CONTROLLER ",id);
        // console.log(id);
        return await this.municipioService.findById(Number(id));
    }

    @Put(':id')
    async update(@Param() id: number, @Body() updateMunicipio: MunicipioEntity) {
        return await this.municipioService.update(id, updateMunicipio);
    }

    @Delete('id')
    async remove(@Param() id: number) {
        return await this.municipioService.remove(id);
    }
}
