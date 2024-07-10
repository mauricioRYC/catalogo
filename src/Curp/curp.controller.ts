import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CurpService } from './curp.service';
import { Create, Params } from './DTO/curp.dto';

@Controller('curp')
export class CurpController {
  constructor(private readonly curpService: CurpService) {}

  @Post()
  create(@Body() createCurpDto: Create) {
    return this.curpService.create(createCurpDto);
  }

  @Get()
  findAll() {
    return this.curpService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: Params) {
    return this.curpService.find(params.id);
  }

  @Put(':id')
  update(@Param() id: Params, @Body() updateCurpDto: Create) {
    return this.curpService.edit(id.id, updateCurpDto);
  }

  @Delete(':id')
  remove(@Param() id: Params) {
    return this.curpService.delete(id.id);
  }
}
