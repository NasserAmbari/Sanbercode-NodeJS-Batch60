import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: [String],
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        qty: {
            type: Number,
            required: true,
            min: [1, "Minimal Quantity 1"]
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        }
    },
    {
        timestamps:true
    }
);

const ProductsModel = mongoose.model("Products", ProductsSchema);

export default ProductsModel;