import { Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';

import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Get()
  async allMessages() {
    return this.messagesService.getAll();
  }

  @Post()
  async createMessage(@Body() dto: CreateMessageDto) {
    return this.messagesService.add(dto);
  }

  @Get(':id')
  async getMessage(@Param('id') id: string) {
    return this.messagesService.getById(id);
  }

  @Delete(':id')
  async deleteMessage(@Param('id') id: string) {
    return this.messagesService.delete(id);
  }

  @Put(':id')
  async updateMessage(@Param('id') id: string, @Body() dto: CreateMessageDto) {
    return this.messagesService.update(id, dto);
  }
}
