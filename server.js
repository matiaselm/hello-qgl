import {ApolloServer} from 'apollo-server-express';
import schemas from './schemas/index.js';
import resolvers from './resolvers/index.js';
import express from 'express';
import dotenv from 'dotenv';
import connectMongo from './db/db.js';

dotenv.config();

(async () => {
  try {
    const conn = await connectMongo();
    if (conn) {
      console.log('Connected successfully.');
    } else {
      console.error('Error connecting mongo')
    }

    const server = new ApolloServer({
      typeDefs: schemas,
      resolvers,
    });

    const app = express();

    server.applyMiddleware({app});

    app.listen({port: 3000}, () =>
        console.log(`🚀 Server ready at ${process.env.DB_URL}`),);
  } catch (e) {
    console.log('server error: ' + e.message);
  }
})();