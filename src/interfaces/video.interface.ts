export interface Video {
  _id: string;
  title: string;
  url: string;
  accessType: boolean;
  size: number;
  ownerId: string;
  channelId: string;
  createdAt: Date;
}
