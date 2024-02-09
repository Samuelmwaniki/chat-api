// src/chats/chats.service.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatsService {
  constructor(@InjectModel('Chat') private readonly chatModel: Model<any>) {}

  async getChatHistoryByUserId(userId: string) {
    return this.chatModel.find({ userId });
  }

  async createChat(createChatDto: CreateChatDto) {
    const createdChat = new this.chatModel(createChatDto);
    return createdChat.save();
  }
}
