import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0:27017/nest-mongodb-crud'), MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
