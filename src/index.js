import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import { router } from './routes/files.routes.js';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/files', router)

const PORT = process.env.PORT || 3080;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
