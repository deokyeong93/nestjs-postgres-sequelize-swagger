import { Controller, Get } from '@nestjs/common';
import { SamplesService } from './samples.service';

@Controller('samples')
export class SamplesController {
  constructor(private readonly samplesService: SamplesService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.samplesService.sample();
  }
}
