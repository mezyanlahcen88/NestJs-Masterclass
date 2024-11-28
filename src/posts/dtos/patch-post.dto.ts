import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateUserDto } from '../../users/dtos/create-user.dto';
import { IsInt, IsNotEmpty } from "class-validator";
import { CreatePostDto } from "./create-post.dto";

export class PatchPostDto extends PartialType(CreatePostDto){
    @ApiProperty({
        name :'id',
        description :'this is an id',
        example : 1,
        required :true,
    })
    @IsNotEmpty()
    @IsInt()
    id:number

}