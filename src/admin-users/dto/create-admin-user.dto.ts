import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateAdminUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}