// src/users/schemas/user.schema.ts
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  userName: String,
  userId: String,
  dateOfCreation: { type: Date, default: Date.now },
  timeOfCreation: { type: String, default: new Date().toLocaleTimeString() },
});
