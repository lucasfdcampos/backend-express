import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import LeadsRepository from '../repositories/LeadsRepository';
import CreateLeadService from '../services/CreateLeadService';

const leadsRouter = Router();

leadsRouter.get('/', async (request, response) => {
  const leadsRepository = getCustomRepository(LeadsRepository);

  const leads = await leadsRepository.find();

  return response.json(leads);
});

leadsRouter.post('/', async (request, response) => {
  try {
    const { plan_id, user_id, client_id } = request.body;

    const createLeadService = new CreateLeadService();

    const lead = await createLeadService.execute({
      plan_id,
      user_id,
      client_id,
    });

    return response.json(lead);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default leadsRouter;
