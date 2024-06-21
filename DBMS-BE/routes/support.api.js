import { Router } from 'express';
import { createSupportMessage, fetchSupportMessages } from '../controller/support.controller.js';

export default class SupportAPI {
    constructor() {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.post('/', createSupportMessage);
        this.router.get('/',fetchSupportMessages);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/support';
    }
}