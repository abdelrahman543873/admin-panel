import { Body, Controller, Get, Post, UseGuards,Res,Request } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authLoginDto: AuthLoginDto) {
    let access_token = this.authService.login(authLoginDto);
    
    return access_token;
  }

  @UseGuards(JwtAuthGuard)
  @Get('test')
  async test(@Request() req) {
    return req.user;
  }
}