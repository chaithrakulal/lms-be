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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tsoa_1 = require("tsoa");
const userService_1 = require("./userService");
let UsersController = class UsersController extends tsoa_1.Controller {
    getUserData(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let fetchData = yield new userService_1.UsersService().getUserData(username, password);
                this.setStatus(200);
                return fetchData;
            }
            catch (error) {
                throw error;
            }
        });
    }
    addUserData(newData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userData = yield new userService_1.UsersService().addUserData(newData);
                this.setStatus(201);
                return userData;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateUserData(userId, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const modifiedData = yield new userService_1.UsersService().updateUserData(userId, userData);
                this.setStatus(201);
                return modifiedData;
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteUserData(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const modifiedData = yield new userService_1.UsersService().deleteUserData(userId);
                this.setStatus(201);
                return modifiedData;
            }
            catch (error) {
                throw error;
            }
        });
    }
};
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "fetched"),
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserData", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "created"),
    (0, tsoa_1.Post)("/create"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addUserData", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "updated"),
    (0, tsoa_1.Put)("/{userId}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserData", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "deleted"),
    (0, tsoa_1.Delete)("/{userId}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUserData", null);
UsersController = __decorate([
    (0, tsoa_1.Route)("users")
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=userController.js.map