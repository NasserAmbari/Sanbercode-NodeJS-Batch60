import Router from "express";
import { CategoryController } from "../controller";

const router = Router();

router.get(`/`, CategoryController.getAll);
router.get(`/:id`, CategoryController.getOne);
router.post(`/`, CategoryController.create);
router.put(`/:id`, CategoryController.updateOne);
router.delete(`/:id`, CategoryController.deleteOne);

export default router;
