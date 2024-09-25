import { DeckCreatorService } from './deck-creator.service';
import { Deck } from '../deck/schemas/deck.schema';
export declare class DeckCreatorController {
    private readonly deckCreatorService;
    constructor(deckCreatorService: DeckCreatorService);
    createDeck(commanderName: string, deckName: string): Promise<Deck>;
}
