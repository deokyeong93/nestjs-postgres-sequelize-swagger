import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { HttpExceptionFilter } from '@/common/filter/httpException/httpException.filter';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as expressBasicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const {
    APP_TITLE,
    APP_DESCRIPTION,
    APP_VERSION,
    PORT,
    API_VERSION,
    SWAGGER_URL,
    SWAGGER_USER,
    SWAGGER_PASSWORD,
  } = process.env;

  app.setGlobalPrefix(API_VERSION);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: true, // 개발 할 때는 true, 배포할 때는 특정 URL 써야함
    credentials: true, // Access-Control-Allow-Credentials CORS 헤더를 구성합니다. 헤더를 전달하도록 설정
  });
  app.use(
    [SWAGGER_URL],
    expressBasicAuth({
      challenge: true,
      users: {
        [SWAGGER_USER]: SWAGGER_PASSWORD,
      },
    }),
  );

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
