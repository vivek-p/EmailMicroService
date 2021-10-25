import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { transportMail } from '../middleware/mailCommunicator';
import { EmailPayload } from '../interfaces/payload';

// adding a post
const sendMail = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let to: string = req.body.to;
    let cc: string = req.body.cc;
    let bcc: string = req.body.bcc;
    let subject: string = req.body.subject;
    let body: string = req.body.body;
    let fileName : string = req.body.fileName ?? '';
    let filePath : string = req.body.filePath ?? '';
    let fileContent : string = req.body.fileContent ?? '';
    let fileContentType : string = req.body.fileContentType ?? '';
    let payload : EmailPayload = new EmailPayload(to, cc, bcc, subject, body, fileName, filePath, fileContent, fileContentType);
    console.log('payload = ', payload);
    // call mail transport
    const mailResp : any = await transportMail(payload, res);
    // return response
    /*return res.status(mailResp.code).json({
        message: mailResp.msg
    });*/
};

export default { sendMail };