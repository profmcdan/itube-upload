import ChannelRoute from '../routes/channel.route';
import mongoose from 'mongoose';
import App from '../app';
import request from 'supertest';
import { CreateChannelDto } from '../dtos/channels.dto';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Channels', () => {
  describe('[GET] /users', () => {
    it('response findAll channels', async () => {
      const channelRoute = new ChannelRoute();
      const channels = channelRoute.channelController.channelService.channels;

      channels.find = jest.fn().mockReturnValue([
        {
          _id: 'c95139cb7828',
          title: 'Reggae Music',
          bannerUrl: 'https://github.com/bootstrapping-microservices/chapter-2/tree/main/example-2',
          slug: 'reggae-music-1676289986716',
          isPublic: true,
          ownerId: 'danielale9291',
        },
        {
          _id: 'c95129cb7828',
          title: 'Reggae Music',
          bannerUrl: 'https://github.com/bootstrapping-microservices/chapter-2/tree/main/example-2',
          slug: 'reggae-music-1676289986716',
          isPublic: true,
          ownerId: 'danielale9291',
        },
        {
          _id: 'c951b9cb1828',
          title: 'Reggae Music',
          bannerUrl: 'https://github.com/bootstrapping-microservices/chapter-2/tree/main/example-2',
          slug: 'reggae-music-1676289986716',
          isPublic: true,
          ownerId: 'danielale9291',
        },
      ]);

      (mongoose as any).connect = jest.fn();
      const app = new App([channelRoute]);
      return request(app.getServer()).get(`${channelRoute.path}`).expect(200);
    });
  });

  describe('[GET] api/v1/channels/:id', () => {
    it('response findOne Channel', async () => {
      const channelId = 'c951b9cb1828';

      const channelsRoute = new ChannelRoute();
      const channels = channelsRoute.channelController.channelService.channels;

      channels.findOne = jest.fn().mockReturnValue({
        _id: 'c951b9cb1828',
        title: 'Reggae Music',
        bannerUrl: 'https://github.com/bootstrapping-microservices/chapter-2/tree/main/example-2',
        slug: 'reggae-music-1676289986716',
        isPublic: true,
        ownerId: 'danielale9291',
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([channelsRoute]);
      return request(app.getServer()).get(`${channelsRoute.path}/${channelId}`).expect(200);
    });
  });

  describe('[POST] api/v1/channels', () => {
    it('response Create Channel', async () => {
      const channelData: CreateChannelDto = {
        title: 'Reggae Music Test',
        bannerUrl: 'https://github.com/bootstrapping-microservices/chapter-2/tree/main/example-2',
        isPublic: true,
        ownerId: 'danielale9291',
      };

      const channelsRoute = new ChannelRoute();
      const channels = channelsRoute.channelController.channelService.channels;

      channels.findOne = jest.fn().mockReturnValue(null);
      channels.create = jest.fn().mockReturnValue({
        _id: '60706478aad6c9ada31c84',
        title: channelData.title,
        bannerUrl: channelData.bannerUrl,
        isPublic: channelData.isPublic,
        ownerId: channelData.ownerId,
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([channelsRoute]);
      return request(app.getServer()).post(`${channelsRoute.path}`).send(channelData).expect(201);
    });
  });

  describe('[PUT] api/v1/channels/:id', () => {
    it('response Update Channel', async () => {
      const channelId = '60706478aad6c9ada31c84';
      const channelData = {
        title: 'Reggae Test 2',
        isPublic: false,
      };

      const channelsRoute = new ChannelRoute();
      const channels = channelsRoute.channelController.channelService.channels;

      channels.findByIdAndUpdate = jest.fn().mockReturnValue({
        _id: channelId,
        title: channelData.title,
        isPublic: channelData.isPublic,
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([channelsRoute]);
      return request(app.getServer()).put(`${channelsRoute.path}/${channelId}`).send(channelData);
    });
  });

  describe('[DELETE] /api/v1/channels/:id', () => {
    it('response Delete Channel', async () => {
      const channelId = '60706478aad6c9ada31c84';

      const channelRoute = new ChannelRoute();
      const channels = channelRoute.channelController.channelService.channels;

      channels.findByIdAndDelete = jest.fn().mockReturnValue({
        _id: '60706478aad6c9ad19a31c84',
        title: 'Reggae Music Test',
        bannerUrl: 'https://github.com/bootstrapping-microservices/chapter-2/tree/main/example-2',
        isPublic: true,
        ownerId: 'danielale9291',
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([channelRoute]);
      return request(app.getServer()).delete(`${channelRoute.path}/${channelId}`).expect(200);
    });
  });
});
