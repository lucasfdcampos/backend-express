import { Router } from 'express';
import leadsRouter from './leads.routes';

const routes = Router();

routes.use('/leads', leadsRouter);

export default routes;
