import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filter/httpException/httpException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { PORT, API_VERSION } = process.env;

  app.setGlobalPrefix(API_VERSION);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(PORT, () => {
    console.log(`🚀 서버를 가동하겠습니다. PORT: ${PORT}/${API_VERSION}`);
  });
}
bootstrap();
