import { Router } from 'express';

const healthController = Router();

healthController.get('/', (req, res) => {
	try {
		res.status(200).json({ status: 'healthy' });
	} catch (err: any) {
		res.status(400).json({ status: 'not healthy' });
	}
});

export { healthController };
