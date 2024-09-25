import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";

export enum Colors {
    WHITE = 'W',
    BLUE = 'U',
    BLACK = 'B',
    RED = 'R',
    GREEN = 'G', 
  }

@Schema({
    timestamps:true
})
export class Deck{
    
    @Prop()
    name: string;

    @Prop()
    commanderName: string;

    @Prop()
    cards: string[];

    @Prop()
    colors:String[];

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;
}

export const DeckSchema = SchemaFactory.createForClass(Deck)