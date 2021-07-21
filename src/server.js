import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import userRoutes from './routes/user.route';
import { handleError } from './middlewares/errorHandler';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(config.PORT, () => {
  console.log(`Github App is running on ${config.PORT} `);
});

app.use('/v1/', userRoutes);

app.use(async (err, req, res, next) => {
  console.log('Received Request For:->: %s %s ', await req.url, await req.meth);
  handleError(req, res, err);
});
