import express from "express";
import bodyParser from "body-parser";

import { connect } from "./utils";
import { ProductRouter, CatagoryRouter,UploadRouter } from "./routes";

const PORT = process.env.SERVER_PORT

const init = async () => {
	try {
		const app = express();
		
		await connect();

		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: true }));

		app.use("/api/v1/category", CatagoryRouter);
		app.use("/api/v1/products", ProductRouter);
		app.use("/api/v1/uploads", UploadRouter);

		app.listen(PORT, () => {
			console.log(`Server is running at http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}

init();