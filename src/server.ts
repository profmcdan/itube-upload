import App from '@/app';
import IndexRoute from '@routes/index.route';
import VideoRoute from '@routes/video.route';
import validateEnv from '@utils/validateEnv';
import ChannelRoute from '@routes/channel.route';

validateEnv();

const app = new App([new IndexRoute(), new VideoRoute(), new ChannelRoute()]);

app.listen();
