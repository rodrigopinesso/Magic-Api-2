import { IsEmpty, IsEnum, isEnum, isNotEmpty, IsNotEmpty, IsString, isString } from 'class-validator';
import { Colors } from '../schemas/deck.schema';
import { User } from 'src/auth/schemas/user.schema';

export class createDeckDto {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly comamnderName: string;

  @IsNotEmpty()
  @IsString()
  readonly cards: string;

  @IsNotEmpty()
  @IsEnum(Colors, {message:'Enter correct colors'})
  readonly colors: Colors;

  @IsEmpty({message: 'Voce nao pode passar o user id'})
  readonly user: User
}