'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {

    async login() {
        const login = this.ctx.service.admin.login;
        const body = this.ctx.request.body;
        const res = await login.checkLogin(body);

        this.ctx.body = {
            status: res.status,
            msg: res.msg
        }
    }

    async add() {
        const reg = this.ctx.service.admin.add;
        const body = this.ctx.request.body;
        const res = await reg.checkReg(body);

        this.ctx.body = {
            status: res.status,
            msg: res.msg
        }
    }
}

module.exports = AdminController;