'use strict';

const Controller = require('egg').Controller;

class GlobalController extends Controller {

    async questionNum() {
        const questionNum = this.ctx.service.global.questionNum;
        const res = await questionNum.index();

        this.ctx.body = {
			status: res.status,
			msg: res.msg,
            questionNum: res.questionNum,
        }
	}

	async updateQuestionNum() {
		const questionNum = this.ctx.service.global.questionNum;
		const body = this.ctx.request.body;		
		const res = await questionNum.update(body);

        this.ctx.body = {
			status: res.status,
			msg: res.msg,
        }
	}
	
	async index() {
		const index = this.ctx.service.global.index;
        const res = await index.index();

        this.ctx.body = {
			status: res.status,
			questionNum: res.questionNum,
			studentNum: res.studentNum,
			poetryNum: res.poetryNum
        }
	}

}

module.exports = GlobalController;