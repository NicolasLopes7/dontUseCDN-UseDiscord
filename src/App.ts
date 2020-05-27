import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';

require('dotenv').config();

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(morgan('dev'));
  }

  private routes() {
    this.express.use(routes);
  }
}
export default new App().express;
