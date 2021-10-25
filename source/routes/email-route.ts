import express from 'express';
import controller from '../controllers/email';
const router = express.Router();

router.post('/sendMail', controller.sendMail);

export = router;