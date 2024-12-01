/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/romq-process/src/romq-process.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/romq-process/src/romq-process.controller.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RomqProcessController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const romq_process_service_1 = __webpack_require__(/*! ./romq-process.service */ "./apps/romq-process/src/romq-process.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let RomqProcessController = class RomqProcessController {
    constructor(romqProcessService) {
        this.romqProcessService = romqProcessService;
    }
    async defaultNestJs(data, context) {
        return this.romqProcessService.defaultNestJs(data, context);
    }
};
exports.RomqProcessController = RomqProcessController;
__decorate([
    (0, microservices_1.MessagePattern)('default-nest-rmq'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof microservices_1.RmqContext !== "undefined" && microservices_1.RmqContext) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], RomqProcessController.prototype, "defaultNestJs", null);
exports.RomqProcessController = RomqProcessController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof romq_process_service_1.RomqProcessService !== "undefined" && romq_process_service_1.RomqProcessService) === "function" ? _a : Object])
], RomqProcessController);


/***/ }),

/***/ "./apps/romq-process/src/romq-process.module.ts":
/*!******************************************************!*\
  !*** ./apps/romq-process/src/romq-process.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RomqProcessModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const romq_process_controller_1 = __webpack_require__(/*! ./romq-process.controller */ "./apps/romq-process/src/romq-process.controller.ts");
const romq_process_service_1 = __webpack_require__(/*! ./romq-process.service */ "./apps/romq-process/src/romq-process.service.ts");
let RomqProcessModule = class RomqProcessModule {
};
exports.RomqProcessModule = RomqProcessModule;
exports.RomqProcessModule = RomqProcessModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [romq_process_controller_1.RomqProcessController],
        providers: [romq_process_service_1.RomqProcessService],
    })
], RomqProcessModule);


/***/ }),

/***/ "./apps/romq-process/src/romq-process.service.ts":
/*!*******************************************************!*\
  !*** ./apps/romq-process/src/romq-process.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RomqProcessService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let RomqProcessService = class RomqProcessService {
    async defaultNestJs(data, context) {
        console.log(data);
        const channel = context.getChannelRef();
        const originalMsg = context.getMessage();
        channel.ack(originalMsg);
    }
};
exports.RomqProcessService = RomqProcessService;
exports.RomqProcessService = RomqProcessService = __decorate([
    (0, common_1.Injectable)()
], RomqProcessService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!***************************************!*\
  !*** ./apps/romq-process/src/main.ts ***!
  \***************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const romq_process_module_1 = __webpack_require__(/*! ./romq-process.module */ "./apps/romq-process/src/romq-process.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(romq_process_module_1.RomqProcessModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqp://guest:guest@rabbitmq:5672'],
            noAck: false,
            queueOptions: {
                durable: false
            },
        },
    });
    await app.listen();
}
bootstrap();

})();

/******/ })()
;