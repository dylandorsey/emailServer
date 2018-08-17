const express = require('express');
const router = express.Router();
const emailUtil = require('../modules/email-util');
var cors = require('cors');

const { sendEmail } = emailUtil;

// configure cors
const corsOptions = {
    methods: 'POST',
    origin: 'http:localhost:5000',
    optionsSuccessStatus: 204,
}

// enable cors preflight
router.options('*', cors());

router.use()
    console.log('initiate POST email');
    console.log('req.body = ', req.body);
    const reqBody = JSON.parse(req.body);
    console.log('parsed reqBody = ', reqBody);
    const mailBody = {
        recipient: process.env.RECIPIENT,
        message: reqBody.message
    };
    try 
    {
        await sendEmail(mailBody.recipient, mailBody.message);
        res.json({message: 'Your query has been sent',
        mailBody
        });
        await res.header("Access-Control-Allow-Origin", "*");
        await res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept)");
        await next();
    } catch (error) {
        res.json({error});
        await next(error);
    }
});

// end POST ROUTE

module.exports = router;