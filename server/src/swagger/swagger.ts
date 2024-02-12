import { Express, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
// eslint-disable-next-line import/default
import swaggerUi from 'swagger-ui-express';

import { version } from '../../package.json';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Docs',
      version,
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          schema: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/database/models/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);
// eslint-disable-next-line import/no-named-as-default-member
const { serve, setup } = swaggerUi;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const swaggerDocs = (app: Express, port: string) => {
  app.use('/swagger', serve, setup(swaggerSpec));
  app.get('docs.json', (res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

export default swaggerDocs;
