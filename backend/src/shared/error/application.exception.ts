import { HttpException } from '@nestjs/common';

export class ApplicationException extends HttpException {
  constructor(public statusCode: number) {
    super('Application Error', statusCode);
  }
}
