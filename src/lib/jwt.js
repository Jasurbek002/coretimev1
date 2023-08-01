"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = {
    sigin: (payload) => jsonwebtoken_1.default.sign(payload, "node"),
    verify: (token) => jsonwebtoken_1.default.verify(token, "node"),
};
