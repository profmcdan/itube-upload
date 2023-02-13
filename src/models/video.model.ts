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
});

const videoModel = model<Video & Document>('Video', videoSchema);

export default videoModel;
