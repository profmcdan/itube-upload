import channelModel from '@models/channel.model';
import { isEmpty } from '@utils/util';
import { HttpException } from '@exceptions/HttpException';
import { Channel } from '@interfaces/channel.interface';
import { CreateChannelDto } from '@dtos/channels.dto';

class ChannelService {
  public channels = channelModel;

  public async findAllChannels(): Promise<Channel[]> {
    return this.channels.find();
  }

  public async findChannelById(channelId: string): Promise<Channel> {
    if (isEmpty(channelId)) throw new HttpException(400, 'channelId is empty');

    const channel: Channel = await this.channels.findOne({ _id: channelId });
    if (!channel) throw new HttpException(404, 'Channel does not exist');

    return channel;
  }

  public async createChannel(channelData: CreateChannelDto, bannerUrl: string): Promise<Channel> {
    if (isEmpty(channelData)) throw new HttpException(400, 'channelData is empty');
    const title = channelData.title.toLowerCase().split(' ').join('-');
    const slug = title + '-' + Date.now().toString();
    return await this.channels.create({ ...channelData, slug: slug, bannerUrl: bannerUrl });
  }

  public async updateChannel(channelId: string, channelData: CreateChannelDto): Promise<Channel> {
    if (isEmpty(channelData)) throw new HttpException(400, 'channelData is empty');

    const updated: Channel = await this.channels.findByIdAndUpdate(channelId, { channelData });
    if (!updated) throw new HttpException(400, 'Channel does not exists');
    return updated;
  }

  public async deleteChannel(channelId: string): Promise<Channel> {
    const deleted: Channel = await this.channels.findByIdAndDelete(channelId);
    if (!deleted) throw new HttpException(400, 'Channel does not exists');
    return deleted;
  }
}

export default ChannelService;
