import 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import { createApolloServer } from './apollo';

export async function startServer() {
  const app = express();

  app.use(cors());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  const server = createApolloServer();

  await server.start();

  server.applyMiddleware({ app });

  return app;
}
