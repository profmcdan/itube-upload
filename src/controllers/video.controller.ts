import VideoService from '@services/video.service';
import { NextFunction, Request, Response } from 'express';
import { Video } from '@interfaces/video.interface';
import { CreateVideoDto } from '@dtos/videos.dto';

class VideoController {
  public videoService = new VideoService();

  public getVideos = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const videos: Video[] = await this.videoService.findAllVideos();
      res.status(200).json({ data: videos });
    } catch (error) {
      next(error);
    }
  };

  public getVideoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const videoId: string = req.params.id;
      const video: Video = await this.videoService.findVideoById(videoId);
      res.status(200).json({ data: video });
    } catch (error) {
      next(error);
    }
  };

  public createVideo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const videoData: CreateVideoDto = req.body;
      const video: Video = await this.videoService.createVideo(videoData);
      res.status(201).json({ data: video });
    } catch (error) {
      next(error);
    }
  };

  public updateVideo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const videoId: string = req.params.id;
      const videoData: CreateVideoDto = req.body;
      const video: Video = await this.videoService.updateVideo(videoId, videoData);
      res.status(200).json({ data: video });
    } catch (error) {
      next(error);
    }
  };

  public deleteVideo = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const videoId: string = req.params.id;
      const video: Video = await this.videoService.deleteVideo(videoId);
      res.status(200).json({ data: video });
    } catch (error) {
      next(error);
    }
  };
}

export default VideoController;
