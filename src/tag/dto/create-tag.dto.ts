import { IsNotEmpty, IsString, IsUrl, Length, MaxLength } from "class-validator";

export class CreateTagDto {
  // id
  // name
  //slug
  // description
  // schema
  // featuredImageUrl
 
  @IsNotEmpty()
  @Length(3,255)
  @IsString()
  name: string;

  @IsNotEmpty()
  @MaxLength(512)
  @IsString()
  slug: string;

  
  @IsString()
  description?: string;


  @IsString()
  schema?: string;

  @IsString()
  @IsUrl()
  featuredImageUrl?: string;
}
