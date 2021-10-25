# EmailMicroService
# This is a nodejs microservice to send email

## I have used Mailtrap, a mock mail receiver. The process is same just the SMTP configuation needs to be changes. Please login to mailtrap to get your smtp settings and provide those in the mailCommunicator.ts file. https://mailtrap.io/. This is free.

###Steps to Run
# npm i -> Install node dependencies
## npm run dev -> This will start the dev server
### In postman create a post request to the API : http://localhost:3000/sendMail
#### Add in Accept -> application/json, Content-Type -> application/json , request headers
Add in a sample body {
    "to" : "to",
    "cc" : "cc",
    "bcc" : "bcc",
    "subject" : "subject",
    "body" : "body"
}