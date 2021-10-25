import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { EmailPayload } from '../interfaces/payload';
import {Request, Response} from 'express';
import ResponseFactory from '../interfaces/ErrorFactory';
import ErrorFactory from "../interfaces/ErrorFactory";
export const transportMail = async (payload : EmailPayload, res : Response) => {
    let transport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
           user: '5c82d84084f175',
           pass: '7aabe53df12300'
        }
    });
    const isHTML = RegExp.prototype.test.bind(/(<([^>]+)>)/i);
    let isHtmlContent : boolean = isHTML(payload.body);
    let message : any = {
        from: 'sampleuser@mailtrap.com',
        to: payload.to,
        subject: payload.subject,
    };
    if(payload.cc) {
        message.cc = payload.cc;
    }
    if(payload.bcc) {
        message.bcc = payload.bcc;
    }
    if(isHtmlContent) {
        message.html = payload.body;
    } else {
        message.text = payload.body;
    }
    if(payload.fileName && (payload.filePath || payload.fileContent)) {
        if(payload.fileContent && payload.fileContentType) {
            message.attachments = [
                { //Use a content as attachment
                  filename : payload.fileName,
                  content : payload.fileContent,
                  contentType : payload.fileContentType
                }
              ]
        } else if(payload.filePath) {
            message.attachments = [
                { // Use a URL as an attachment
                    filename: payload.fileName,
                    path: payload.filePath
                }
            ]
        }
    };
    let respCode : number;
    let respMsg : any;
    transport.sendMail(message, function (err, info) {
        if (err) {
            respCode = 500;
            respMsg = err;
            console.log('errror = ', err);
            const resp = ErrorFactory.getResponse(String(respCode), respMsg);
            return res.status(Number(resp.code)).json({
                message: resp.message
            });
        } else {
            respCode = 200;
            respMsg = 'Success';
            console.log('success');
            const resp = ErrorFactory.getResponse(String(respCode), respMsg);
            return res.status(Number(resp.code)).json({
                message: resp.message
            });
        }
    });
}