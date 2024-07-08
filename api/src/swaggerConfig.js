import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { fileURLToPath } from 'url';
import path from 'path';
import { swaggerDefinitions } from './swaggerDefinitions.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Availables APIS',
            version: '1.0.0',
            description: 'Swagger for availables endpoints',
        },
        ...swaggerDefinitions,
    },
    apis: [path.resolve(__dirname, './routes/*.js')],
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
