import { Model } from 'mongoose';
import { Deck } from './schemas/deck.schema';
import { createDeckDto } from './dto/createdeck.dto';
import { User } from 'src/auth/schemas/user.schema';
export declare class DeckService {
    private deckModel;
    constructor(deckModel: Model<Deck>);
    findAll(): Promise<Deck[]>;
    create(createDeckDto: createDeckDto, user: User): Promise<Deck>;
    findById(id: string): Promise<Deck>;
    updateById(id: string, updateDeckDto: createDeckDto): Promise<Deck>;
    deleteById(id: string): Promise<Deck>;
}
