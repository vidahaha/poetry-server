const Service = require('egg').Service;

class UpdateService extends Service {
  	async index( body ) {

        let table = ['choice_question', 'judge_question', 'admiring_question'];

        const stream = await this.ctx.getFileStream();  

        let {type, question, option, answer, analysis} = stream.fields;

        if ( option ) option = option.join('|');   

        for ( let key in body ) {
            if ( key == 'type' ) continue;
            row[key] = body[key];
        }


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