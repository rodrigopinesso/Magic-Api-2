import { EXCEPTION_FILTERS_METADATA } from "@nestjs/common/constants";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Colors {
  WHITE = 'W',
  BLUE = 'U',
  BLACK = 'B',
  RED = 'R',
  GREEN = 'G', 
}

@Schema({ 
    timestamps: true 
})

export class Deck {
   
   @Prop() name: string;
   @Prop() commanderName: string;
   @Prop() cards: string[];
   @Prop() colors: string[];
}

export const DeckSchema = SchemaFactory.createForClass(Deck)