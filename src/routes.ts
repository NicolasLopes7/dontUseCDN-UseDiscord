import { Router } from 'express';

import UserController from '~/Controllers/UserController';

const routes = Router();

routes.get('/', UserController.index);

export default routes;
