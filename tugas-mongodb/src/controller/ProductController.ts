import { Request, Response } from "express";
import { ProductsModel } from "../models";

const create = async (req: Request, res: Response) => {
    try {
		const result = await ProductsModel.create(req.body);

		res.status(201).json({
			data: result,
			message: "Success Creating Product",
		})
    } catch (error) {
		const err = error as Error;
		res.status(500).json({
			data: err.message,
			message: "Failed create product",
		});
    }
}

const getAll = async (req: Request, res: Response) => {
	try {
		const result = await ProductsModel.find();
		res.status(200).json({
			data: result,
			message: "Success get all Product",
		})
	} catch (error) {
		const err = error as Error;
		res.status(500).json({
			data: err.message,
			message: "Failed get all product",
		});
	}
};

const getOne = async (req: Request, res: Response) => {
	try {
		const result = await ProductsModel.findOne({
			_id: req.params.id
		})
		res.status(200).json({
			data: result,
			message: "Success get one Product"
		})
	} catch (error) {
		const err = error as Error;
		res.status(500).json({
			data: err.message,
			message: "Failed get one Product",
		});
	}
};

const updateOne = async (req: Request, res: Response) => {
	try {
		const result = await ProductsModel.findOneAndUpdate(
			{
				_id: req.params.id
			},
			req.body,
			{
				new: true,
			}
		);
		res.status(200).json({
			data:result,
			message: "Success update one product"
		})
	} catch (error) {
		const err = error as Error;
		res.status(500).json({
			data: err.message,
			message: "Failed update one product",
		});
	}
};

const deleteOne = async (req: Request, res: Response) => {
	try {
		const result = await ProductsModel.findByIdAndDelete({
			_id: req.params.id,
		})
		res.status(200).json({
			data:result,
			message:"Success delete product"
		});
	} catch (error) {
		const err = error as Error;
		res.status(500).json({
			data: err.message,
			message: "Failed create product",
		});
	}
};

export default { create, getAll, getOne, updateOne, deleteOne };
