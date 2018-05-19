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
}

module.exports = PoetryController;