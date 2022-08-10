import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { CurrentAdminUser } from '../models/current.adminuser';
import { AdminUsersService } from './admin-users.service';

@Controller('admin-users')
export class AdminUsersController {
  constructor(private adminUserService: AdminUsersService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Req() req, @Res({ passthrough: true }) res: Response) {
    const token = await this.adminUserService.getJwtToken(
      req.user as CurrentAdminUser,
    );
    const refreshToken = await this.adminUserService.getRefreshToken(
      req.user.id,
    );
    const secretData = {
      token,
      refreshToken,
    };

    res.cookie('auth-cookie', secretData, { httpOnly: true });
    return { msg: 'success' };
  }

  @Get('fav-movies')
  @UseGuards(AuthGuard('jwt'))
  async movies(@Req() req) {
    // return ['Avatar', 'Avengers'];
    return req.user.id;
  }

  @Get('refresh-tokens')
  @UseGuards(AuthGuard('refresh'))
  async regenerateTokens(
    @Req() req,
    @Res({ passthrough: true }) res: Response,
  ) {
    const token = await this.adminUserService.getJwtToken(
      req.user as CurrentAdminUser,
    );

    const refreshToken = await this.adminUserService.getRefreshToken(
      req.user.id,
    );

    const secretData = {
      token,
      refreshToken,
    };

    res.cookie('auth-cookie', secretData, { httpOnly: true });
    return { msg: 'success' };
  }
}
