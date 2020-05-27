import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

require('dotenv').config();

class App {
  public express: express.Application;

  public mongoURL: string;

  public constructor() {
    this.express = express();
    if (process.env.MONGO_DB_URL) {
      this.mongoURL = process.env.MONGO_DB_URL;
    } else {
      this.mongoURL = ' ';
    }

    this.middlewares();
    this.routes();
    this.database();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database() {
    mongoose.connect(this.mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  private routes() {
    this.express.use(routes);
  }
}
export default new App().express;
