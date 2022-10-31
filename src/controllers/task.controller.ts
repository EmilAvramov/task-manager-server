import { render } from 'ejs';
import { Router } from 'express';

const taskController = Router();

taskController.get('/', (req, res) => {
	try {
		let html = render('index')
		res.status(200).render(html);
	} catch (err: any) {
		res.status(400).send({ error: 'something went wrong' });
	}
});

export { taskController };
