import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class SignUpDto {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, {message: 'Digite o email da maneira correta'})
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(7)
  readonly password: string;

  @IsOptional()
  readonly role: string[]

}