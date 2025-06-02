import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('user/:id')
  async getUser(@Param('id') id: string) {
    try {
      const user = await this.userService.getUser(id);

      return user;
    } catch (error) {
      throw new Error(`Fetching error : ${(error as Error).message}`);
    }
  }
}
