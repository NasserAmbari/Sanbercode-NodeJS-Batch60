import { v2 as cloudinary } from "cloudinary";
import {
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET,
	CLOUDINARY_CLOUD_NAME,
} from "./env";

cloudinary.config({
	cloud_name: CLOUDINARY_CLOUD_NAME,
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET,
});

interface UploadResult {
	secure_url: string;
	public_id: string;
}

export const handleUpload = async (file: string): Promise<UploadResult> => {
	return new Promise((resolve, reject) => {
		cloudinary.uploader.upload(
			file,
			{
				resource_type: "auto",
			},
			(error, result) => {
				if (error) {
					reject(error);
				} else {
					resolve(result as UploadResult);
				}
			}
		);
	});
};

export default cloudinary;
