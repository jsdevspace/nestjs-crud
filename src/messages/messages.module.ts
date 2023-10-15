import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { Message, MessageSchema } from './models/messages.model';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService],
  imports: [MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }])],
})
export class MessagesModule {}
