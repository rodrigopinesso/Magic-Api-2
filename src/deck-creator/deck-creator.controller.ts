import { Controller, Post, Body, UseGuards, Query } from '@nestjs/common';
import { DeckCreatorService } from './deck-creator.service';
import { Deck } from '../deck/schemas/deck.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('deck-creator')
export class DeckCreatorController {
  constructor(private readonly deckCreatorService: DeckCreatorService) {}

  @Post('create')
  async createDeck(
    @Query('commanderName') commanderName: string,
    @Query('deckName') deckName: string,
  ): Promise<Deck> {
    return this.deckCreatorService.createDeckWithCommander(commanderName, deckName);
  }
}
