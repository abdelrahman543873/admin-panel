import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
  @Get('health')
  login() {
    return 'Ok';
  }

  @Get('*')
  health() {
    return 'Ok';
  }
}
