process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import ProductsRoute from '@routes/products.route';
import validateEnv from '@utils/validateEnv';
import OffersRoute from './routes/offers.route';

validateEnv();

const app = new App([new IndexRoute(), new ProductsRoute(), new UsersRoute(), new AuthRoute(), new OffersRoute()]);

app.listen();
