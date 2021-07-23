import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import LeadsRepository from '../repositories/LeadsRepository';
import CreateLeadService from '../services/CreateLeadService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const leadsRouter = Router();

leadsRouter.use(ensureAuthenticated);

leadsRouter.get('/', async (request, response) => {
  const leadsRepository = getCustomRepository(LeadsRepository);

  const leads = await leadsRepository.find();

  return response.json(leads);
});

leadsRouter.post('/', async (request, response) => {
  const { plan_id, user_id, client_id } = request.body;

  const createLeadService = new CreateLeadService();

  const lead = await createLeadService.execute({
    plan_id,
    user_id,
    client_id,
  });

  return response.json(lead);
});

export default leadsRouter;
