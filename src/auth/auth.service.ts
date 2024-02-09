import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { ReservedOrUserListener } from 'socket.io/dist/typed-events';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async login(user): Promise<any> {
    return false;
  }
  async validateUser(username, password){}
  async signIn(username: string, pass: string): Promise<any> {
    return await this.usersService.findOne(username, pass);
  }

  async signUp(userDto: CreateUserDto): Promise<any> {
    return await this.usersService.create(userDto);
  }
}