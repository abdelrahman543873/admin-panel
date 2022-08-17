import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';
import { LoginInput } from '../../admin/inputs/login.dto';
import { ApiTags } from '@nestjs/swagger';
@Controller()
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() input: LoginInput, @Req() req) {
    return { ...req.user, ...this.authService.login(req.user) };
  }
}
