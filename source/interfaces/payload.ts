export class EmailPayload {
    constructor(to : String, cc : String, bcc : String, subject : String, body : String, fileName ?: String, filePath ?: String) {
        this.to = to;
        this.cc = cc;
        this.bcc = bcc;
        this.subject = subject;
        this.body = body;
        this.fileName = fileName ?? '';
        this.filePath = filePath ?? '';
    }
    to: String;
    cc: String;
    bcc: String;
    subject: String;
    body : String;
    fileName ?: String;
    filePath ?: String
}