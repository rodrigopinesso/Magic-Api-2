import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Deck, DeckSchema } from '../deck/schemas/deck.schema';
import { DeckCreatorService } from './deck-creator.service';
import { DeckCreatorController } from './deck-creator.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Deck.name, schema: DeckSchema }])],
  providers: [DeckCreatorService],
  controllers: [DeckCreatorController],
})
export class DeckCreatorModule {}
