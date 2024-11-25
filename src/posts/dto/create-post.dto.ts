import { IsOptional } from "class-validator"

export class CreatePostDto{
    @IsOptional()
    id: number

}