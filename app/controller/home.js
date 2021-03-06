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

    async studentList() {
        const studentList = this.ctx.service.home.studentList;
        const res = await studentList.index();

        this.ctx.body = {
            status: res.status,
            msg: res.msg,
            data: res.data
        }
    }

    async adminList() {
        const adminList = this.ctx.service.home.adminList;
        const res = await adminList.index();

        this.ctx.body = {
            status: res.status,
            msg: res.msg,
            data: res.data
        }
    }

    async questionList() {
        const questionList = this.ctx.service.home.questionList;
        const res = await questionList.index();

        this.ctx.body = {
            status: res.status,
            msg: res.msg,
            data: res.data
        }
    }

    async add() {
        const add = this.ctx.service.home.add;
        const body = this.ctx.request.body;
        const res = await add.index( body );

        this.ctx.body = {
            status: res.status,
            msg: res.msg,
        }
    }

    async delete() {
        const deleteIt = this.ctx.service.home.delete;
        const body = this.ctx.request.body;
        const res = await deleteIt.index( body );

        this.ctx.body = {
            status: res.status,
            msg: res.msg,
        }
    }

    async update() {
        const update = this.ctx.service.home.update;
        const body = this.ctx.request.body;        
        const res = await update.index( body );

        this.ctx.body = {
            status: res.status,
            msg: res.msg,
        }
    }

}

module.exports = HomeController;