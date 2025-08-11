import { Module } from '@nestjs/common';
import { Fayl2Service } from './fayl2.service';
import { Fayl2Controller } from './fayl2.controller';

@Module({
  controllers: [Fayl2Controller],
  providers: [Fayl2Service],
})
export class Fayl2Module {}
