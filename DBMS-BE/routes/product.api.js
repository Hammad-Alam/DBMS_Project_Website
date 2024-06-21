import { Router } from 'express';
import { createProducts, deleteProducts, fetchProductById, fetchProducts, getProductsByCategories, popularProduct, updateProducts } from '../controller/product.controller.js';

export default class ProductAPI {
    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/', fetchProducts);
        this.router.get('/:id', fetchProductById);
        this.router.delete('/:id', deleteProducts);
        this.router.put('/:id', updateProducts);
        this.router.post('/', createProducts);
        this.router.get('/fetch/popular', popularProduct);
        this.router.get('/category/:category', getProductsByCategories);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/product';
    }
}