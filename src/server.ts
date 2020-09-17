import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`[SERVER] 🚀 Server running on port ${port}`);
});
