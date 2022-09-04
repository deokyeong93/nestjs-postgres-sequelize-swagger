import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { HttpExceptionFilter } from '@/common/filter/httpException/httpException.filter';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const {
    APP_TITLE,
    APP_DESCRIPTION,
    APP_VERSION,
    PORT,
    API_VERSION,
    SWAGGER_URL,
  } = process.env;

  app.setGlobalPrefix(API_VERSION);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());

  const swaggerConfig = new DocumentBuilder()
    .setTitle(APP_TITLE)
    .setDescription(APP_DESCRIPTION)
    .setVersion(APP_VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(SWAGGER_URL, app, document);
  await app.listen(PORT, () => {
    console.log(`🚀 서버를 가동하겠습니다. PORT: ${PORT}/${API_VERSION}`);
  });
}
bootstrap();
