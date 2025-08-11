import { Injectable } from '@nestjs/common';
import { CreateFayl1Dto } from './dto/create-fayl1.dto';
import { UpdateFayl1Dto } from './dto/update-fayl1.dto';

@Injectable()
export class Fayl1Service {
  create(createFayl1Dto: CreateFayl1Dto) {
    return 'This action adds a new fayl1';
  }

  findAll() {
    return `This action returns all fayl1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fayl1`;
  }

  update(id: number, updateFayl1Dto: UpdateFayl1Dto) {
    return `This action updates a #${id} fayl1`;
  }

  remove(id: number) {
    return `This action removes a #${id} fayl1`;
  }
}
