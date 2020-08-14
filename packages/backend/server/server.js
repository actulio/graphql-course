const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schemas/schema');
const app = express();

// REMOVE THIS IMPORT OR CREATE THE FILE WITH CORRECT CREDENTIALS
const CREDENTIALS = require('./credentials');

app.use(cors());

mongoose.connect(
  `mongodb+srv://${CREDENTIALS.user}:${CREDENTIALS.password}@graphql-cluster.c5qov.mongodb.net/<graphql-cluster>?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.once('open', () => {
  console.log('connected to db');
});

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.listen(4000, () => {});
