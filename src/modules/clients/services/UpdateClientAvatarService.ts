import { injectable, inject } from 'tsyringe';

import path from 'path';
import fs from 'fs';

import AppError from '@shared/errors/AppError';

import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import Client from '@modules/clients/infra/typeorm/entities/Client';

import uploadConfig from '@config/upload';

interface IRequest {
  user_id: string;
  client_id?: string;
  avatarFilename?: string;
}

@injectable()
class UpdateClientAvatarService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    user_id,
    client_id,
    avatarFilename,
  }: IRequest): Promise<Client> {
    if (!avatarFilename) {
      throw new AppError('Invalid or empty file.');
    }

    if (!client_id) {
      throw new AppError('Invalid client.');
    }

    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar', 401);
    }

    const client = await this.clientsRepository.findById(client_id);

    if (!client) {
      throw new AppError('Invalid client.');
    }

    // Deleta avatar
    if (client.avatar) {
      const clientAvatarFilePath = path.join(
        uploadConfig.directory,
        client.avatar,
      );

      // File system
      const clientAvatarFileExists = await fs.promises.stat(
        clientAvatarFilePath,
      );

      if (clientAvatarFileExists) {
        await fs.promises.unlink(clientAvatarFilePath);
      }
    }

    client.avatar = avatarFilename;

    await this.clientsRepository.save(client);

    return client;
  }
}

export default UpdateClientAvatarService;
