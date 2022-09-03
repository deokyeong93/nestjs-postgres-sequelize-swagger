import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global prefix
  app.setGlobalPrefix(process.env.API_VERSION);
  await app.listen(process.env.PORT);
}
bootstrap();
