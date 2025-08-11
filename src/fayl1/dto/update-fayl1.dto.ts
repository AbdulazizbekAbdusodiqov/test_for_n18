import { PartialType } from '@nestjs/mapped-types';
import { CreateFayl1Dto } from './create-fayl1.dto';

export class UpdateFayl1Dto extends PartialType(CreateFayl1Dto) {}
