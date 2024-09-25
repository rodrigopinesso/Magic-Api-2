import { IsEnum, IsOptional, IsString, IsEmpty} from 'class-validator';
import { Colors } from '../schemas/deck.schema';
import { User } from 'src/auth/schemas/user.schema'

export class UpdateDeckDto {

  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly comamnderName: string;

  @IsOptional()
  @IsString()
  readonly cards: string;

  @IsOptional()
  @IsEnum(Colors, {message:'Enter correct colors'})
  readonly colors: Colors;

  @IsEmpty({message: 'Voce nao pode passar o user id'})
  readonly user: User
}