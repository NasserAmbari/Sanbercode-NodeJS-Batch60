import express from "express";
import { ProductRouter } from "../route";
import { JsonParser } from "../middleware";

const PORT = 3000;
const API_VERSION = "/api/v1";

const init = () => {
    const app = express();
	
	app.use(JsonParser);

	app.use(`${API_VERSION}/products`, ProductRouter);

	app.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	});
}

init();