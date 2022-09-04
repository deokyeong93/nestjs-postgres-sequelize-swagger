import { Module } from '@nestjs/common';

import { SamplesService } from '@/modules/samples/service';
import { samplesProvider } from '@/modules/samples/provider';
import { SamplesController } from '@/modules/samples/controller';
import { SamplesRepository } from './repository';

@Module({
  providers: [SamplesService, ...samplesProvider, SamplesRepository],
  exports: [SamplesService],
  controllers: [SamplesController],
})
export class SamplesModule {}
