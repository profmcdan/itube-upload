import videoModel from '@models/video.model';
import { Video } from '@interfaces/video.interface';
import { isEmpty } from '@utils/util';
import { HttpException } from '@exceptions/HttpException';
import { CreateVideoDto } from '@dtos/videos.dto';
import VideoRoute from '@routes/video.route';

class VideoService {
  public videos = videoModel;

  public async findAllVideos(): Promise<Video[]> {
    return this.videos.find();
  }

  public async findVideoById(videoId: string): Promise<Video> {
    if (isEmpty(videoId)) throw new HttpException(400, 'VideoId is empty');

    const video: Video = await this.videos.findOne({ _id: videoId });
    if (!video) throw new HttpException(404, 'Video does not exist');

    return video;
  }

  public async createVideo(videoData: CreateVideoDto): Promise<Video> {
    if (isEmpty(videoData)) throw new HttpException(400, 'videoData is empty');

    return await this.videos.create({ ...videoData });
  }

  public async updateVideo(videoId: string, videoData: CreateVideoDto): Promise<Video> {
    if (isEmpty(videoData)) throw new HttpException(400, 'videoData is empty');

    const updatedVideo: Video = await this.videos.findByIdAndUpdate(videoId, { videoData });
    if (!updatedVideo) throw new HttpException(400, 'Video does not exists');
    return updatedVideo;
  }

  public async deleteVideo(videoId: string): Promise<Video> {
    const deletedVideo: Video = await this.videos.findByIdAndDelete(videoId);
    if (!deletedVideo) throw new HttpException(400, 'Video does not exists');
    return deletedVideo;
  }
}

export default VideoService;
