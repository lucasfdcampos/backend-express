import { Router, Request, Response } from 'express';
import axios from 'axios';
import { celebrate, Segments, Joi } from 'celebrate';

const cepRouter = Router();

cepRouter.get(
  '/:zip',
  celebrate({
    [Segments.PARAMS]: {
      zip: Joi.string().required(),
    },
  }),
  async (request: Request, response: Response) => {
    const { zip } = request.params;

    const api = axios.create({
      baseURL: process.env.APP_CEP_API_URL,
    });

    api
      .get(`baseURL${zip}`)
      .then(responseApi => {
        response.json(responseApi.data);
      })
      .catch(error => {
        response.status(404).json({ error });
      });
  },
);

export default cepRouter;
