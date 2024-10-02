import { Request, Response } from "express";

const products = [
	{ id: 1, katagori: "Elektronik", name: "Handphone" },
	{ id: 2, katagori: "Perabotan", name: "Meja" },
];

const getAllProducts = (req: Request, res: Response) => {
    try {
        if(products.length === 0){ res.status(204).send() }

        res.status(200).json({
            message: "Ok",
            data: products
        });

    } catch (error) {
        console.error(`Error in getAllProducts: ${error}`);
		res.status(500).json({
			message: "Internal Server Error",
			error: error instanceof Error ? error.message : "Unknown error",
		});
    }
}

const getProductById = (req: Request, res: Response) => {
    try {
        const productId = parseInt(req.params.id);
        
        if(isNaN(productId)){ 
            res.status(400).json({ message: "Invalid Product ID" });
        }

        const product = products.find((items) => items.id === productId);

        if(!product) {
            res.status(404).json({ message: "Product not found" })
        }

        res.status(200).json({
            message: "Product retrieved sucessfully",
            data: product
        })
    } catch (error) {
        console.error(`Error in getProductById: ${error}`);
        res.status(500).json({
            message: "Internal Server Error",
            error:
                error instanceof Error
                    ? error.message
                    : "Unknown error",
        });
    }
}

const getProductBySearch = (req: Request, res: Response) => {
    try {
        const nameProduct = req.query.name;

        if(!nameProduct){
            res.status(404).json({ message: "Product not Found" } );
        }

        const product = products.find(items => items.name === nameProduct);
        
        res.status(200).json({
            message: "Sucessfully find product",
            name: product
        });
    } catch (error) {
        console.error(`Error in search product: ${error}`);
        res.status(500).json({
            message: "Internal Server Error",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
}

const getProductByIdAndSearch = (req: Request, res: Response) => {
    try {
		const nameCategory = req.params.category;

        if (!nameCategory) {
            res.status(404).json({ message: "Name product not Found" });
        }

		const nameProduct = req.query.name;

        if (!nameProduct) {
			res.status(404).json({ message: "Category not Found" });
		}

		const product = products.find(
			(items) =>
				items.katagori === nameCategory && items.name === nameProduct
		);

        if (!product) {
            res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            message: "Successfully find product",
            data: product
        });
	} catch (error) {
        console.error(`Error in search product: ${error}`);
		res.status(500).json({
			message: "Internal Server Error",
			error: error instanceof Error ? error.message : "Unknown error",
		});
    }
}

const createProduct = (req: Request, res: Response) => {
    try {
        const { name, katagori } = req.body;
        
        if(!name){
            res.status(400).json({ message: "Product name is required" });
        }

        const newProduct = {
			id: products.length + 1,
			name,
			katagori,
		};
        
        products.push(newProduct);

        res.status(201).json({
            message: "Product Created Successfully",
            data: newProduct,
        })
    } catch (error) {
        console.error(`Error in creation product: ${error}`);
        res.status(500).json({
            message: "Internal Server Error",
            error: error instanceof Error ? error.message: "Unknown Error",
        })
    }
}

const updateProduct = (req: Request, res: Response) => {
    try {
        const productId = parseInt(req.params.id);
         
        if(isNaN(productId)){
            res.status(400).json({ message: "invalid product ID" });
        }

        const { name } = req.body;

        if(!name) {
            res.status(400).json({ message: "Product name is required" });
        }

        const productIndex = products.findIndex((items) => items.id === productId);

        if (productIndex === -1) {
            res.status(404).json({ message: "Product not found",});
        }

        products[productIndex].name = name;

        res.status(200).json({
			message: "Product updated successfully",
			data: products[productIndex],
		});

    } catch (error) {
        console.error(`Error in update product: ${error}`);
		res.status(500).json({
			message: "Internal Server Error",
			error: error instanceof Error ? error.message : "Unknown error",
		});
    }
}

const deleteProduct = (req: Request, res: Response) => {
    try {
        const productId = parseInt(req.params.id);
        
        if(isNaN(productId)){
            res.status(400).json({ message: "Invalid Product ID"})
        }

        const productIndex = products.findIndex((items)=> items.id === productId);

        if(productIndex === -1){
            res.status(404).json({message: "Product not Found"})
        }

        products.splice(productIndex, 1);

        res.status(202).json({
            message: "Product delete succesfuly",
        });
    } catch (error) {
        console.error(`Error in delete product: ${error}`);
        res.status(500).json({
			message: "Internal Server Error",
			error: error instanceof Error ? error.message : "Unknown error",
		});
    }
}

export {
	getAllProducts,
	getProductById,
    getProductBySearch,
    getProductByIdAndSearch,
	createProduct,
	updateProduct,
	deleteProduct,
};