import { Model } from 'mongoose';
import { Deck } from '../deck/schemas/deck.schema';
export declare class DeckCreatorService {
    private readonly deckModel;
    constructor(deckModel: Model<Deck>);
    fetchCommander(commanderName: string): Promise<any>;
    fetchCardsByColors(colors: string[]): Promise<string[]>;
    createDeckWithCommander(commanderName: string, deckName: string): Promise<Deck>;
}
