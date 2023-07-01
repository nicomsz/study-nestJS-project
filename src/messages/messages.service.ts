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
  delete(id: number) {
    //index recebe qual posição do array está o item que tem o ID igual o params
    const index = this.messages.findIndex((message) => message.id === id);
    delete this.messages[index];
    return this.messages;
  }

  update(params: number, body: MessageInterface) {
    //index recebe qual posição do array está o item que tem o ID igual o params
    const index = this.messages.findIndex((message) => message.id === params);
    this.messages[index] = body;
    return this.messages[index];
  }

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
