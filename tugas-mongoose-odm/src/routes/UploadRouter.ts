import Router from "express";
import { UploadController } from "../controller";
import { multiple,single } from "../middleware/upload";

const router = Router();

router.post(`/single`, single, UploadController.singleUpload);
router.post(`/multiple`, multiple, UploadController.multipleUpload);

export default router;
