import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './models/messages.model';

@Injectable()
export class MessagesService {
  constructor(@InjectModel(Message.name) private readonly messageModel: Model<Message>) {}
  async getAll(): Promise<Message[]> {
    return await this.messageModel.find().exec();
  }
  async getById(id: string): Promise<Message | null> {
    return await this.messageModel.findById(id).exec();
  }
  async add(message: CreateMessageDto): Promise<Message | null> {
    return await new this.messageModel(message).save();
  }
  async delete(id: string): Promise<Message | null> {
    return await this.messageModel.findByIdAndDelete(id).exec();
  }
  async update(id: string, dto): Promise<Message | null> {
    return await this.messageModel.findByIdAndUpdate(id, dto).exec();
  }
}
