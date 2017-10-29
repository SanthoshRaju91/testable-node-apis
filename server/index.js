import express from 'express';
import dbConfig from './config/db';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import middlewareConfig from './config/middleware';

import { BookRoutes } from './modules';
import Schema from './graphQLSchemas';

const app = express();

dbConfig();
middlewareConfig(app);

app.get('/', (req, res) => {
  res.send('Docker running');
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ Schema }));
app.use('/graphiql', graphiqlExpress({ endPointURL: '/graphql'}));

// app.use('/api', [ BookRoutes ]);

const PORT = process.env.PORT || 3000;


app.listen(PORT, err => {
  if(err) {
    console.error(`Error on port: ${PORT}`);
  } else {
    console.log(`Listening on port: ${PORT}`);
  }
});

module.exports = app; // testing
