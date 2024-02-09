// src/users/users.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Controller('users')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('login')
  async login(@Body() body: { username: string, password: string }) {
    const user = await this.authService.validateUser(body.username, body.password);

    //if (!user) {
      return { message: 'Invalid credentials' };
    //}

    return this.authService.login(user);
  }

}



