import { Sequelize } from 'sequelize-typescript';
import { Sample } from '@/modules/samples/entity';

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '@/common/constants';
import config from '@/database/config/config.js';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let postgresConfig;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          postgresConfig = config.development;
          break;
        case TEST:
          postgresConfig = config.test;
          break;
        case PRODUCTION:
          postgresConfig = config.production;
          break;
        default:
          postgresConfig = config.development;
      }
      const sequelize = new Sequelize(postgresConfig);
      sequelize.addModels([Sample]);
      // await sequelize.sync();
      return sequelize;
    },
  },
];
