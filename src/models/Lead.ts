import { v4 as uuid } from 'uuid';

class Lead {
  id: string;

  plan: string;

  client: string;

  constructor({ plan, client }: Omit<Lead, 'id'>) {
    this.id = uuid();
    this.plan = plan;
    this.client = client;
  }
}

export default Lead;
