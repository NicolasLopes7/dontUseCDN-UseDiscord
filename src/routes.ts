import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer.js';
import sendMessage from './bot';

const routes = Router();

routes.post('/sendFile', multer(multerConfig).single('file'), (req, res) => {
  const { destination, filename } = req.file;
  const path = `${destination}\\${filename}`;
  sendMessage('img', path);
  return res.sendStatus(200);
});

export default routes;
