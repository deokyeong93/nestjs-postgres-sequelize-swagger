import { DatabaseModule } from '@/database/database.module';
import { Module } from '@nestjs/common';
import { SamplesController } from './Samples.controller';
import { samplesProviders } from './Samples.providers';
import { SamplesService } from './Samples.service';

@Module({
  imports: [DatabaseModule],
  exports: [SamplesService],
  providers: [SamplesService, ...samplesProviders],
  controllers: [SamplesController],
})
export class SamplesModule {}
