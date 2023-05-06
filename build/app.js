"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./core/server");
const config_1 = __importDefault(require("./core/config"));
const { APP_NAME } = config_1.default;
try {
    (0, server_1.setupAPI)();
    (0, server_1.startAPI)();
}
catch (e) {
    console.log(`Cannot start ${APP_NAME}:`, e);
}
