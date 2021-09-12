import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  @Get('')
  @Render('login')
  login() {
    return '';
  }

  @Get('/dashboard')
  @Render('dashboard')
  dashboard() {
    return '';
  }
}