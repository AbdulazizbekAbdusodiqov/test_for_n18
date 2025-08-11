import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Fayl1Service } from './fayl1.service';
import { CreateFayl1Dto } from './dto/create-fayl1.dto';
import { UpdateFayl1Dto } from './dto/update-fayl1.dto';

@Controller('fayl1')
export class Fayl1Controller {
  constructor(private readonly fayl1Service: Fayl1Service) {}

  @Post()
  create(@Body() createFayl1Dto: CreateFayl1Dto) {
    return this.fayl1Service.create(createFayl1Dto);
  }

  @Get()
  findAll() {
    return this.fayl1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fayl1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFayl1Dto: UpdateFayl1Dto) {
    return this.fayl1Service.update(+id, updateFayl1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fayl1Service.remove(+id);
  }
}
