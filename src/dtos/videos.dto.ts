import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateVideoDto {
  @IsString()
  public title: string;

  @IsString()
  public url: string;

  @IsBoolean()
  public accessType: boolean;

  @IsNumber()
  public size: number;

  @IsString()
  public ownerId: string;
}
