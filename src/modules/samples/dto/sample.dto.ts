import { ApiProperty } from '@nestjs/swagger';

export default class SampleDto {
  @ApiProperty({
    example: '홍길동',
    description: '이름',
    required: true,
  })
  name: string;

  @ApiProperty({
    example: 'test@naver.com',
    description: '이메일',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: '3214aa',
    description: '비밀번호',
    required: true,
  })
  password: string;

  @ApiProperty({
    example: 'male',
    description: '성별',
    required: true,
  })
  gender: string;
}
