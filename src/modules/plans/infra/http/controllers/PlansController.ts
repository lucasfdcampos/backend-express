import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePlanService from '@modules/plans/services/CreatePlanService';
import ListPlanService from '@modules/plans/services/ListPlanService';

export default class PLansController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, available } = request.body;

    const createPlanService = container.resolve(CreatePlanService);

    const plan = await createPlanService.execute({
      name,
      available,
    });

    return response.json(plan);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listPlanService = container.resolve(ListPlanService);

    const plans = await listPlanService.execute();

    return response.json(plans);
  }
}
