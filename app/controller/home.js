'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'hi, this is index';
    }

    async login() {
        const login = this.ctx.service.home.login;
        const body = this.ctx.request.body;
        const res = await login.checkLogin(body);

        this.ctx.body = {
            status: res.status,
            msg: res.msg
        }
    }

    async reg() {
        const reg = this.ctx.service.home.reg;
        const body = this.ctx.request.body;
        const res = await reg.checkReg(body);

        this.ctx.body = {
            status: res.status,
            msg: res.msg
        }
    }
}

module.exports = HomeController;