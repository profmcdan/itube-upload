import App from '@/app';
import IndexRoute from '@routes/index.route';
import VideoRoute from '@routes/video.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new VideoRoute()]);

app.listen();
