import {ApolloServer} from 'apollo-server-express';
import schemas from './schemas/index.js';
import resolvers from './resolvers/index.js';
import express from 'express';
import dotenv from 'dotenv';
import connectMongo from './db/db.js';

dotenv.config();

let currentDate = new Date();
let time = currentDate.getHours() + ":" + currentDate.getMinutes();

(async () => {
  try {
    const conn = await connectMongo();
    if (conn) {
      console.log(`[${time}] Connected successfully.`);
    } else {
      console.error(`[${time}]Error connecting mongo`)
    }

    const server = new ApolloServer({
      typeDefs: schemas,
      resolvers,
    });

    const app = express();

    server.applyMiddleware({app});

    app.listen({port: 3000}, () =>
        console.log(`[${time}] Server ready at ${process.env.DB_URL}`),);
  } catch (e) {
    console.log('server error: ' + e.message);
  }
})();