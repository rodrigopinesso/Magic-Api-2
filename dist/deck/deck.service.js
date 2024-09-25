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
exports.DeckService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const deck_schema_1 = require("./schemas/deck.schema");
let DeckService = class DeckService {
    constructor(deckModel) {
        this.deckModel = deckModel;
    }
    async findAll() {
        return await this.deckModel.find().exec();
    }
    async create(createDeckDto, user) {
        const data = Object.assign(deck_schema_1.Deck, { user: user._id });
        const createdDeck = new this.deckModel(createDeckDto);
        return await createdDeck.save();
    }
    async findById(id) {
        const deck = await this.deckModel.findById(id).exec();
        if (!deck) {
            throw new common_1.NotFoundException('Deck não encontrado.');
        }
        return deck;
    }
    async updateById(id, updateDeckDto) {
        const updatedDeck = await this.deckModel.findByIdAndUpdate(id, updateDeckDto, {
            new: true,
            runValidators: true,
        }).exec();
        if (!updatedDeck) {
            throw new common_1.NotFoundException('Deck não encontrado.');
        }
        return updatedDeck;
    }
    async deleteById(id) {
        const deletedDeck = await this.deckModel.findByIdAndDelete(id).exec();
        if (!deletedDeck) {
            throw new common_1.NotFoundException('Deck não encontrado.');
        }
        return deletedDeck;
    }
};
exports.DeckService = DeckService;
exports.DeckService = DeckService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(deck_schema_1.Deck.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DeckService);
//# sourceMappingURL=deck.service.js.map