import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateClientAvatarService from '@modules/clients/services/UpdateClientAvatarService';

export default class ClientsAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateClientAvatarService = container.resolve(
      UpdateClientAvatarService,
    );

    const client = await updateClientAvatarService.execute({
      user_id: request.user.id,
      client_id: request.query.id?.toString(),
      avatarFilename: request.file?.filename,
    });

    return response.json(classToClass(client));
  }
}
