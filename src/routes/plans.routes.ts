import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import PlansRepository from '../repositories/PlansRepository';
import CreatePlanService from '../services/CreatePlanService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const plansRouter = Router();

plansRouter.use(ensureAuthenticated);

plansRouter.get('/', async (request, response) => {
  const plansRepository = getCustomRepository(PlansRepository);

  const plans = await plansRepository.find();

  return response.json(plans);
});

plansRouter.post('/', async (request, response) => {
  const { name, available } = request.body;

  const createPlanService = new CreatePlanService();

  const plan = await createPlanService.execute({
    name,
    available,
  });

  return response.json(plan);
});

export default plansRouter;
