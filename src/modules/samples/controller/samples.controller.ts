import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { SuccessInterceptor } from '@/common/interceptors/success.interceptor';
import { SamplesService } from '@/modules/samples/service';
import { SampleDto } from '../dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('samples')
@UseInterceptors(SuccessInterceptor)
export default class SamplesController {
  constructor(private readonly samplesService: SamplesService) {}

  @Get()
  getHello() {
    return { sample: 'this is sample' };
  }

  @ApiOperation({
    summary: '샘플로 써봅니당',
  })
  @Post()
  getSample(@Body() body: SampleDto) {
    return this.samplesService.create(body);
  }
}
