import { Router } from 'express';
import { deleteAdmin, fetchAdmins, login, register } from '../controller/index.js';

export default class AuthAPI {
    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.post('/register', register);
        this.router.post('/login', login);
        this.router.get('/admin', fetchAdmins);
        this.router.delete('/admin/:id', deleteAdmin);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/auth';
    }
}