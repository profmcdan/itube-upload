import { NextFunction, Request, Response } from 'express';
import ChannelService from '@services/channel.service';
import { Channel } from '@interfaces/channel.interface';
import { CreateChannelDto } from '@dtos/channels.dto';

class ChannelController {
  public channelService = new ChannelService();

  public getChannels = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const channels: Channel[] = await this.channelService.findAllChannels();
      res.status(200).json({ data: channels });
    } catch (error) {
      next(error);
    }
  };

  public getChannelById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const channelId: string = req.params.id;
      const channel: Channel = await this.channelService.findChannelById(channelId);
      res.status(200).json({ data: channel });
    } catch (error) {
      next(error);
    }
  };

  public createChannel = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const channelData: CreateChannelDto = req.body;
      const channel: Channel = await this.channelService.createChannel(channelData);
      res.status(201).json({ data: channel });
    } catch (error) {
      next(error);
    }
  };

  public updateChannel = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const channelId: string = req.params.id;
      const channelData: CreateChannelDto = req.body;
      const channel: Channel = await this.channelService.updateChannel(channelId, channelData);
      res.status(200).json({ data: channel });
    } catch (error) {
      next(error);
    }
  };

  public deleteChannel = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const channelId: string = req.params.id;
      const channel: Channel = await this.channelService.deleteChannel(channelId);
      res.status(200).json({ data: channel });
    } catch (error) {
      next(error);
    }
  };
}

export default ChannelController;
