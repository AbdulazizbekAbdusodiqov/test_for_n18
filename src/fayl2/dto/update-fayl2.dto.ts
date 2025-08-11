import { PartialType } from '@nestjs/mapped-types';
import { CreateFayl2Dto } from './create-fayl2.dto';

export class UpdateFayl2Dto extends PartialType(CreateFayl2Dto) {}
