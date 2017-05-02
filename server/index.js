import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middleware';

import { BookRoutes } from './modules';

const app = express();

dbConfig();
middlewareConfig(app);

app.use('/api', [ BookRoutes ]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if(err) {
    console.error(`Error on port: ${PORT}`);
  } else {
    console.log(`Listening on port: ${PORT}`);
  }
});

module.exports = app; // testing
