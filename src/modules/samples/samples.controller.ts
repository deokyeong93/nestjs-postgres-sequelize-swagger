import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { SamplesService } from './samples.service';

@Controller('samples')
export class SamplesController {
  constructor(private readonly samplesService: SamplesService) {}

  @Get()
  async getHello(@Req() req: Request, @Res() res: Response) {
    const result = 'hello';

    return res.json(result);
  }
}
