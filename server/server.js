import express from 'express';
const cors = require('cors');
import mongoose from 'mongoose';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import bluebird from 'bluebird';

import config from './config';
import authRoute from './routes/auth';
import userRoute from './routes/user';
import articleRoute from './routes/article';
import pageRoute from './routes/page';
import errorHandler from './middlewares/errorHandler';
import getUser from './middlewares/getUser';
import checkToken from './middlewares/checkToken';

const app = express();

mongoose.Promise = bluebird;
mongoose.connect(config.database, err => {
	if(err) {
		throw err
	}

	console.log(`Mongo connected`);
});

app.use(cors());
app.options('*', cors());

app.listen(config.port, err => {
	if (err) throw err;

	console.log(`Server listening on port ${config.port}`);
})

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	resave: true,
	saveUnitialized: true,
	secret: config.secret
}));

app.use('/api', authRoute);
app.use('/api', checkToken, userRoute);
app.use('/api', checkToken, articleRoute);
app.use(getUser);
app.use('/api', checkToken, pageRoute);

app.use(errorHandler);