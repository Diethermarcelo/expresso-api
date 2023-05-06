"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startAPI = exports.setupAPI = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const router_1 = __importDefault(require("./routes/router"));
const { APP_NAME, PORT, SITE_URL } = config_1.default;
const app = (0, express_1.default)();
const setupAPI = () => {
    app.get('/', (req, res) => {
        res.send(`Welcome to ${APP_NAME}`);
    });
    app.use('/', router_1.default);
};
exports.setupAPI = setupAPI;
const startAPI = () => {
    app.listen(PORT, () => {
        console.log(`${APP_NAME} is listening to port: ${PORT}`);
        console.log(`Link: ${SITE_URL}:${PORT}`);
    });
};
exports.startAPI = startAPI;
