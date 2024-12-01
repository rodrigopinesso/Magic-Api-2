/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/magic-api/rabbitmq/rabbitmq.module.ts":
/*!****************************************************!*\
  !*** ./apps/magic-api/rabbitmq/rabbitmq.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RabbitmqModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rabbitmq_service_1 = __webpack_require__(/*! ./rabbitmq.service */ "./apps/magic-api/rabbitmq/rabbitmq.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let RabbitmqModule = class RabbitmqModule {
};
exports.RabbitmqModule = RabbitmqModule;
exports.RabbitmqModule = RabbitmqModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'RABBITMQ_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://guest:guest@rabbitmq:5672'],
                        queueOptions: {
                            durable: false
                        },
                    },
                },
            ]),
        ],
        providers: [rabbitmq_service_1.RabbitmqService],
        exports: [rabbitmq_service_1.RabbitmqService],
    })
], RabbitmqModule);


/***/ }),

/***/ "./apps/magic-api/rabbitmq/rabbitmq.service.ts":
/*!*****************************************************!*\
  !*** ./apps/magic-api/rabbitmq/rabbitmq.service.ts ***!
  \*****************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RabbitmqService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let RabbitmqService = class RabbitmqService {
    constructor(instance) {
        this.instance = instance;
    }
};
exports.RabbitmqService = RabbitmqService;
exports.RabbitmqService = RabbitmqService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('RABBITMQ_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientRMQ !== "undefined" && microservices_1.ClientRMQ) === "function" ? _a : Object])
], RabbitmqService);


/***/ }),

/***/ "./apps/magic-api/src/app.controller.ts":
/*!**********************************************!*\
  !*** ./apps/magic-api/src/app.controller.ts ***!
  \**********************************************/
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
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/magic-api/src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async defaultNestJs() {
        return this.appService.defaultNestJs();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('default-nest'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "defaultNestJs", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./apps/magic-api/src/app.module.ts":
/*!******************************************!*\
  !*** ./apps/magic-api/src/app.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/magic-api/src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/magic-api/src/app.service.ts");
const deck_module_1 = __webpack_require__(/*! ./deck/deck.module */ "./apps/magic-api/src/deck/deck.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/magic-api/src/auth/auth.module.ts");
const rabbitmq_module_1 = __webpack_require__(/*! ./..//rabbitmq/rabbitmq.module */ "./apps/magic-api/rabbitmq/rabbitmq.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true
            }),
            mongoose_1.MongooseModule.forRoot(process.env.DB_URI),
            deck_module_1.DeckModule,
            auth_module_1.AuthModule,
            rabbitmq_module_1.RabbitmqModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),

/***/ "./apps/magic-api/src/app.service.ts":
/*!*******************************************!*\
  !*** ./apps/magic-api/src/app.service.ts ***!
  \*******************************************/
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
exports.AppService = void 0;
const rabbitmq_service_1 = __webpack_require__(/*! ./../rabbitmq/rabbitmq.service */ "./apps/magic-api/rabbitmq/rabbitmq.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    constructor(rabbitmqService) {
        this.rabbitmqService = rabbitmqService;
    }
    async defaultNestJs() {
        this.rabbitmqService.instance.emit('default-nest-rmq', {
            message: 'Nova mensagem: RMQ '
        });
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof rabbitmq_service_1.RabbitmqService !== "undefined" && rabbitmq_service_1.RabbitmqService) === "function" ? _a : Object])
], AppService);


/***/ }),

/***/ "./apps/magic-api/src/auth/auth.controller.ts":
/*!****************************************************!*\
  !*** ./apps/magic-api/src/auth/auth.controller.ts ***!
  \****************************************************/
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/magic-api/src/auth/auth.service.ts");
const signup_dto_1 = __webpack_require__(/*! ./dto/signup.dto */ "./apps/magic-api/src/auth/dto/signup.dto.ts");
const login_dto_1 = __webpack_require__(/*! ./dto/login.dto */ "./apps/magic-api/src/auth/dto/login.dto.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signUp(signUpDto) {
        return this.authService.signUp(signUpDto);
    }
    login(loginDto) {
        return this.authService.login(loginDto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof signup_dto_1.SignUpDto !== "undefined" && signup_dto_1.SignUpDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./apps/magic-api/src/auth/auth.module.ts":
/*!************************************************!*\
  !*** ./apps/magic-api/src/auth/auth.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/magic-api/src/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/magic-api/src/auth/auth.service.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const user_schema_1 = __webpack_require__(/*! ./schemas/user.schema */ "./apps/magic-api/src/auth/schemas/user.schema.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./apps/magic-api/src/auth/jwt.strategy.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    return {
                        secret: config.get('JWT_SECRET'),
                        signOptions: {
                            expiresIn: config.get('JWT_EXPIRES'),
                        }
                    };
                }
            }),
            mongoose_1.MongooseModule.forFeature([{ name: "User", schema: user_schema_1.UserSchema }])
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        exports: [jwt_strategy_1.JwtStrategy, passport_1.PassportModule]
    })
], AuthModule);


/***/ }),

/***/ "./apps/magic-api/src/auth/auth.service.ts":
/*!*************************************************!*\
  !*** ./apps/magic-api/src/auth/auth.service.ts ***!
  \*************************************************/
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
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const user_schema_1 = __webpack_require__(/*! ./schemas/user.schema */ "./apps/magic-api/src/auth/schemas/user.schema.ts");
const bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async signUp(singupDto) {
        const { name, email, password, role } = singupDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword,
            role: ["user", "admin"],
        });
        const token = this.jwtService.sign({ id: user._id, userId: user.id });
        return { token };
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new common_1.UnauthorizedException("Email ou senha inválida");
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            throw new common_1.UnauthorizedException("Email ou senha invalida");
        }
        const token = this.jwtService.sign({ id: user._id, userId: user.id });
        return { token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);


/***/ }),

/***/ "./apps/magic-api/src/auth/decorators/roles.decorator.ts":
/*!***************************************************************!*\
  !*** ./apps/magic-api/src/auth/decorators/roles.decorator.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = exports.ROLES_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.ROLES_KEY = "roles";
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;


/***/ }),

/***/ "./apps/magic-api/src/auth/dto/login.dto.ts":
/*!**************************************************!*\
  !*** ./apps/magic-api/src/auth/dto/login.dto.ts ***!
  \**************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)({}, { message: "Digite o email da maneira correta" }),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(7),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);


/***/ }),

/***/ "./apps/magic-api/src/auth/dto/signup.dto.ts":
/*!***************************************************!*\
  !*** ./apps/magic-api/src/auth/dto/signup.dto.ts ***!
  \***************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignUpDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class SignUpDto {
}
exports.SignUpDto = SignUpDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)({}, { message: 'Digite o email da maneira correta' }),
    __metadata("design:type", String)
], SignUpDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(7),
    __metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], SignUpDto.prototype, "role", void 0);


/***/ }),

/***/ "./apps/magic-api/src/auth/enums/role.enum.ts":
/*!****************************************************!*\
  !*** ./apps/magic-api/src/auth/enums/role.enum.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Role = void 0;
var Role;
(function (Role) {
    Role["User"] = "user";
    Role["Admin"] = "admin";
    Role["Moderator"] = "moderator";
})(Role || (exports.Role = Role = {}));


/***/ }),

/***/ "./apps/magic-api/src/auth/guards/roles.guard.ts":
/*!*******************************************************!*\
  !*** ./apps/magic-api/src/auth/guards/roles.guard.ts ***!
  \*******************************************************/
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
exports.RolesGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const roles_decorator_1 = __webpack_require__(/*! ../decorators/roles.decorator */ "./apps/magic-api/src/auth/decorators/roles.decorator.ts");
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(roles_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        if (!requiredRoles)
            return true;
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return matchRoles(requiredRoles, user?.role);
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RolesGuard);
function matchRoles(requiredRoles, userRole) {
    return requiredRoles.some((role) => userRole?.includes(role));
}


/***/ }),

/***/ "./apps/magic-api/src/auth/jwt.strategy.ts":
/*!*************************************************!*\
  !*** ./apps/magic-api/src/auth/jwt.strategy.ts ***!
  \*************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const user_schema_1 = __webpack_require__(/*! ./schemas/user.schema */ "./apps/magic-api/src/auth/schemas/user.schema.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(userModel) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET
        });
        this.userModel = userModel;
    }
    async validate(payload) {
        const { id } = payload;
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new common_1.UnauthorizedException("Primeiro faça o login antes de utilizar esta rota");
        }
        return user;
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], JwtStrategy);


/***/ }),

/***/ "./apps/magic-api/src/auth/schemas/user.schema.ts":
/*!********************************************************!*\
  !*** ./apps/magic-api/src/auth/schemas/user.schema.ts ***!
  \********************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const role_enum_1 = __webpack_require__(/*! ../enums/role.enum */ "./apps/magic-api/src/auth/enums/role.enum.ts");
let User = class User {
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true, required: true, message: 'Este email já existe' }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: String, enum: role_enum_1.Role }],
        default: [role_enum_1.Role.User]
    }),
    __metadata("design:type", Array)
], User.prototype, "role", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),

/***/ "./apps/magic-api/src/deck/deck.controller.ts":
/*!****************************************************!*\
  !*** ./apps/magic-api/src/deck/deck.controller.ts ***!
  \****************************************************/
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeckController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const deck_service_1 = __webpack_require__(/*! ./deck.service */ "./apps/magic-api/src/deck/deck.service.ts");
const create_deck_dto_1 = __webpack_require__(/*! ./dto/create-deck-dto */ "./apps/magic-api/src/deck/dto/create-deck-dto.ts");
const update_deck_dto_1 = __webpack_require__(/*! ./dto/update-deck-dto */ "./apps/magic-api/src/deck/dto/update-deck-dto.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const validate_deck_1 = __webpack_require__(/*! ./validate/validate-deck */ "./apps/magic-api/src/deck/validate/validate-deck.ts");
const import_deck_dto_1 = __webpack_require__(/*! ./dto/import-deck.dto */ "./apps/magic-api/src/deck/dto/import-deck.dto.ts");
const cache_manager_1 = __webpack_require__(/*! @nestjs/cache-manager */ "@nestjs/cache-manager");
const cache_manager_2 = __webpack_require__(/*! cache-manager */ "cache-manager");
const roles_decorator_1 = __webpack_require__(/*! ../auth/decorators/roles.decorator */ "./apps/magic-api/src/auth/decorators/roles.decorator.ts");
const role_enum_1 = __webpack_require__(/*! ../auth/enums/role.enum */ "./apps/magic-api/src/auth/enums/role.enum.ts");
const roles_guard_1 = __webpack_require__(/*! ../auth/guards/roles.guard */ "./apps/magic-api/src/auth/guards/roles.guard.ts");
let DeckController = class DeckController {
    constructor(deckService, cacheManager) {
        this.deckService = deckService;
        this.cacheManager = cacheManager;
    }
    async getCommander(name) {
        if (!name) {
            throw new Error('Missing "name" query parameter');
        }
        return this.deckService.fetchCommander(name);
    }
    async createDeckWithCommander(commanderName, deckName, req) {
        const userId = req.user.id;
        if (!commanderName || !deckName) {
            throw new common_1.BadRequestException("Comandante e nome do deck são obrigatórios.");
        }
        try {
            const newDeck = await this.deckService.createDeckWithCommander(commanderName, deckName, userId);
            await this.cacheManager.del(`myDecks_${userId}`);
            return newDeck;
        }
        catch (error) {
            throw new common_1.BadRequestException("Erro ao criar deck.");
        }
    }
    async getAllDecks() {
        return this.deckService.findAll();
    }
    async createDeck(deck) {
        return this.deckService.create(deck);
    }
    async getDeckById(id) {
        return this.deckService.findById(id);
    }
    async getMyDecks(req) {
        const userId = req.user.id;
        const cacheKey = `myDecks_${userId}`;
        const cachedDecks = await this.cacheManager.get(cacheKey);
        if (cachedDecks) {
            return cachedDecks;
        }
        const decks = await this.deckService.findDecksByUserId(userId);
        await this.cacheManager.set(cacheKey, decks);
        return decks;
    }
    importDeck(commanderDeckDto) {
        const deck = {
            commanderName: commanderDeckDto.commanderName,
            cards: commanderDeckDto.cards,
            colors: commanderDeckDto.colors,
        };
        if (!(0, validate_deck_1.validateCommanderDeck)(deck)) {
            return { message: 'Baralho inválido de Commander' };
        }
        return { message: 'Baralho importado com exito', deck: commanderDeckDto };
    }
    async updateDeck(id, deck) {
        return this.deckService.updateById(id, deck);
    }
    async deleteDeck(id) {
        return this.deckService.deleteById(id);
    }
};
exports.DeckController = DeckController;
__decorate([
    (0, common_1.Get)('commanderInfo'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], DeckController.prototype, "getCommander", null);
__decorate([
    (0, common_1.Post)('createDeckWithCommander'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Query)('commanderName')),
    __param(1, (0, common_1.Query)('deckName')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], DeckController.prototype, "createDeckWithCommander", null);
__decorate([
    (0, common_1.Get)('allDecks'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), roles_guard_1.RolesGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], DeckController.prototype, "getAllDecks", null);
__decorate([
    (0, common_1.Post)('createCustomDeck'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof create_deck_dto_1.createDeckDto !== "undefined" && create_deck_dto_1.createDeckDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], DeckController.prototype, "createDeck", null);
__decorate([
    (0, common_1.Get)('decks/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], DeckController.prototype, "getDeckById", null);
__decorate([
    (0, common_1.Get)('myDeck'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeckController.prototype, "getMyDecks", null);
__decorate([
    (0, common_1.Post)('importDeck'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof import_deck_dto_1.CommanderDeckDto !== "undefined" && import_deck_dto_1.CommanderDeckDto) === "function" ? _j : Object]),
    __metadata("design:returntype", void 0)
], DeckController.prototype, "importDeck", null);
__decorate([
    (0, common_1.Put)('updateDeck/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_k = typeof update_deck_dto_1.updateDeckDto !== "undefined" && update_deck_dto_1.updateDeckDto) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], DeckController.prototype, "updateDeck", null);
__decorate([
    (0, common_1.Delete)('deleteDeck/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], DeckController.prototype, "deleteDeck", null);
exports.DeckController = DeckController = __decorate([
    (0, common_1.Controller)('decks'),
    (0, common_1.UseInterceptors)(cache_manager_1.CacheInterceptor),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeof (_a = typeof deck_service_1.DeckService !== "undefined" && deck_service_1.DeckService) === "function" ? _a : Object, typeof (_b = typeof cache_manager_2.Cache !== "undefined" && cache_manager_2.Cache) === "function" ? _b : Object])
], DeckController);


/***/ }),

/***/ "./apps/magic-api/src/deck/deck.module.ts":
/*!************************************************!*\
  !*** ./apps/magic-api/src/deck/deck.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeckModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const deck_controller_1 = __webpack_require__(/*! ./deck.controller */ "./apps/magic-api/src/deck/deck.controller.ts");
const deck_service_1 = __webpack_require__(/*! ./deck.service */ "./apps/magic-api/src/deck/deck.service.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const deck_schema_1 = __webpack_require__(/*! ./schemas/deck.schema */ "./apps/magic-api/src/deck/schemas/deck.schema.ts");
const cache_manager_1 = __webpack_require__(/*! @nestjs/cache-manager */ "@nestjs/cache-manager");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/magic-api/src/auth/auth.module.ts");
let DeckModule = class DeckModule {
};
exports.DeckModule = DeckModule;
exports.DeckModule = DeckModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cache_manager_1.CacheModule.register({
                ttl: 10,
                max: 100,
            }),
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'Deck', schema: deck_schema_1.DeckSchema }])
        ],
        controllers: [deck_controller_1.DeckController],
        providers: [deck_service_1.DeckService],
    })
], DeckModule);


/***/ }),

/***/ "./apps/magic-api/src/deck/deck.service.ts":
/*!*************************************************!*\
  !*** ./apps/magic-api/src/deck/deck.service.ts ***!
  \*************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeckService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const deck_schema_1 = __webpack_require__(/*! ./schemas/deck.schema */ "./apps/magic-api/src/deck/schemas/deck.schema.ts");
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
let DeckService = class DeckService {
    constructor(deckModel) {
        this.deckModel = deckModel;
    }
    async fetchCommander(commanderName) {
        const url = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(commanderName)}`;
        console.log(`Fetching commander from URL: ${url}`);
        const response = await fetch(url);
        const data = await response.json();
        console.log('Response from Scryfall API:', data);
        return data;
    }
    async fetchCardsByColors(colors) {
        const colorQuery = colors.join(',');
        const url = `https://api.scryfall.com/cards/search?q=color%3D${colorQuery}&unique=cards&order=random`;
        const response = await fetch(url);
        const data = await response.json();
        const cards = [];
        for (const card of data.data) {
            if (card.type_line.includes('Basic Land')) {
                cards.push(card.name);
                if (cards.length === 99)
                    break;
                continue;
            }
            const isRepeatable = card.oracle_text?.includes('A deck can have any number of cards named');
            if (!isRepeatable && cards.includes(card.name))
                continue;
            cards.push(card.name);
            if (cards.length === 99)
                break;
        }
        return cards;
    }
    async createDeckWithCommander(commanderName, deckName, userId) {
        const commander = await this.fetchCommander(commanderName);
        if (!commander) {
            throw new common_1.NotFoundException('Comandante não encontrado');
        }
        const commanderColors = commander.colors;
        const cards = await this.fetchCardsByColors(commanderColors);
        const deck = new this.deckModel({
            name: deckName,
            commanderName: commander.name,
            colors: commanderColors,
            cards: cards,
            userId
        });
        return deck.save();
    }
    async findAll() {
        return this.deckModel.find();
    }
    async create(deck) {
        const res = await this.deckModel.create(deck);
        return res;
    }
    async findById(id) {
        const deck = await this.deckModel.findById(id);
        if (!deck) {
            throw new common_1.NotFoundException('O deck não foi encontrado');
        }
        return deck;
    }
    async updateById(id, deck) {
        return this.deckModel.findByIdAndUpdate(id, deck, {
            new: true,
            runValidators: true,
        });
    }
    async deleteById(id) {
        return this.deckModel.findByIdAndDelete(id);
    }
    async findDecksByUserId(userId) {
        return this.deckModel.find({ userId }).exec();
    }
};
exports.DeckService = DeckService;
exports.DeckService = DeckService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(deck_schema_1.Deck.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose !== "undefined" && mongoose.Model) === "function" ? _a : Object])
], DeckService);


/***/ }),

/***/ "./apps/magic-api/src/deck/dto/create-deck-dto.ts":
/*!********************************************************!*\
  !*** ./apps/magic-api/src/deck/dto/create-deck-dto.ts ***!
  \********************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createDeckDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const deck_schema_1 = __webpack_require__(/*! ../schemas/deck.schema */ "./apps/magic-api/src/deck/schemas/deck.schema.ts");
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
], createDeckDto.prototype, "commanderName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], createDeckDto.prototype, "cards", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(deck_schema_1.Colors, { each: true }),
    __metadata("design:type", Array)
], createDeckDto.prototype, "colors", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], createDeckDto.prototype, "userId", void 0);


/***/ }),

/***/ "./apps/magic-api/src/deck/dto/import-deck.dto.ts":
/*!********************************************************!*\
  !*** ./apps/magic-api/src/deck/dto/import-deck.dto.ts ***!
  \********************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommanderDeckDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CommanderDeckDto {
}
exports.CommanderDeckDto = CommanderDeckDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CommanderDeckDto.prototype, "commanderName", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(99),
    (0, class_validator_1.ArrayMaxSize)(99),
    __metadata("design:type", Array)
], CommanderDeckDto.prototype, "cards", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayMaxSize)(5),
    __metadata("design:type", Array)
], CommanderDeckDto.prototype, "colors", void 0);


/***/ }),

/***/ "./apps/magic-api/src/deck/dto/update-deck-dto.ts":
/*!********************************************************!*\
  !*** ./apps/magic-api/src/deck/dto/update-deck-dto.ts ***!
  \********************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateDeckDto = void 0;
const deck_schema_1 = __webpack_require__(/*! ../schemas/deck.schema */ "./apps/magic-api/src/deck/schemas/deck.schema.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class updateDeckDto {
}
exports.updateDeckDto = updateDeckDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], updateDeckDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], updateDeckDto.prototype, "commanderName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], updateDeckDto.prototype, "cards", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(deck_schema_1.Colors, { each: true }),
    __metadata("design:type", Array)
], updateDeckDto.prototype, "colors", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], updateDeckDto.prototype, "userId", void 0);


/***/ }),

/***/ "./apps/magic-api/src/deck/schemas/deck.schema.ts":
/*!********************************************************!*\
  !*** ./apps/magic-api/src/deck/schemas/deck.schema.ts ***!
  \********************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeckSchema = exports.Deck = exports.Colors = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
var Colors;
(function (Colors) {
    Colors["WHITE"] = "W";
    Colors["BLUE"] = "U";
    Colors["BLACK"] = "B";
    Colors["RED"] = "R";
    Colors["GREEN"] = "G";
})(Colors || (exports.Colors = Colors = {}));
let Deck = class Deck {
};
exports.Deck = Deck;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Deck.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Deck.prototype, "commanderName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Deck.prototype, "cards", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Deck.prototype, "colors", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Deck.prototype, "userId", void 0);
exports.Deck = Deck = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Deck);
exports.DeckSchema = mongoose_1.SchemaFactory.createForClass(Deck);


/***/ }),

/***/ "./apps/magic-api/src/deck/validate/validate-deck.ts":
/*!***********************************************************!*\
  !*** ./apps/magic-api/src/deck/validate/validate-deck.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateCommanderDeck = validateCommanderDeck;
function validateCommanderDeck(deck) {
    if (deck.cards.length !== 99) {
        return false;
    }
    const uniqueColors = new Set(deck.colors);
    if (uniqueColors.size < 1 || uniqueColors.size > 5) {
        return false;
    }
    if (!deck.commanderName) {
        return false;
    }
    return true;
}


/***/ }),

/***/ "@nestjs/cache-manager":
/*!****************************************!*\
  !*** external "@nestjs/cache-manager" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/cache-manager");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "cache-manager":
/*!********************************!*\
  !*** external "cache-manager" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cache-manager");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "cluster":
/*!**************************!*\
  !*** external "cluster" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cluster");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

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
/*!************************************!*\
  !*** ./apps/magic-api/src/main.ts ***!
  \************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/magic-api/src/app.module.ts");
const os_1 = __webpack_require__(/*! os */ "os");
const cluster = __webpack_require__(/*! cluster */ "cluster");
async function bootstrap() {
    const isPrimary = cluster.isPrimary || cluster.isMaster;
    if (isPrimary) {
        const numCPUs = (0, os_1.cpus)().length;
        console.log(`Master process started. Forking ${numCPUs} workers...`);
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died. Forking a new worker...`);
            cluster.fork();
        });
    }
    else {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors({
            origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
            credentials: true,
        });
        await app.listen(3000);
        console.log(`Worker process started on port 3000. PID: ${process.pid}`);
    }
}
bootstrap();

})();

/******/ })()
;