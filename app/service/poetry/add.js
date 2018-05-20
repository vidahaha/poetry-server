const fs = require('fs');
const path = require('path');
const Service = require('egg').Service;

class AddService extends Service {
  	async index( body ) {
		
		let	table = ['choice_question', 'judge_question', 'admiring_question'];

		const stream = await this.ctx.getFileStream();
		
		let {type, question, option, answer, analysis} = stream.fields;

		let result = {};

		if ( typeof type !== 'number' ) type = parseInt(type);

		let url = './static/'+path.basename(stream.filename);

		let saveUrl = global.API_HOST + '/static/'+path.basename(stream.filename);

		let time = new Date();

		result = await this.ctx.oss.put(url, stream);

		if ( !result ) {
			return {
                status: false,
                msg: '上传失败'
            }
		}

		if (option) {
			option = option.split(',').join('|');
		}

        switch (type) {
			case 0 : {
				result = await this.app.mysql.insert(table[type], {
					question,
					answer,
					option,
					analysis,
					image: url
				});
				break;
			}
			case 1: {
				result = await this.app.mysql.insert(table[type], {
					question,
					answer,
					analysis,
					image: url
				});
				break;
			}
			case 2 : {
				result = await this.app.mysql.insert(table[type], {
					question,
					answer,
					option,
					analysis,
					video: url
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

module.exports = AddService;