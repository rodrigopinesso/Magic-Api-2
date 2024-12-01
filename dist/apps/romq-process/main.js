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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RomqProcessController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const romq_process_service_1 = __webpack_require__(/*! ./romq-process.service */ "./apps/romq-process/src/romq-process.service.ts");
let RomqProcessController = class RomqProcessController {
    constructor(romqProcessService) {
        this.romqProcessService = romqProcessService;
    }
    getHello() {
        return this.romqProcessService.getHello();
    }
};
exports.RomqProcessController = RomqProcessController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], RomqProcessController.prototype, "getHello", null);
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
    getHello() {
        return 'Hello World!';
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
async function bootstrap() {
    const app = await core_1.NestFactory.create(romq_process_module_1.RomqProcessModule);
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;