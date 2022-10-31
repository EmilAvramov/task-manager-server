import ejs from 'ejs';
import { Router } from 'express';

const taskController = Router();

taskController.get('/', (req, res) => {
	let html = ejs.render('<h2>Success</h2>');
	try {
		res.status(200).send(html);
	} catch (err: any) {
		res.status(400).send(html);
	}
});

export { taskController };
