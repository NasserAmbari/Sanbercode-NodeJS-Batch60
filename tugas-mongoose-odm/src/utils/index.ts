import  cloudinary, {handleUpload} from "./cloudinary";
import connect from "./database";
import { toDataURI } from "./encode";

export { cloudinary, handleUpload, connect, toDataURI };