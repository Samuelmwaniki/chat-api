// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebSocketModule } from './websockets/websocket.module';
import { UsersModule } from './users/users.module';
import { ChatsModule } from './chats/chats.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Tubonge'),
    WebSocketModule,
    UsersModule,
    ChatsModule,
    AuthModule,
  ],
})
export class AppModule {}
