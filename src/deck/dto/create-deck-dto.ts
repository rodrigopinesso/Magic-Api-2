import { IsArray, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Colors } from "../schemas/deck.schema";

export class createDeckDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly commanderName: string;

    @IsNotEmpty()
    @IsString()
    readonly cards: string[]

    @IsArray()
    @IsEnum(Colors, {each: true})
    readonly colors: Colors[];
}