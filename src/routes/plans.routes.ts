import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import PlansRepository from '../repositories/PlansRepository';
import CreatePlanService from '../services/CreatePlanService';

const plansRouter = Router();

plansRouter.get('/', async (request, response) => {
  const plansRepository = getCustomRepository(PlansRepository);

  const plans = await plansRepository.find();

  return response.json(plans);
});

plansRouter.post('/', async (request, response) => {
  try {
    const { name, available } = request.body;

    const createPlanService = new CreatePlanService();

    const plan = await createPlanService.execute({
      name,
      available,
    });

    return response.json(plan);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default plansRouter;
