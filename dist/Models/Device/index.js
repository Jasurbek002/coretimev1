"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const sequelize_1 = require("sequelize");
const postgres_js_1 = require("../../lib/postgres.js");
class Device extends sequelize_1.Model {
}
exports.Device = Device;
Device.init({
    model: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    device_info: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    unique_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    device_type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    device_token: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize: postgres_js_1.sequelize, modelName: "device" });
Device.sync();
