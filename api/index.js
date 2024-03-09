import express from 'express';
import messageRoute from './routes/message.route.js'
import cors from 'cors';
// Creating application:
const app = express();
app.use(express.json());
 app.use(cors({
    origin:'*',
 }))
// kreiramo rikvestove
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

app.use("/api/message", messageRoute); 