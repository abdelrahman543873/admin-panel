import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { LocalAuthGuard } from '../shared/auth/guards/local.guard';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private adminUserService: AdminService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() req) {
    return req.user;
  }

  @Get('refresh-tokens')
  @UseGuards(AuthGuard('refresh'))
  async regenerateTokens(
    @Req() req,
    @Res({ passthrough: true }) res: Response,
  ) {
    // const token = await this.adminUserService.getJwtToken(req.user);

    const refreshToken = await this.adminUserService.getRefreshToken(
      req.user.id,
    );

    const secretData = {
      // token,
      refreshToken,
    };

    res.cookie('auth-cookie', secretData, { httpOnly: true });
    return { msg: 'success' };
  }
}
