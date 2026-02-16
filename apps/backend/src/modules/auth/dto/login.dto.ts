import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  usernameOrEmail!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;
}
