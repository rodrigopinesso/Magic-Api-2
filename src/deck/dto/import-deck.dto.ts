import { IsArray, IsString, IsNotEmpty, ArrayMinSize, ArrayMaxSize, IsOptional } from 'class-validator';

export class CommanderDeckDto {
  @IsString()
  @IsNotEmpty()
  commanderName: string;

  @IsArray()
  @ArrayMinSize(99) 
  @ArrayMaxSize(99) 
  cards: string[];

  @IsArray()
  @ArrayMinSize(1) 
  @ArrayMaxSize(5) 
  colors: string[];
}
