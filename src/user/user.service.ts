import { BadRequestException, Injectable } from '@nestjs/common';
import { GetUserResponse } from './dto/get-user.dto';
import { JsonPlaceHolder } from 'src/types/interface/jsonPlaceHolder';

@Injectable()
export class UserService {
  async getUser(id: string): Promise<GetUserResponse> {
    try {
      const userInfo = await fetch(`${process.env.USER_API_URL}/${id}`);

      if (userInfo.status === 401) {
        throw new Error('Access forbidden');
      }
      if (userInfo.status === 404) {
        throw new Error('Not found');
      }
      if (userInfo.status === 408) {
        throw new Error('Request Timeout');
      }
      if (userInfo.status >= 500) {
        throw new Error('server crashed');
      }
      if (!userInfo.ok) {
        throw new BadRequestException(`Http error ${userInfo.status}`);
      }
      const userData = (await userInfo.json()) as JsonPlaceHolder;

      const user: GetUserResponse = {
        id: userData.id.toString(),
        userName: userData.username,
        email: userData.email,
        name: userData.name,
        phone: userData.phone,
      };
      return user;
    } catch (error) {
      throw new Error(`${(error as Error).message}`);
    }
  }
}
