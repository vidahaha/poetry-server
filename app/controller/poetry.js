'use strict';

const Controller = require('egg').Controller;

class PoetryController extends Controller {

    async library() {
        const library = this.ctx.service.poetry.library;
        const body = this.ctx.request.body;
        const res = await library.index(body);

        this.ctx.body = {
            status: res.status,
            msg: res.msg,
            data: res.data
        }
    }

    async grade() {
        const grade = this.ctx.service.poetry.grade;
        const body = this.ctx.request.body;
        const res = await grade.index(body);

        this.ctx.body = {
            status: res.status,
            msg: res.msg,
            data: res.data
        }
    }

    async add() {
        const add = this.ctx.service.poetry.add;
        const body = this.ctx.request.body;
        const res = await add.index(body);

        this.ctx.body = {
            status: res.status,
            msg: res.msg,
        }
    }

    async delete() {
        const deleteIt = this.ctx.service.poetry.delete;
        const body = this.ctx.request.body;
        const res = await deleteIt.index(body);

        this.ctx.body = {
            status: res.status,
            msg: res.msg,
        }
    }
}

module.exports = PoetryController;