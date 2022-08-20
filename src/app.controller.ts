import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('login')
  @Render('pages/login')
  renderLogin() {}

  @Get('home')
  @Render('pages/home')
  renderHome() {
    return { message: 'hello world' };
  }
}
