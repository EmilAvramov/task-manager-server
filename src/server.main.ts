import { app } from "./config/express";

try {
	app.listen(5000, () => console.log('Server listening to port 5000...'))
} catch (err:any) {
	console.log(err)
}