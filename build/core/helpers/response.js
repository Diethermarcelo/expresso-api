"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendCustomResponse = exports.sendInternalServerErrorResponse = exports.sendNotFoundResponse = exports.sendBadRequestResponse = exports.sendGeneralErrorResponse = exports.sendGeneralSuccessResponse = exports.sendCreateResponse = exports.sendOKResponse = void 0;
const RESPONSE_DESC = {
    OK: { code: 200, message: 'OK' },
};
const sendOKResponse = (res, message) => {
    res.status(RESPONSE_DESC.OK.code).send(message || RESPONSE_DESC.OK.message);
};
exports.sendOKResponse = sendOKResponse;
const sendCreateResponse = (res, message) => {
};
exports.sendCreateResponse = sendCreateResponse;
const sendGeneralSuccessResponse = (res, code, message) => {
};
exports.sendGeneralSuccessResponse = sendGeneralSuccessResponse;
const sendGeneralErrorResponse = (res, code, message) => {
};
exports.sendGeneralErrorResponse = sendGeneralErrorResponse;
const sendBadRequestResponse = (req, message) => {
};
exports.sendBadRequestResponse = sendBadRequestResponse;
const sendNotFoundResponse = (req, message) => {
};
exports.sendNotFoundResponse = sendNotFoundResponse;
const sendInternalServerErrorResponse = (req, message) => {
};
exports.sendInternalServerErrorResponse = sendInternalServerErrorResponse;
const sendCustomResponse = (res, code, message) => {
};
exports.sendCustomResponse = sendCustomResponse;
