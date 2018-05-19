const Service = require('egg').Service;

class UpdateService extends Service {
  	async index( body ) {
		let {type, id, question, option, answer, analysis, image} = body,
            table = ['choice_question', 'judge_question', 'admiring_question'];
            
        if ( option ) option = option.join('|');   

        for ( let key in body ) {
            if ( key == 'type' ) continue;
            row[key] = body[key];
        }

        console.log( row )

		let result = await this.ctx.app.mysql.update(table[type], row);

    	if( result ) {
            return {
                status: false,
                msg: '修改失败'
            }
        } else {
            return {
                status: true,
                msg: '修改成功'
            }
        } 

  	}
}

module.exports = UpdateService;