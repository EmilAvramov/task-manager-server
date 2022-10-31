import express from 'express';
import ejs from 'ejs';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import { healthController } from '../controllers/health.controller';
import { taskController } from '../controllers/task.controller';
import path from 'path';

dotenv.config();

const app = express();

app.set('views', path.join(__dirname, '../views/pages'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

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
app.use(
	'/css',
	express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))
);
app.use(
	'/js',
	express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))
);

app.use('/health', healthController);
app.use('/tasks', taskController);

export { app };
