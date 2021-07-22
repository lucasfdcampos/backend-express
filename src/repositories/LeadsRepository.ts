import Lead from '../models/Lead';

interface CreateLeadDTO {
  plan: string;
  client: string;
}

class LeadsRepository {
  private leads: Lead[];

  constructor() {
    this.leads = [];
  }

  public all(): Lead[] {
    return this.leads;
  }

  public create({ plan, client }: CreateLeadDTO): Lead {
    const lead = new Lead({ plan, client });

    this.leads.push(lead);

    return lead;
  }
}

export default LeadsRepository;
