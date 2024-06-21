import { Router } from 'express';
import RootAPI from './root.api.js';
import AuthAPI from './auth.api.js';
import SupportAPI from './support.api.js';
import ProductAPI from './product.api.js';
import OrderAPI from './order.api.js';

export default class API {
    constructor(app) {
        this.app = app;
        this.router = Router();
        this.routeGroups = [];
    }

    loadRouteGroups() {
        this.routeGroups.push(new RootAPI());
        this.routeGroups.push(new AuthAPI());
        this.routeGroups.push(new SupportAPI())
        this.routeGroups.push(new ProductAPI())
        this.routeGroups.push(new OrderAPI())

    }

    setContentType(req, res, next) {
        res.set('Content-Type', 'application/json');
        next();
    }

    registerGroups() {
        this.loadRouteGroups();
        this.routeGroups.forEach((rg) => {
            console.log('Route group: ' + rg.getRouterGroup());
            this.app.use('/api' + rg.getRouterGroup(), this.setContentType, rg.getRouter());
        });
    }
}