import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Fayl2Module } from './fayl2/fayl2.module';

@Module({
  imports: [Fayl2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
