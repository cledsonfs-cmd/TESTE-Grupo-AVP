import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Nome' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'senha' })
  @IsNotEmpty()
  password: string;
}