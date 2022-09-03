import { Sample } from '@/modules/samples/sample.entity';

import { SAMPLE_REPOSITORY } from '@/common/constants';

export const samplesProviders = [
  {
    provide: SAMPLE_REPOSITORY,
    useValue: Sample,
  },
];
