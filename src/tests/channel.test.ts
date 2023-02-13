import ChannelRoute from '../routes/channel.route';
import mongoose from 'mongoose';
import App from '../app';
import request from 'supertest';

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
});
