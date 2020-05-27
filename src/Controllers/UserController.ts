/* eslint-disable no-console */
import { Request, Response } from 'express';

const users = [{ name: 'Lonlon' }, { name: 'Lonzin' }, { name: 'Test' }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
};
