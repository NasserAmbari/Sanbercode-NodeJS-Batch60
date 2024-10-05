import Router from "express";
import { ProductController } from "../controller";

const router = Router();

router.get(`/`, ProductController.getAll);
router.get(`/:id`, ProductController.getOne);
router.post(`/`, ProductController.create);
router.put(`/:id`, ProductController.updateOne);
router.delete(`/:id`, ProductController.deleteOne);

export default router;
