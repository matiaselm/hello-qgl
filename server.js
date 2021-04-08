import {ApolloServer} from 'apollo-server-express';
import schemas from './schemas/index.js';
import resolvers from './resolvers/index.js';
import express from 'express';
import dotenv from 'dotenv';
import connectMongo from './db/db.js';
import cors from 'cors';
import stationsRoute from './routes/stationsRoute.js';

dotenv.config();

let currentDate = new Date();
let time = currentDate.getHours() + ":" + currentDate.getMinutes();

(async () => {
  try {

    const conn = await connectMongo();

    if (conn) {
      console.log(`[${time}] Connected successfully.`);
    }

    const server = new ApolloServer({
      typeDefs: schemas,
      resolvers,
    });

    const app = express();

    server.applyMiddleware({app});

    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(cors());

    app.use('/stations', stationsRoute);

    app.listen({port: 3000}, () =>
        console.log(`[${time}] Server ready at localhost:3000`),);
  } catch (e) {
    console.log('server error: ' + e.message);
  }
})();