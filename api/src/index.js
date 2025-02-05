import express from 'express';
import cors from 'cors';
import { router } from './routes/files.route.js';
import { specs, swaggerUi } from './swaggerConfig.js';
import morgan from 'morgan';
import { PORT } from '../constants.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/files', router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

export { app };
