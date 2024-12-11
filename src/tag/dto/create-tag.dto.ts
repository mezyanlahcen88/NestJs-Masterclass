import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsUrl, Length, Matches, MaxLength } from "class-validator";

export class CreateTagDto {
  // id
  // name
  //slug
  // description
  // schema
  // featuredImageUrl
 @ApiProperty({
   name:'name',
   description:'this is name',
   required:true,
   example:'Laptops'
 })
  @IsNotEmpty()
  @Length(3,255)
  @IsString()
  name: string;


  @ApiProperty({
    description: "For example 'my-url'",
    required:true,
  })
  @IsNotEmpty()
  @MaxLength(512)
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  slug: string;

  @ApiPropertyOptional({
    description:'this is escription',
    required :false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description:'this is schema',
    required :false,
  })
  @IsString()
  schema?: string;
  
  @ApiPropertyOptional({
    description:'this is featuredImageUrl',
    required :false,
  })
  @IsString()
  @IsUrl()
  @Length(10,1024)
  featuredImageUrl?: string;
}
