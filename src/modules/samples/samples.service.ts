import { Sample } from '@/database/models/sample.model';
import { Injectable, Inject } from '@nestjs/common';
import { SampleDto } from './sample.dto';

@Injectable()
export class SamplesService {
  constructor(
    @Inject('SAMPLES_REPOSITORY')
    private samplesRepository: typeof Sample,
  ) {}

  async create(sample: SampleDto): Promise<Sample> {}
}
