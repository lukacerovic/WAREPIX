import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.warepix.com');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'POST') {
        const { username, email, subject, message } = req.body;
        
        try {
            const msg = {
                to: 'warepixsolutions@gmail.com',
                from: 'soltechsolutions.dev@gmail.com',
                subject: subject,
                html: `<h1>Dobio si poruku od: <span color='cyan'>${username}</span></h1>
                    <h1>Poruka je: </h1>
                    <p>${message}</p>
                    <br/><br/>
                    <h1>Email je: <span color='cyan'>${email}</span></h1>`
            };
            await sgMail.send(msg);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
