import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { FINISH, HTTP_LOGGER } from '../../constants';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger(HTTP_LOGGER);

  use(req: Request, res: Response, next: NextFunction) {
    res.on(FINISH, () => {
      this.logger.log(
        ` [${req.method}|${res.statusCode}] [url => ${req.originalUrl}] [ip => ${req.ip}]`,
      );
    });
    next();
  }
}
