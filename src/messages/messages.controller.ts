import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessageInterface } from './MessageInterface';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }
  @Get(':id')
  findById(@Param('id') id: number) {
    return this.messagesService.findById(+id);
  }
  @Post()
  create(@Body() body: MessageInterface) {
    return this.messagesService.create(body);
  }
}
