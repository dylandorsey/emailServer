const express = require('express');
const router = express.Router();
const emailUtil = require('../modules/email-util');
var cors = require('cors');

const { sendEmail } = emailUtil;

// configure cors
const corsOptions = {
    methods: 'POST',
    origin: '*',
    optionsSuccessStatus: 204,
}

// enable cors preflight
router.options('/', cors())

// POST route
router.post('/', cors(corsOptions), async (req, res, next) => {
    console.log('initiate POST email');
    console.log('req.body = ', req.body);
    const mailBody = {
        recipient: process.env.RECIPIENT,
        message: req.body.message
    };
    try {
        await sendEmail(mailBody.recipient, mailBody.message);
        res.json({message: 'Your query has been sent',
        mailBody
        });
        await next();
    } catch (error) {
        await next(error);
    }
});

// end POST ROUTE

module.exports = router;