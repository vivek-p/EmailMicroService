const getResponse = (returnCode : string, returnMessage : string) => {
    let returnObj : ResponseObject = new ResponseObject(returnCode, returnMessage);
    returnObj.code = returnCode;
    returnObj.message = returnMessage;
    return returnObj;
}

class ResponseObject {
    code : string;
    message : string;
    constructor(code : string, message : string) {
        this.code = code ?? '500';
        this.message = message ?? 'Internal Error';
    }
    
}
export default { getResponse };