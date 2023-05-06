"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PagesController_1 = __importDefault(require("../controllers/PagesController"));
let pagesRouter = (0, express_1.Router)();
pagesRouter.get('/', (req, res) => PagesController_1.default.index(req, res));
pagesRouter.post('/', (req, res) => PagesController_1.default.create(req, res));
pagesRouter = (0, express_1.Router)().use('/pages', pagesRouter);
exports.default = pagesRouter;
