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
exports.DeckCreatorController = void 0;
const common_1 = require("@nestjs/common");
const deck_creator_service_1 = require("./deck-creator.service");
let DeckCreatorController = class DeckCreatorController {
    constructor(deckCreatorService) {
        this.deckCreatorService = deckCreatorService;
    }
    async createDeck(commanderName, deckName) {
        return this.deckCreatorService.createDeckWithCommander(commanderName, deckName);
    }
};
exports.DeckCreatorController = DeckCreatorController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Query)('commanderName')),
    __param(1, (0, common_1.Query)('deckName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DeckCreatorController.prototype, "createDeck", null);
exports.DeckCreatorController = DeckCreatorController = __decorate([
    (0, common_1.Controller)('deck-creator'),
    __metadata("design:paramtypes", [deck_creator_service_1.DeckCreatorService])
], DeckCreatorController);
//# sourceMappingURL=deck-creator.controller.js.map