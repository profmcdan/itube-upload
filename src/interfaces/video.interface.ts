import { User } from '@interfaces/users.interface';

export interface Video {
  _id: string;
  title: string;
  url: string;
  accessType: boolean;
  size: number;
  ownerId: string;
}
