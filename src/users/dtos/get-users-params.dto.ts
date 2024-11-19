import { Type } from 'class-transformer';
import { IsOptional ,IsInt} from 'class-validator';

export class GetUsersParamsDto {
  @IsOptional()
  @IsInt()
  @Type(()=> Number)
  id?: number;
}
