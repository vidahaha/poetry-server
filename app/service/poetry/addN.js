const Service = require('egg').Service;

class AddNService extends Service {
  	async index( body ) {
		
		let	table = ['choice_question', 'judge_question', 'admiring_question'];

		
		let {type, question, option, answer, analysis} = body;

		let result = {};

		if ( typeof type !== 'number' ) type = parseInt(type);


		if (option) {
			option = option.split(',').join('|');
		}

        switch (type) {
			case 0 : {
				result = await this.app.mysql.insert(table[type], {
					question,
					answer,
					option,
					analysis
				});
				break;
			}
			case 1: {
				result = await this.app.mysql.insert(table[type], {
					question,
					answer,
					analysis
				});
				break;
			}
			case 2 : {
				result = await this.app.mysql.insert(table[type], {
					question,
					answer,
					option,
					analysis,
				});
				break;
			}
		}

    	if( result ) {
			return {
                status: true,
                msg: '添加成功'
            }
        } else {
			return {
                status: false,
                msg: '添加失败'
            }
        } 

  	}
}

module.exports = AddNService;