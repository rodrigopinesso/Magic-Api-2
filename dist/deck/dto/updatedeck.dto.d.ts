import { Colors } from '../schemas/deck.schema';
import { User } from 'src/auth/schemas/user.schema';
export declare class UpdateDeckDto {
    readonly name: string;
    readonly comamnderName: string;
    readonly cards: string;
    readonly colors: Colors;
    readonly user: User;
}
