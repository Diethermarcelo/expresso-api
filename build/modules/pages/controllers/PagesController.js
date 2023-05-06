"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("../../../core/controllers/controller"));
const response_1 = require("../../../core/helpers/response");
class PagesController extends controller_1.default {
    static index(req, res) {
        try {
            PagesService.index(req, res);
            (0, response_1.sendOKResponse)(res);
        }
        catch (e) {
        }
    }
    static create(req, res) {
        try {
            (0, response_1.sendCreateResponse)(res);
        }
        catch (e) {
        }
    }
}
exports.default = PagesController;
