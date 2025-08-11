import { Module } from '@nestjs/common';
import { Fayl1Service } from './fayl1.service';
import { Fayl1Controller } from './fayl1.controller';

@Module({
  controllers: [Fayl1Controller],
  providers: [Fayl1Service],
})
export class Fayl1Module {}
