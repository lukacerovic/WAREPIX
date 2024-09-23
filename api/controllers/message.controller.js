// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();
// twilio account and mail account
// email soltechsolutions.dev@gmail.com
// pass: SoltechCeraSuvi24

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMessage = async (req, res) => {
    console.log('usao je u sendMessage kontroler');
    const { username, email, subject, message } = req.body;
    try {
        const msg = {
            
            to: 'info@warepix.com',
            from: 'soltechsolutions.dev@gmail.com',
            subject: subject,
            html: `<h1>Dobio si poruku od: <span color:'cyan'>${username}</span></h1>
            <h1>Poruka je: </h1>
            <p>${message}</p>
            <br/><br/>
            <h1>Email je: <span color='cyan'>${email}</span></h1>`
        };
        await sgMail.send(msg);
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
