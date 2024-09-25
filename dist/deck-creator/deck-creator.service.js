"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckCreatorService = void 0;
const common_1 = require("@nestjs/common");
const node_fetch_1 = require("node-fetch");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const deck_schema_1 = require("../deck/schemas/deck.schema");
let DeckCreatorService = class DeckCreatorService {
    constructor(deckModel) {
        this.deckModel = deckModel;
    }
    async fetchCommander(commanderName) {
        const url = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(commanderName)}`;
        console.log(`Fetching commander from URL: ${url}`);
        try {
            const response = await (0, node_fetch_1.default)(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch commander. Status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Response from Scryfall API:', data);
            return data;
        }
        catch (error) {
            console.error(`Error fetching commander: ${error.message}`);
            throw new common_1.NotFoundException('Erro ao buscar comandante.');
        }
    }
    async fetchCardsByColors(colors) {
        const colorQuery = colors.join(',');
        const cards = [];
        let page = 1;
        while (cards.length < 99) {
            const response = await (0, node_fetch_1.default)(`https://api.scryfall.com/cards/search?q=color%3D${colorQuery}&unique=cards&order=random&page=${page}`);
            const data = await response.json();
            for (const card of data.data) {
                if (card.type_line.includes('Basic Land')) {
                    cards.push(card.name);
                    if (cards.length === 99)
                        break;
                    continue;
                }
                const isRepeatable = card.oracle_text && card.oracle_text.includes('A deck can have any number of cards named');
                if (!isRepeatable && cards.includes(card.name))
                    continue;
                cards.push(card.name);
                if (cards.length === 99)
                    break;
            }
            if (!data.has_more)
                break;
            page++;
        }
        return cards;
    }
    async createDeckWithCommander(commanderName, deckName) {
        console.log('Fetching commander...');
        const commander = await this.fetchCommander(commanderName);
        if (!commander) {
            throw new common_1.NotFoundException('Comandante não encontrado');
        }
        console.log('Fetching cards...');
        const commanderColors = commander.colors;
        const cards = await this.fetchCardsByColors(commanderColors);
        console.log('Creating deck...');
        const deck = new this.deckModel({
            name: deckName,
            commanderName: commander.name,
            colors: commanderColors,
            cards: cards,
        });
        console.log('Saving deck...');
        const savedDeck = await deck.save();
        console.log('Deck saved:', savedDeck);
        return savedDeck;
    }
};
exports.DeckCreatorService = DeckCreatorService;
exports.DeckCreatorService = DeckCreatorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(deck_schema_1.Deck.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], DeckCreatorService);
//# sourceMappingURL=deck-creator.service.js.map