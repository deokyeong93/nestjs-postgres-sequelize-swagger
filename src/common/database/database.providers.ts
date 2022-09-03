import { Sequelize } from 'sequelize-typescript';
import { Sample } from '@/modules/samples/sample.entity';

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '@/common/constants';
import { databaseConfig } from '@/common/database/database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([Sample]);
      // await sequelize.sync();
      return sequelize;
    },
  },
];
