import { injectable, inject } from 'tsyringe';

import ILeadsRepository from '@modules/leads/repositories/ILeadsRepository';

import Lead from '@modules/leads/infra/typeorm/entities/Lead';

interface IResponse {
  id: string;
  client: {
    client_id: string;
    name: string;
    endereço: string;
    cidade: string;
  };
  plan: {
    plan_id: string;
    name: string;
  };
  user: {
    user_id: string;
    name: string;
  };
}

@injectable()
class ListLeadService {
  constructor(
    @inject('LeadsRepository')
    private leadRepository: ILeadsRepository,
  ) {}

  public async execute(): Promise<Lead[]> {
    const leads = await this.leadRepository.findAll();

    /*
    const formattedLeads = leads.map(lead => {
      return {
        id: lead.id,
        client: {
          client_id: lead.client_id,
          name: lead.client.name,
          endereço: lead.client.adress,
          cidade: lead.client.city,
        },
        plan: {
          plan_id: lead.plan_id,
          name: lead.plan.name,
        },
        user: {
          user_id: lead.user_id,
          name: lead.user.name,
        },
      };
    }); */

    return leads;
  }
}

export default ListLeadService;
