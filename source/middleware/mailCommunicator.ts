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
    const message = {
        from: 'sampleuser@mailtrap.com',
        to: 'to@email.com',
        subject: 'Design Your custom email',
        html: '<h1>Have the most fun you can!</h1><p>Get your <b>Career Growth</b> today!</p>',
        attachments: [
            { // Use a URL as an attachment
              filename: 'your-testla.png',
              path: 'https://media.gettyimages.com/photos/view-of-tesla-model-s-in-barcelona-spain-on-september-10-2018-picture-id1032050330?s=2048x2048'
          }
        ]
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