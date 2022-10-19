import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { join } from 'path';
import * as hbs from 'hbs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { useContainer } from 'class-validator';
import { ApplicationExceptionFilter } from './shared/error/application-error.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      allowedHeaders: '*',
      origin: '*',
      methods: '*',
      exposedHeaders: '*',
    },
  });
  const config = app.get(ConfigService);
  app.use(cookieParser());
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useStaticAssets(join(process.cwd(), 'node_modules/admin-lte'));
  app.setBaseViewsDir(join(process.cwd(), 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(process.cwd(), 'views/partials'));
  hbs.registerPartials(join(process.cwd(), 'views/layouts'));
  app.setGlobalPrefix('backend');
  const options = new DocumentBuilder()
    .setTitle('🚀admin panel API🚀')
    .setDescription('admin panel endpoints')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('backend/api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      stopAtFirstError: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalFilters(new ApplicationExceptionFilter());
  await app.listen(config.get<string>('APP_PORT'));
  Logger.log(`server listening: ${await app.getUrl()}`);
}
bootstrap();
