import { Injectable, Inject } from '@nestjs/common';

import { Sample } from '@/modules/samples/entity';
import { SampleDto } from '@/modules/samples/dto';
import { SAMPLE_REPOSITORY } from '@/common/constants';

@Injectable()
export default class SamplesService {
  constructor(
    @Inject(SAMPLE_REPOSITORY) private readonly sampleRepository: typeof Sample,
  ) {}

  async sample() {
    return 'sample';
  }

  async create(sample: SampleDto): Promise<Sample> {
    return await this.sampleRepository.create<Sample>(sample);
  }

  async findOneByEmail(email: string): Promise<Sample> {
    return await this.sampleRepository.findOne<Sample>({ where: { email } });
  }

  async findOneById(id: number): Promise<Sample> {
    return await this.sampleRepository.findOne<Sample>({ where: { id } });
  }
}
