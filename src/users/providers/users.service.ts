import { Injectable } from "@nestjs/common";
import { GetUsersParamsDto } from "../dtos/get-users-params.dto";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UsersService{
  constructor(private readonly authService : AuthService){}


      public findAll(getUsersParamDTO: GetUsersParamsDto, limit?: number, page?: number) {
        return [
          { firstName: 'John', email: 'john@example.com' },
          { firstName: 'Alice', email: 'alice@example.com' },
        ];
      }

      public findOneById(id: number) {
        return {
          id :400,
          firstName: 'John',
          email: 'john@example.com',
        };
      }
}