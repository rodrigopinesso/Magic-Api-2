import { Deck } from './schemas/deck.schema';
import * as mongoose from 'mongoose';
export declare class DeckService {
    private readonly deckModel;
    constructor(deckModel: mongoose.Model<Deck>);
    fetchCommander(commanderName: string): Promise<any>;
    fetchCardsByColors(colors: string[]): Promise<string[]>;
    createDeckWithCommander(commanderName: string, deckName: string, userId: string): Promise<Deck>;
    findAll(): Promise<Deck[]>;
    create(deck: Deck): Promise<Deck>;
    findById(id: string): Promise<Deck>;
    updateById(id: string, deck: Deck): Promise<Deck>;
    deleteById(id: string): Promise<Deck>;
    findDecksByUserId(userId: string): Promise<Deck[]>;
}
