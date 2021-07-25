import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePlanService from '@modules/plans/services/CreatePlanService';
import UpdatePlanService from '@modules/plans/services/UpdatePlanService';
import DeletePlanService from '@modules/plans/services/DeletePlanService';
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

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, available } = request.body;

    const updatePlanService = container.resolve(UpdatePlanService);

    const planUpdate = await updatePlanService.execute({
      id: request.query.id as string,
      name,
      available,
    });

    return response.json(planUpdate);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const id = request.query.id as string;

    const deletePlanService = container.resolve(DeletePlanService);

    const result = await deletePlanService.execute(id);

    return response.json(result);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listPlanService = container.resolve(ListPlanService);

    const plans = await listPlanService.execute();

    return response.json(plans);
  }
}
