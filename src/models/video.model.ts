import { model, Schema, Document } from 'mongoose';
import { Video } from '@interfaces/video.interface';

const videoSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  accessType: {
    type: Boolean,
  },
  size: {
    type: Number,
    required: true,
  },
  ownerId: {
    type: String,
    required: true,
  },
  channelId: {
    type: Schema.Types.ObjectId,
    ref: 'Channel',
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const videoModel = model<Video & Document>('Video', videoSchema);

export default videoModel;
