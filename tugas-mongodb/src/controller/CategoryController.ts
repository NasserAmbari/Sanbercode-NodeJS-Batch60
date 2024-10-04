import { Request, Response } from "express";
import { CategoryModel } from "../models";

const create = async (req: Request, res: Response) => {
	try {
		const result = await CategoryModel.create(req.body);
		res.status(201).json({
			data: result,
			message: "Success Creating Category",
		});
	} catch (error) {
		const err = error as Error;
		res.status(500).json({
			data: err.message,
			message: "Failed create Category",
		});
	}
};

const getAll = async (req: Request, res: Response) => {
	try {
		const result = await CategoryModel.find();
		res.status(200).json({
			data: result,
			message: "Success get all Category",
		});
	} catch (error) {
		const err = error as Error;
		res.status(500).json({
			data: err.message,
			message: "Failed get all Category",
		});
	}
};

const getOne = async (req: Request, res: Response) => {
	try {
		const result = await CategoryModel.findOne({
			_id: req.params.id,
		});
		res.status(200).json({
			data: result,
			message: "Success get one Category",
		});
	} catch (error) {
		const err = error as Error;
		res.status(500).json({
			data: err.message,
			message: "Failed get one Category",
		});
	}
};

const updateOne = async (req: Request, res: Response) => {
	try {
		const result = await CategoryModel.findOneAndUpdate(
			{
				_id: req.params.id,
			},
			req.body,
			{
				new: true,
			}
		);
		res.status(200).json({
			data: result,
			message: "Success update one Category",
		});
	} catch (error) {
		const err = error as Error;
		res.status(500).json({
			data: err.message,
			message: "Failed update one Category",
		});
	}
};

const deleteOne = async (req: Request, res: Response) => {
	try {
		const result = await CategoryModel.findByIdAndDelete({
			_id: req.params.id,
		});
		res.status(200).json({
			data: result,
			message: "Success delete Category",
		});
	} catch (error) {
		const err = error as Error;
		res.status(500).json({
			data: err.message,
			message: "Failed create Category",
		});
	}
};

export default {
	create,
	getAll,
	getOne,
	updateOne,
	deleteOne,
};
