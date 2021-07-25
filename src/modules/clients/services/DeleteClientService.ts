import { injectable, inject } from 'tsyringe';

import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import AppError from '@shared/errors/AppError';

interface IResponse {
  raw: [];
  affected?: number | null | undefined;
}

@injectable()
class DeleteClientService {
  constructor(
    @inject('ClientsRepository')
    private clientRepository: IClientsRepository,
  ) {}

  public async execute(id: string): Promise<IResponse> {
    if (!id) {
      throw new AppError('Invalid client.');
    }

    const result = await this.clientRepository.delete(id);

    return result;
  }
}

export default DeleteClientService;
