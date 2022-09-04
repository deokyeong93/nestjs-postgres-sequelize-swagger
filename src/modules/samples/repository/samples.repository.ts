import { SAMPLE_REPOSITORY } from '@/common/constants';
import { Inject, Injectable } from '@nestjs/common';
import { SampleDto } from '../dto';
import { Sample } from '../entity';

@Injectable()
export default class SamplesRepository {
  constructor(
    @Inject(SAMPLE_REPOSITORY)
    private readonly samplesRepository: typeof Sample,
  ) {}

  create(sample: SampleDto) {
    console.log('repo', this.samplesRepository);
    // const result = this.samplesRepository.findAll({ where: { ...sample } });
    return !!sample && 'hello';
  }
}
