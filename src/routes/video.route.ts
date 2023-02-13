import { Router } from 'express';
import VideoController from '@controllers/video.controller';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { CreateVideoDto } from '@dtos/videos.dto';

class VideoRoute implements Routes {
  public path = '/videos';
  public router = Router();
  public videosController = new VideoController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.videosController.getVideos);
    this.router.get(`${this.path}/:id`, this.videosController.getVideoById);
    this.router.post(`${this.path}`, validationMiddleware(CreateVideoDto, 'body'), this.videosController.createVideo);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateVideoDto, 'body', true), this.videosController.updateVideo);
    this.router.delete(`${this.path}/:id`, this.videosController.deleteVideo);
  }
}

export default VideoRoute;
