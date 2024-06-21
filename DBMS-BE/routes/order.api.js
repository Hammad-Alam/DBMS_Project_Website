import { Router } from 'express';
import { createChecoout, order, pendingCount, statusChange, totalIncome } from '../controller/order.controller.js';

export default class OrderAPI {
    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.post('/checkout', createChecoout);
        this.router.get('/', order);
        this.router.get('/pending/count', pendingCount);
        this.router.put('/status', statusChange);
        this.router.get('/total', totalIncome);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/order';
    }
}