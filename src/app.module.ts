import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ErrorHandlingServiceModule } from './error-handling-service/error-handling-service.module';

@Module({
  imports: [ErrorHandlingServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
