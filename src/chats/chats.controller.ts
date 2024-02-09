// src/chats/chats.controller.ts
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Get(':userId')
  async getChatHistoryByUserId(@Param('userId') userId: string) {
    return this.chatsService.getChatHistoryByUserId(userId);
  }

  @Post()
  async createChat(@Body() createChatDto: CreateChatDto) {
    return this.chatsService.createChat(createChatDto);
  }
}
