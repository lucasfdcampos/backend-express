import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateLeadService from '@modules/leads/services/CreateLeadService';
import ListLeadService from '@modules/leads/services/ListLeadService';

export default class LeadsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { plan_id, client_id } = request.body;

    const user_id = request.user.id;

    const createLeadService = container.resolve(CreateLeadService);

    const lead = await createLeadService.execute({
      plan_id,
      user_id,
      client_id,
    });

    return response.json(lead);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listLeadService = container.resolve(ListLeadService);

    const leads = await listLeadService.execute();

    return response.json(leads);
  }
}
