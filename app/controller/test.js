'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {

    constructor(ctx) {
        super(ctx);
        this.root = 'http://localhost:7001';
    }

    async test_5() {
        let data = {
            num: [1, 5, 1]
        }
        const result = await this.ctx.curl(`${this.root}/Poetry/Library`, {
            method: 'post',
            data,
            dataType: 'json',
            contentType: 'json',
          });
        this.ctx.body = result;
    }
}

module.exports = TestController;