import mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";
export declare enum Colors {
    WHITE = "W",
    BLUE = "U",
    BLACK = "B",
    RED = "R",
    GREEN = "G"
}
export declare class Deck {
    name: string;
    commanderName: string;
    cards: string[];
    colors: String[];
    user: User;
}
export declare const DeckSchema: mongoose.Schema<Deck, mongoose.Model<Deck, any, any, any, mongoose.Document<unknown, any, Deck> & Deck & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Deck, mongoose.Document<unknown, {}, mongoose.FlatRecord<Deck>> & mongoose.FlatRecord<Deck> & {
    _id: mongoose.Types.ObjectId;
}>;
