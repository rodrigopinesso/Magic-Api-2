import { DeckService } from './deck.service';
import { createDeckDto } from './dto/createdeck.dto';
import { UpdateDeckDto } from './dto/updatedeck.dto';
import { Deck } from './schemas/deck.schema';
export declare class DeckController {
    private DeckService;
    constructor(DeckService: DeckService);
    getAllDecks(): Promise<Deck[]>;
    createDeck(deck: createDeckDto, req: any): Promise<Deck>;
    getDeck(id: string): Promise<Deck>;
    updateDeck(id: string, Deck: UpdateDeckDto): Promise<Deck>;
    deleteDeck(id: string): Promise<Deck>;
}
