import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Fayl2Service } from './fayl2.service';
import { CreateFayl2Dto } from './dto/create-fayl2.dto';
import { UpdateFayl2Dto } from './dto/update-fayl2.dto';

@Controller('fayl2')
export class Fayl2Controller {
  constructor(private readonly fayl2Service: Fayl2Service) {}

  @Post()
  create(@Body() createFayl2Dto: CreateFayl2Dto) {
    return this.fayl2Service.create(createFayl2Dto);
  }

  @Get()
  findAll() {
    return this.fayl2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fayl2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFayl2Dto: UpdateFayl2Dto) {
    return this.fayl2Service.update(+id, updateFayl2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fayl2Service.remove(+id);
  }
}
