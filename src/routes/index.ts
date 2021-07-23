import { Router } from 'express';

import leadsRouter from './leads.routes';
import plansRouter from './plans.routes';
import usersRouter from './users.routes';
import clientsRouter from './clients.routes';

const routes = Router();

routes.use('/leads', leadsRouter);
routes.use('/plans', plansRouter);
routes.use('/users', usersRouter);
routes.use('/clients', clientsRouter);

export default routes;
