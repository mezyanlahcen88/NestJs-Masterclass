import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional ,IsInt} from 'class-validator';

export class GetUsersParamsDto {
  @ApiPropertyOptional({
    description :'Get user by specific id',
    example:'1234'
  })
  @IsOptional()
  @IsInt()
  @Type(()=> Number)
  id?: number;
}
