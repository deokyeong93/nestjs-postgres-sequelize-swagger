import { DatabaseModule } from '@/database/database.module';
import { Module } from '@nestjs/common';
import { SamplesController } from './samples.controller';
import { samplesProviders } from './samples.providers';
import { SamplesService } from './samples.service';

@Module({
  imports: [DatabaseModule],
  exports: [SamplesService],
  providers: [SamplesService, ...samplesProviders],
  controllers: [SamplesController],
})
export class SamplesModule {}
