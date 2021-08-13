import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateLeadService from '@modules/leads/services/CreateLeadService';
import UpdateLeadService from '@modules/leads/services/UpdateLeadService';
import DeleteLeadService from '@modules/leads/services/DeleteLeadService';
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

  public async update(request: Request, response: Response): Promise<Response> {
    const { plan_id, client_id } = request.body;

    const udpateLeadService = container.resolve(UpdateLeadService);

    const leadUpdate = await udpateLeadService.execute({
      id: request.query.id as string,
      plan_id,
      client_id,
    });

    return response.json(leadUpdate);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const id = request.query.id as string;

    const deleteLeadService = container.resolve(DeleteLeadService);

    const result = await deleteLeadService.execute(id);

    return response.json(result);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listLeadService = container.resolve(ListLeadService);

    const leads = await listLeadService.execute();

    return response.json(classToClass(leads));
  }
}
