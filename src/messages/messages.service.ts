import { Injectable } from '@nestjs/common';
import { MessageInterface } from './MessageInterface';

@Injectable()
export class MessagesService {
  private messages = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 2,
      text: 'Segunda mensages',
    },
  ];
  create(message: MessageInterface) {
    return this.messages.push(message);
  }
  findAll() {
    return this.messages;
  }
  findById(id: number) {
    return this.messages.find((message) => message.id === id);
  }
}
