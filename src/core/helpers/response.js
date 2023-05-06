const RESPONSE_DESC = {
    OK: { code: 200, message: 'OK' },
}


export const sendOKResponse = (res, message) => {
    res.status(RESPONSE_DESC.OK.code).send(message || RESPONSE_DESC.OK.message)
}

export const sendCreateResponse = (res, message) => {

}

export const sendGeneralSuccessResponse = (res, code, message) => {
    
}

export const sendGeneralErrorResponse = (res, code, message) => {

}

export const sendBadRequestResponse = (req, message) => {

}

export const sendNotFoundResponse = (req, message) => {

}

export const sendInternalServerErrorResponse = (req, message) => {

}

export const sendCustomResponse = (res, code, message) => {

}

