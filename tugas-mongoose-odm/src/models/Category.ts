import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const CatagorySchema = new Schema(
    {
        name: {
            type: String,
            requied: true,
        },
        description: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

const CategoryModel = mongoose.model("Category", CatagorySchema);

export default CategoryModel;