import { IsString, IsUrl, Length } from 'class-validator';

export class CreateOfferDto {
  @IsString()
  @Length(3, 40)
  public name: string;

  @IsUrl()
  public image: string;
}
