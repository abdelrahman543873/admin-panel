// src/app.controller.ts
import { Controller, Get, Render, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  @Get('home')
  @UseGuards(AuthGuard('jwt'))
  @Render('pages/home')
  async getHome(@Req() req) {
    // console.log(req.user);
    return { user: req.user };
  }

  @Get('')
  @Render('pages/login')
  getLogin() {
    return '';
  }

  // @Get('/about')
  // @Render('About')
  // getAbout() {
  //   return '';
  // }
}
