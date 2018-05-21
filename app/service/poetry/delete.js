const Service = require('egg').Service;

class DeleteService extends Service {
  	async index( body ) {
		let {type, id} = body,
			table = ['choice_question', 'judge_question', 'admiring_question'];

		let result = await this.ctx.app.mysql.delete(table[type], {
			id
		});

    	if( result ) {
            return {
                status: true,
                msg: '删除成功'
            }
        } else {
            return {
                status: false,
                msg: '删除失败'
            }
        } 

  	}
}

module.exports = DeleteService;