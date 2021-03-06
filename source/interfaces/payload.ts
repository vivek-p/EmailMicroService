export class EmailPayload {
    constructor(to : string, cc : string, bcc : string, subject : string, body : string, 
        fileName ?: string, filePath ?: string, fileContent ?: string, fileContentType ?: string) {
        this.to = to;
        this.cc = cc;
        this.bcc = bcc;
        this.subject = subject ?? '';
        this.body = body;
        this.fileName = fileName ?? '';
        this.filePath = filePath ?? '';
        this.fileContent = fileContent ?? '';
        this.fileContentType = fileContentType ?? '';
    }
    to: string;
    cc: string;
    bcc: string;
    subject: string;
    body : string;
    fileName ?: string;
    filePath ?: string
    fileContent ?: string;
    fileContentType ?: string;
}