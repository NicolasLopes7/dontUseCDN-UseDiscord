import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer.js';
import FileController from './Controllers/FileController';

const routes = Router();

routes.post(
  '/sendFile',
  multer(multerConfig).single('file'),
  FileController.sendFile
);

export default routes;
