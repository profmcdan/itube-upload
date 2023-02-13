import { model, Schema, Document } from 'mongoose';
import { Channel } from '@interfaces/channel.interface';

const channelSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  bannerUrl: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  isPublic: {
    type: Boolean,
  },
  ownerId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const channelModel = model<Channel & Document>('Channel', channelSchema);

export default channelModel;
