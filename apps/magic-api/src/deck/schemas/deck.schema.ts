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
   @Prop({ required: true }) 
   name: string;
   @Prop({ required: true })
   commanderName: string;
   @Prop({ required: true })
   cards: string[];
   @Prop({ required: true }) 
   colors: string[];
   @Prop()
   userId: string
}

export const DeckSchema = SchemaFactory.createForClass(Deck);
