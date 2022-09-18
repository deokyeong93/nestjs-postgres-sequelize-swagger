import { Sample } from '@/database/models/sample.model';

export const samplesProviders = [
  {
    provide: 'SAMPLES_REPOSITORY',
    useValue: Sample,
  },
];
