import { Injectable } from '@nestjs/common';
import { CreateFayl2Dto } from './dto/create-fayl2.dto';
import { UpdateFayl2Dto } from './dto/update-fayl2.dto';

@Injectable()
export class Fayl2Service {
  create(createFayl2Dto: CreateFayl2Dto) {
    return 'This action adds a new fayl2';
  }

  findAll() {
    return `This action returns all fayl2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fayl2`;
  }

  update(id: number, updateFayl2Dto: UpdateFayl2Dto) {
    return `This action updates a #${id} fayl2`;
  }

  remove(id: number) {
    return `This action removes a #${id} fayl2`;
  }
}
