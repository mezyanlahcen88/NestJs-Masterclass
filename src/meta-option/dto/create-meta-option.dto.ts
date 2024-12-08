import { ApiProperty } from "@nestjs/swagger";
import { IsJSON, IsNotEmpty } from "class-validator";

export class CreateMetaOptionDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsJSON()
    metaValue :string
}
