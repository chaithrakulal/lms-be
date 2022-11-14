"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const userModel_1 = __importDefault(require("./userModel"));
class UsersService {
    getUserData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let matchQuery = {};
                let fetchData = yield userModel_1.default.getUserData(matchQuery);
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
                let saveData = yield userModel_1.default.addUserData(newData);
                return saveData;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateUserData(userId, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            let modifiedData = yield userModel_1.default.updateUserData(userId, updatedData);
            return modifiedData;
        });
    }
    deleteUserData(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let modifiedData = yield userModel_1.default.deleteUserDataById(userId);
            return modifiedData;
        });
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=userService.js.map