import { Sample } from '@/modules/samples/entity';

import { SAMPLE_REPOSITORY } from '@/common/constants';

const samplesProvider = [
  {
    provide: SAMPLE_REPOSITORY,
    useValue: Sample,
  },
];

export default samplesProvider;
