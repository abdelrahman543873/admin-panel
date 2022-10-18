import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { Lang } from '../interfaces/error-messages-interface';
import { RequestContext } from '../interfaces/request.interface';
import { getLocalizedMessage } from '../utils/get-localised-error';
import { ApplicationException } from './application.exception';

@Catch(ApplicationException)
export class ApplicationExceptionFilter implements ExceptionFilter {
  catch(error: ApplicationException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<RequestContext>();
    const response = ctx.getResponse<Response>();
    response.status(error.statusCode).json({
      success: false,
      ...getLocalizedMessage(
        error.statusCode,
        (request.headers['lang'] as string) || Lang.EN,
      ),
    });
  }
}
