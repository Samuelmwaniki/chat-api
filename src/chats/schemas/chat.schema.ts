// src/chats/schemas/chat.schema.ts
import * as mongoose from 'mongoose';

export const ChatSchema = new mongoose.Schema({
  userId: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});
