import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Fayl2Module } from './fayl2/fayl2.module';
import { Fayl1Module } from './fayl1/fayl1.module';

@Module({
  imports: [Fayl1Module, Fayl2Module],
  
  controllers: [AppController],
  providers: [AppService],
  exports: [Fayl1Module, Fayl2Module], // Exporting modules if needed
})
export class AppModule {}
