import { HttpException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export default class PositiveIntPipe implements PipeTransform {
  transform(value) {
    if (value < 0) {
      throw new HttpException('value < 0', 400);
    }
    return value;
  }
}
