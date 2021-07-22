import { Router } from 'express';
import LeadsRepository from '../repositories/LeadsRepository';
import CreateLeadService from '../services/CreateLeadService';

const leadsRouter = Router();
const leadsRepository = new LeadsRepository();

leadsRouter.get('/', (request, response) => {
  const leads = leadsRepository.all();

  return response.json(leads);
});

leadsRouter.post('/', (request, response) => {
  try {
    const { plan, client } = request.body;

    const createLeadService = new CreateLeadService(leadsRepository);

    const lead = createLeadService.execute({ plan, client });

    return response.json(lead);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default leadsRouter;
