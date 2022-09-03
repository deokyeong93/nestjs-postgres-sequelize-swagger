import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import PositiveIntPipe from '@/common/pipes/positiveInt.pipe';
import { SamplesService } from '@/modules/samples/samples.service';

@Controller('samples')
@UseInterceptors(SuccessInterceptor)
export class SamplesController {
  constructor(private readonly samplesService: SamplesService) {}

  @Get()
  getHello() {
    return { sample: 'this is sample' };
  }

  @Get(':id')
  async updateHello(
    @Param('id', ParseIntPipe, PositiveIntPipe) id,
  ): Promise<string> {
    console.log(id);
    console.log(typeof id);
    return await this.samplesService.sample();
  }
}
