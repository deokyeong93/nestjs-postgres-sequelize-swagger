import { Module } from '@nestjs/common';

import { SamplesService } from './samples.service';
import { samplesProviders } from './samples.providers';
import { SamplesController } from './samples.controller';

@Module({
  providers: [SamplesService, ...samplesProviders],
  exports: [SamplesService],
  controllers: [SamplesController],
})
export class SamplesModule {}
