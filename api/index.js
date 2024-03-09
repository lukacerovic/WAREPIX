import express from 'express';
import messageRoute from './routes/message.route.js'
import cors from 'cors';
// Creating application:
const app = express();
const corsAllowedOrigin = [
    'https://www.warepix.com/',
    'www.warepix.com',
    'warepix.com',

    

]
app.use(express.json());
 app.use(cors({
    origin: corsAllowedOrigin,
    credentials: true,
 }))
// kreiramo rikvestove
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

app.use("/api/message", messageRoute); 