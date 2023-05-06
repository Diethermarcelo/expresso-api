"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("../../modules/pages/routes"));
const modulesRouter = [
    routes_1.default
];
const router = (0, express_1.Router)();
for (let moduleRouter of modulesRouter) {
    router.use('/', moduleRouter);
}
exports.default = router;
