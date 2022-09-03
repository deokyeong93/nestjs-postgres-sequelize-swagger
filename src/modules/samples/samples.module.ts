import { Module } from '@nestjs/common';

import { SamplesService } from '@/modules/samples/samples.service';
import { samplesProviders } from '@/modules/samples/samples.providers';
import { SamplesController } from '@/modules/samples/samples.controller';

@Module({
  providers: [SamplesService, ...samplesProviders],
  exports: [SamplesService],
  controllers: [SamplesController],
})
export class SamplesModule {}
