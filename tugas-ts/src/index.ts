import { Product } from "./models/product";
import { Order } from "./models/order";
import { User } from "./models/user";

import * as productService from "./service/productService";
import * as orderService from "./service/orderService";
import * as userService from "./service/userService";

import { productSchema } from "./schemas/productSchema";
import { orderSchema } from "./schemas/orderSchema";
import { userSchema } from "./schemas/userSchema";

import { validate } from "./utils/validate";

let products: Product[] = [];
let orders: Order[] = [];
let users: User[] = [];

const newProduct: Product = {
	id: 1,
	name: "Smartphone",
	description: "A new phone with all new features",
	price: 100,
	category: "Mobile Phone",
	stock: 10,
};

if (validate(newProduct, productSchema)) {
	products = productService.addProduct(products, newProduct);
} else {
	console.log("Product is invalid");
}

const newUser: User = {
	id: 1,
	name: "John Doe",
	email: "john.doe@example.com",
	password: "password",
	address: "Jl. Imam Bonjol",
};

if (validate(newUser, userSchema)) {
	users = userService.addUser(users, newUser);
} else {
	console.log("User is invalid");
}

const newOrder: Order = {
	id: 1,
	userId: 1,
	products: [{ productId: 1, quantity: 1 }],
	totalAmount: 100,
	orderDate: new Date(),
	status: "pending",
};

if (validate(newOrder, orderSchema)) {
	orders = orderService.placeOrder(orders, newOrder);
} else {
	console.log("Order is invalid");
}

console.log(productService.getProducts(products));
console.log(userService.getUsers(users));
console.log(orderService.getOrders(orders));

orders = orderService.updateOrderStatus(orders, 1, "shipped");
console.log(orderService.getOrders(orders));
