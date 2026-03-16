const app = require('./app');
const path = require('path');
const database = require('./database');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const PORT = process.env.PORT || 3001;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Digital Store',
      version: '1.0.0',
      description: 'Documentação Swagger para a Aplicação do projeto backend desenvolvido por André W. D. S. M., Aluno Full Stack - Geração Tech 3.0',
    },
    servers: [
      {
        url: 'http://localhost:3001/',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: [
    path.resolve(__dirname, 'server.js'),
    path.resolve(__dirname, 'routes', 'categoryRoutes.js'),
    path.resolve(__dirname, 'routes', 'productRoutes.js'),
    path.resolve(__dirname, 'routes', 'userRoutes.js'),
  ],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

console.log('📝 Rotas detectadas pelo Swagger:', Object.keys(swaggerDocs.paths));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

database.connection.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`\n✅ Servidor rodando em: http://localhost:${PORT}/api-docs`);
    console.log('✅ Banco de dados sincronizado com sucesso.');
  });
}).catch(err => {
  console.error('❌ Não foi possível sincronizar o banco de dados:', err);
});