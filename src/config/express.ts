import express from 'express';
import ejs from 'ejs';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env['port'] || 5000

app.set('port', port)
app.set('view engine', 'ejs')
app.engine('html', ejs.renderFile)
app.set('views', path.join(__dirname, 'views'))

app.use(helmet());
app.use(
	cors({
		origin: '*',
		allowedHeaders: ['Content-Type'],
		methods: ['GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD'],
	})
);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app