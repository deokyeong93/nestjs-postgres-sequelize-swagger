import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...'); // 컨트롤러 들어가기 전 : 이건 미들웨어에서 많이 처리해서 사실 필요없을수도..

    // 리턴후는 성공 시 데이터를 가공(사용)할 때 쓴다. 컨트롤러가 리턴한 데이터가 인자로 온다.
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
      })),
    );
  }
}
