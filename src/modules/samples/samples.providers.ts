import { Sample } from './sample.entity';

import { SAMPLE_REPOSITORY } from '../../core/constants';

export const samplesProviders = [
  {
    provide: SAMPLE_REPOSITORY,
    useValue: Sample,
  },
];
