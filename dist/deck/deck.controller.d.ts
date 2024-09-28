import { Deck } from './schemas/deck.schema';
import { DeckService } from './deck.service';
import { createDeckDto } from './dto/create-deck-dto';
import { updateDeckDto } from './dto/update-deck-dto';
import { CommanderDeckDto } from './dto/import-deck.dto';
import { Cache } from 'cache-manager';
export declare class DeckController {
    private deckService;
    private cacheManager;
    constructor(deckService: DeckService, cacheManager: Cache);
    getCommander(name: string): Promise<any>;
    createDeckWithCommander(commanderName: string, deckName: string, req: any): Promise<Deck>;
    getAllDecks(): Promise<Deck[]>;
    createDeck(deck: createDeckDto): Promise<Deck>;
    getDeckById(id: string): Promise<Deck>;
    getMyDecks(req: any): Promise<unknown>;
    importDeck(commanderDeckDto: CommanderDeckDto): {
        message: string;
        deck?: undefined;
    } | {
        message: string;
        deck: CommanderDeckDto;
    };
    updateDeck(id: string, deck: updateDeckDto): Promise<Deck>;
    deleteDeck(id: string): Promise<Deck>;
}
