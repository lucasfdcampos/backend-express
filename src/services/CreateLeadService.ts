import Lead from '../models/Lead';
import LeadsRepository from '../repositories/LeadsRepository';

interface RequestDTO {
  plan: string;
  client: string;
}

class CreateLeadService {
  private leadsRepository: LeadsRepository;

  constructor(leadsRepository: LeadsRepository) {
    this.leadsRepository = leadsRepository;
  }

  public execute({ plan, client }: RequestDTO): Lead {
    const lead = this.leadsRepository.create({ plan, client });

    return lead;
  }
}

export default CreateLeadService;
