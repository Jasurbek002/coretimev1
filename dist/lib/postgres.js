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
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    username: "gwawwknq",
    database: "gwawwknq",
    password: "UuLmuNzPdJndLaNhrJCZ_D-U5vB_9Ne-",
    host: "tiny.db.elephantsql.com",
    dialect: "postgres",
});
exports.sequelize = sequelize;
!(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            sequelize.authenticate();
            console.log("connect");
        }
        catch (error) { }
    });
})();
