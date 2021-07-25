import { Router } from 'express';

import clientsRouter from '@modules/clients/infra/http/routes/clients.routes';
import leadsRouter from '@modules/leads/infra/http/routes/leads.routes';
import plansRouter from '@modules/plans/infra/http/routes/plans.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/leads', leadsRouter);
routes.use('/plans', plansRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
