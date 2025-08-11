import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Fayl1Module } from './fayl1/fayl1.module';

@Module({
  imports: [Fayl1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
