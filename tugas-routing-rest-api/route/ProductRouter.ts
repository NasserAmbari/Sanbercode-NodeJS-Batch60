import Router from "express";
import { ProductController } from "../controller";

const router = Router();

router.get(`/`, ProductController.getAllProducts);
router.get(`/search`, ProductController.getProductBySearch);
router.get(`/category/:category`, ProductController.getProductByIdAndSearch);
router.get(`/search/:id`, ProductController.getProductById);
router.post(`/`, ProductController.createProduct);
router.put(`/:id`, ProductController.updateProduct);
router.delete(`/:id`, ProductController.deleteProduct);

export default router;
