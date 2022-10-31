import express from 'express';
import ejs from 'ejs';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import { healthController } from '../controllers/health.controller';
import { taskController } from '../controllers/task.controller';

dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'views'));

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

app.use('/health', healthController)
app.use('/tasks', taskController)

export { app };
