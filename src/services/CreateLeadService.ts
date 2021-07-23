import { getCustomRepository } from 'typeorm';

import Lead from '../models/Lead';
import LeadsRepository from '../repositories/LeadsRepository';

interface RequestDTO {
  plan_id: string;
  user_id: string;
  client_id: string;
}

class CreateLeadService {
  public async execute({
    plan_id,
    user_id,
    client_id,
  }: RequestDTO): Promise<Lead> {
    const leadsRepository = getCustomRepository(LeadsRepository);

    const lead = leadsRepository.create({ plan_id, user_id, client_id });

    await leadsRepository.save(lead);

    return lead;
  }
}

export default CreateLeadService;
