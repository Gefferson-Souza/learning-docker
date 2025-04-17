import express, { json } from 'express';
// Altere a importação para apontar especificamente para o arquivo index.js dentro de routes
import routes from './routes/index.js';

const app = express();
app.use(json());
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});