import { Router } from 'express';

import clientsRouter from './clients.routes';
import leadsRouter from './leads.routes';
import plansRouter from './plans.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/leads', leadsRouter);
routes.use('/plans', plansRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
