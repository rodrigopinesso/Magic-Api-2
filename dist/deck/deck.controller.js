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
exports.DeckController = void 0;
const common_1 = require("@nestjs/common");
const deck_service_1 = require("./deck.service");
const createdeck_dto_1 = require("./dto/createdeck.dto");
const updatedeck_dto_1 = require("./dto/updatedeck.dto");
const passport_1 = require("@nestjs/passport");
let DeckController = class DeckController {
    constructor(DeckService) {
        this.DeckService = DeckService;
    }
    async getAllDecks() {
        return this.DeckService.findAll();
    }
    async createDeck(deck, req) {
        return this.DeckService.create(deck, req.user);
    }
    async getDeck(id) {
        return this.DeckService.findById(id);
    }
    async updateDeck(id, Deck) {
        return this.DeckService.updateById(id, Deck);
    }
    async deleteDeck(id) {
        return this.DeckService.deleteById(id);
    }
};
exports.DeckController = DeckController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeckController.prototype, "getAllDecks", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createdeck_dto_1.createDeckDto, Object]),
    __metadata("design:returntype", Promise)
], DeckController.prototype, "createDeck", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeckController.prototype, "getDeck", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updatedeck_dto_1.UpdateDeckDto]),
    __metadata("design:returntype", Promise)
], DeckController.prototype, "updateDeck", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeckController.prototype, "deleteDeck", null);
exports.DeckController = DeckController = __decorate([
    (0, common_1.Controller)('decks'),
    __metadata("design:paramtypes", [deck_service_1.DeckService])
], DeckController);
//# sourceMappingURL=deck.controller.js.map