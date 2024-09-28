import { Colors } from "../schemas/deck.schema";
import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class updateDeckDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly commanderName: string;

    @IsNotEmpty()
    @IsString()
    readonly cards: string[];

    @IsOptional()
    @IsArray()
    @IsEnum(Colors, {each: true})
    readonly colors: Colors[];
}