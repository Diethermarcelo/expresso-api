"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Pages_1 = __importDefault(require("./Pages"));
const moduleRouter = (0, express_1.Router)()
    .use(Pages_1.default);
exports.default = moduleRouter;
