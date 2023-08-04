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
const Device_1 = require("../../Models/Device");
const jwt_1 = __importDefault(require("../../lib/jwt"));
function REGISTER(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { model, name, device_info, unique_id, device_type } = req.body;
            let register = yield Device_1.Device.create({
                model,
                name,
                device_info,
                unique_id,
                device_type,
                device_token: jwt_1.default.sigin(unique_id),
            });
           
            if (register) {
                rep.code(201).send({
                    message: "Successfuly added!",
                    success:true,
                    token: register.device_token,
                });
            }
            else {
                throw "somthing went to wrong";
            }
        }
        catch (error) {
            return error;
        }
    });
}

function LOGIN(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { unique_id } = req.body;
            let device = yield Device_1.Device.findOne({
                where: { unique_id: unique_id },
            });
            rep.code(200).send({
                success:true,
                message: "sucssess!",
                token: jwt_1.default.sigin(device.unique_id),
            });
        }
        catch (error) {
            return error;
        }
    });
}

function GET(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let device = yield Device_1.Device.findAll()
            rep.code(200).send({
                success:true,
                message: "sucssess!",
                data:device
            });
        }
        catch (error) {
            return error;
        }
    });
}


function GET_ONE(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const {deviceId} = req.params
            let device = yield Device_1.Device.findOne({
                where: { id: deviceId },
            })
            rep.code(200).send({
                success:true,
                message: "sucssess!",
                data:device
            });
        }
        catch (error) {
            return error;
        }
    });
}


function DELETE(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const {deviceId} = req.params
            let device = yield Device_1.Device.findByPk(deviceId)
            if(device){
                yield device.destroy();
            }else{
              return "device not found!"
            }
          
        }
        catch (error) {
            return error;
        }
    });
}





exports.default = {
    REGISTER,
    LOGIN,
    GET,
    GET_ONE,
    DELETE
};
