"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const deviceRouter = (router, option, done) => {
    router.post("/device/register", controller_1.default.REGISTER);
    router.post("/device/login", controller_1.default.LOGIN);
    router.get("/device",controller_1.default.GET)
    router.get("/device/:deviceId",controller_1.default.GET_ONE)
    router.delete("/device/:deviceId",controller_1.default.DELETE)

    done();
};
exports.default = deviceRouter;
