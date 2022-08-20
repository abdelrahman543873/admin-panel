import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('layouts/main')
  root() {
    return { message: 'Hello world!' };
  }
}
