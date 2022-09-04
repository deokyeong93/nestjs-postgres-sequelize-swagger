import { Injectable } from '@nestjs/common';

import { SampleDto } from '@/modules/samples/dto';
import { SamplesRepository } from '../repository';

@Injectable()
export default class SamplesService {
  constructor(private readonly sampleRepository: SamplesRepository) {}

  async sample() {
    return 'sample';
  }

  async create(sample: SampleDto) {
    await this.sampleRepository.create(sample);
    return 'sample';
  }
}
