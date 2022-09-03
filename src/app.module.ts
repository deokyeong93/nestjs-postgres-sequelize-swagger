import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { LoggerMiddleware } from './core/middleware/logger/logger.middleware';
import { SamplesModule } from './modules/samples/samples.module';

const ConfigModuleSetup = ConfigModule.forRoot({ isGlobal: true });

@Module({
  imports: [
    ConfigModuleSetup, //
    DatabaseModule,
    SamplesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer //
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
