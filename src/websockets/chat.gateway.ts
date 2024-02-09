// src/websockets/chat.gateway.ts
import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
  @SubscribeMessage('sendMessage')
  handleMessage(@MessageBody() message: string, @ConnectedSocket() client: Socket): void {
    //i want to store this message
    client.emit('newMessage', message);
  }
}
