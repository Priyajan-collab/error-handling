import { IsString } from 'class-validator';

export class GetUserResponse {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  userName: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;
}
