import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import ChannelController from '@controllers/channel.controller';
import { CreateChannelDto } from '@dtos/channels.dto';
import multer from "multer";

const upload = multer();

class ChannelRoute implements Routes {
  public path = '/channels';
  public router = Router();
  public channelController = new ChannelController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.channelController.getChannels);
    this.router.get(`${this.path}/:id`, this.channelController.getChannelById);
    this.router.post(
      `${this.path}`,
      upload.single('bannerImage'),
      validationMiddleware(CreateChannelDto, 'body'),
      this.channelController.createChannel,
    );
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateChannelDto, 'body', true), this.channelController.updateChannel);
    this.router.delete(`${this.path}/:id`, this.channelController.deleteChannel);
  }
}

export default ChannelRoute;
