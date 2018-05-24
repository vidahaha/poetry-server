const Service = require('egg').Service;

class UpdateNService extends Service {
  	async index( body ) {
        let type = body.type;
        let row = {};

        for ( let key in body ) {
            if (key =='type' ) continue;
            if (key == 'option') body[key] = body[key].join('|'); 
            row[key] = body[key];
        }
        
		let table = ['choice_question', 'judge_question', 'admiring_question'];
		let result = await this.app.mysql.update(table[type], row);

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