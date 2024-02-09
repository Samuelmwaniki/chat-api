
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<any>) {}

    async findOne(username: string, password: string): Promise<any | undefined> {
    return this.userModel.findOne({ username: username }).exec();
  }

  async create(userDto: CreateUserDto): Promise<any> {
    return this.userModel.create(userDto);
  }
  async createUser(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async getUserProfile(userId: string) {
    return this.userModel.findOne({ userId });
  }

  async getAllUsers() {
    return this.userModel.find();
  }

  async getUserByUsername(username: string) {
    return this.userModel.findOne({ userName: username });
  }

  async validateUserById(userId: string) {
    return this.userModel.findOne({ userId });
  }
}
