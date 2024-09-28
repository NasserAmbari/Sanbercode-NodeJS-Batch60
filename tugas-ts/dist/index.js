"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService = __importStar(require("./service/productService"));
const orderService = __importStar(require("./service/orderService"));
const userService = __importStar(require("./service/userService"));
const productSchema_1 = require("./schemas/productSchema");
const orderSchema_1 = require("./schemas/orderSchema");
const userSchema_1 = require("./schemas/userSchema");
const validate_1 = require("./utils/validate");
let products = [];
let orders = [];
let users = [];
const newProduct = {
    id: 1,
    name: "Smartphone",
    description: "A new phone with all new features",
    price: 100,
    category: "Mobile Phone",
    stock: 10,
};
if ((0, validate_1.validate)(newProduct, productSchema_1.productSchema)) {
    products = productService.addProduct(products, newProduct);
}
else {
    console.log("Product is invalid");
}
const newUser = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password",
    address: "Jl. Imam Bonjol",
};
if ((0, validate_1.validate)(newUser, userSchema_1.userSchema)) {
    users = userService.addUser(users, newUser);
}
else {
    console.log("User is invalid");
}
const newOrder = {
    id: 1,
    userId: 1,
    products: [{ productId: 1, quantity: 1 }],
    totalAmount: 100,
    orderDate: new Date(),
    status: "pending",
};
if ((0, validate_1.validate)(newOrder, orderSchema_1.orderSchema)) {
    orders = orderService.placeOrder(orders, newOrder);
}
else {
    console.log("Order is invalid");
}
console.log(productService.getProducts(products));
console.log(userService.getUsers(users));
console.log(orderService.getOrders(orders));
orders = orderService.updateOrderStatus(orders, 1, "shipped");
console.log(orderService.getOrders(orders));
