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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
UserSchema.statics = {
    getUserData: function (matchQuery = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fetchData = yield this.find(matchQuery);
                return fetchData;
            }
            catch (error) {
                throw error;
            }
        });
    },
    addUserData: function (newData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = new User(newData);
                const response = yield data.save();
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    },
    updateUserData: function (userId, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const modifiedData = yield this.findByIdAndUpdate(userId, {
                    $set: updatedData,
                });
                return modifiedData;
            }
            catch (error) {
                throw error;
            }
        });
    },
    deleteUserDataById: function (userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.findByIdAndRemove(userId);
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    },
};
const User = (0, mongoose_1.model)("Users", UserSchema);
exports.default = User;
//# sourceMappingURL=userModel.js.map