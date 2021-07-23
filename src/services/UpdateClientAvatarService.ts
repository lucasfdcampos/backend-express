import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import User from '../models/User';
import Client from '../models/Client';

import uploadConfig from '../config/upload';

interface Request {
  user_id: string;
  client_id?: string;
  avatarFilename?: string;
}

class UpdateClientAvatarService {
  public async execute({
    user_id,
    client_id,
    avatarFilename,
  }: Request): Promise<Client> {
    if (!avatarFilename) {
      throw new Error('Invalid or empty file.');
    }

    if (!client_id) {
      throw new Error('Invalid client.');
    }

    const userRepository = getRepository(User);

    const user = await userRepository.findOne(user_id);

    if (!user) {
      throw new Error('Only authenticated users can change avatar');
    }

    const clientRepository = getRepository(Client);

    const client = await clientRepository.findOne(client_id);

    if (!client) {
      throw new Error('Invalid client.');
    }

    // Deleta avatar
    if (client.avatar) {
      const clientAvatarFilePath = path.join(
        uploadConfig.directory,
        client.avatar,
      );
      console.log(clientAvatarFilePath);

      // File system
      const clientAvatarFileExists = await fs.promises.stat(
        clientAvatarFilePath,
      );
      console.log(clientAvatarFileExists);

      if (clientAvatarFileExists) {
        await fs.promises.unlink(clientAvatarFilePath);
      }
    }

    client.avatar = avatarFilename;

    await clientRepository.save(client);

    return client;
  }
}

export default UpdateClientAvatarService;
