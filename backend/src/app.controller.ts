import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
@Controller()
export class AppController {
  @Get('health')
  login() {
    return 'Ok';
  }

  @Get('*')
  health(@Req() req: Request) {
    return req.url;
  }
}
