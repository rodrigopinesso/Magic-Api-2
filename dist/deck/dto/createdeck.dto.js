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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeckDto = void 0;
const class_validator_1 = require("class-validator");
const deck_schema_1 = require("../schemas/deck.schema");
const user_schema_1 = require("../../auth/schemas/user.schema");
class createDeckDto {
}
exports.createDeckDto = createDeckDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createDeckDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createDeckDto.prototype, "comamnderName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createDeckDto.prototype, "cards", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(deck_schema_1.Colors, { message: 'Enter correct colors' }),
    __metadata("design:type", String)
], createDeckDto.prototype, "colors", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)({ message: 'Voce nao pode passar o user id' }),
    __metadata("design:type", user_schema_1.User)
], createDeckDto.prototype, "user", void 0);
//# sourceMappingURL=createdeck.dto.js.map