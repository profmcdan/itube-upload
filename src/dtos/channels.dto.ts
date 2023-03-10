import { IsBoolean, IsString } from 'class-validator';

export class CreateChannelDto {
  @IsString()
  public title: string;

  @IsString()
  public bannerUrl: string;

  @IsBoolean()
  public isPublic: boolean;

  @IsString()
  public ownerId: string;
}
