import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';
import { LoginInput } from '../../admin/inputs/login.dto';
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() input: LoginInput, @Req() req) {
    return { ...req.user, token: this.authService.login(req.user) };
  }
}
