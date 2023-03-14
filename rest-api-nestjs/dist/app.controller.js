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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const app_service_1 = require("./app.service");
const biditem_create_dto_1 = require("./items/biditem-create.dto");
const item_create_dto_1 = require("./items/item-create.dto");
const items_service_1 = require("./items/items.service");
const deposito_dto_1 = require("./users/deposito.dto");
const register_Dto_1 = require("./users/register.Dto");
const users_service_1 = require("./users/users.service");
let AppController = class AppController {
    constructor(appService, usersService, itemsService) {
        this.appService = appService;
        this.usersService = usersService;
        this.itemsService = itemsService;
    }
    async login(req) {
        return req.user;
    }
    async bidItems(bidItem, resp) {
        let insert = this.itemsService.bidItem(bidItem);
        if (insert) {
            return resp.status(common_1.HttpStatus.OK).send({ "status": "success", "message": "Bid item insert successfully." });
        }
        else {
            return resp.status(common_1.HttpStatus.BAD_REQUEST).send({ "status": "error", "message": "Bid item insert error." });
        }
    }
    async deposito(payload, resp) {
        let insert = this.usersService.addBalance(payload);
        if (insert) {
            return resp.status(common_1.HttpStatus.OK).send({ "status": "success", "message": "Add deposito successfully." });
        }
        else {
            return resp.status(common_1.HttpStatus.BAD_REQUEST).send({ "status": "error", "message": "Add deposito failed." });
        }
    }
    async createItem(item, resp) {
        let insert = this.itemsService.create(item);
        if (insert) {
            return resp.status(common_1.HttpStatus.OK).send({ "status": "success", "message": "Bid item insert successfully." });
        }
        else {
            return resp.status(common_1.HttpStatus.BAD_REQUEST).send({ "status": "error", "message": "Bid item insert error." });
        }
    }
    async addUser(user, resp) {
        let insert = this.usersService.register(user);
        if (insert) {
            return resp.status(common_1.HttpStatus.OK).send({ "status": "success", "message": "User register successfully." });
        }
        else {
            return resp.status(common_1.HttpStatus.BAD_REQUEST).send({ "status": "error", "message": "User register failed." });
        }
    }
    async users() {
        return this.usersService.findAll();
    }
    async items(status) {
        return this.itemsService.findAll(status);
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Post)('auth/login'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('items/bid'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [biditem_create_dto_1.BidItemCreateDto, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "bidItems", null);
__decorate([
    (0, common_1.Post)('user/deposito'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deposito_dto_1.DepositoDto, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deposito", null);
__decorate([
    (0, common_1.Post)('items'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_create_dto_1.ItemCreateDto, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createItem", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_Dto_1.UserDto, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "addUser", null);
__decorate([
    (0, common_1.Get)('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "users", null);
__decorate([
    (0, common_1.Get)('items/:status'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "items", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService, users_service_1.UsersService, items_service_1.ItemsService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map