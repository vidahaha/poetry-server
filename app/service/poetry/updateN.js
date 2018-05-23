const Service = require('egg').Service;

class UpdateNService extends Service {
  	async index( body ) {
        console.log( body )
		let table = ['choice_question', 'judge_question', 'admiring_question'];
		let result = await this.ctx.app.mysql.update(table[type], body);

    	if ( result ) {
            return {
                status: true,
                msg: '修改成功'
            }
        } else {
            return {
                status: false,
                msg: '修改失败'
            }
        } 

  	}
}

module.exports = UpdateNService;