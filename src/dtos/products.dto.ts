import { IsBoolean, IsInt, IsOptional, IsString, IsUrl, Length, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(3, 40)
  public name: string;

  @IsBoolean()
  public veg: boolean;

  @IsInt()
  @Min(0)
  public price: number;

  @IsOptional()
  @IsUrl()
  public image?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  public discountedPrice?: number;

  @IsOptional()
  @IsString()
  @Length(10)
  public description?: string;
}
