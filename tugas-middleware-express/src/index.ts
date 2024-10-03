import express, { Request, Response } from "express";
import multer from "multer";
import bodyParser from "body-parser";

import cloudinary, { handleUpload } from "./utils/cloudinary";
const PORT = 3000;

function init() {
  const app = express();
  const upload = multer({ dest: "uploads/" });
  app.use(bodyParser.json());

  app.post("/api/v1/single", upload.single("image"), async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      const singleImage = req.file.path;
      const result = await handleUpload(singleImage);

      console.log(result);
      res.status(201).json({
        message: "Image uploaded successfully!",
        url: result.secure_url, 
        public_id: result.public_id, 
        result,
      });

    } catch (error: any) {
      res.status(500).json({
        message: "Failed to upload image",
        error: error.message,
      });
    }
  });


  app.post( "/api/v1/multiple", upload.array("images", 5), async (req: Request, res: Response) => {
    console.log(req.files);
    try {
      const files = req.files as Express.Multer.File[];
      if (!files || files.length === 0) {
        return res.status(400).json({ message: "No files uploaded" });
      }

      const uploadPromises = files.map(async (file) => {
        const filePath = file.path;
        return await handleUpload(filePath);
      });

      const results = await Promise.all(uploadPromises);

      const response = results.map((result) => ({
        url: result.secure_url,
        public_id: result.public_id,
      }));

      res.status(201).json({
        message: "Images uploaded successfully!",
        files: response,
      });

      } catch (error: any) {
        res.status(500).json({
          message: "Failed to upload images",
          error: error.message,
        });
      }
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
