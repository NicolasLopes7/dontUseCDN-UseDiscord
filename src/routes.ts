import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer.js';
import sendMessage from './bot';

const routes = Router();

routes.post(
  '/sendFile',
  multer(multerConfig).single('file'),
  async (req, res) => {
    const { destination, filename } = req.file;
    const path = `${destination}\\${filename}`;
    const url = await sendMessage('img', path, res);
    console.log(url);
  }
);

export default routes;
