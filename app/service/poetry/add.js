const fs = require('fs');
const path = require('path');
const Service = require('egg').Service;
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

class AddService extends Service {
  	async index( body ) {
		
		let	table = ['choice_question', 'judge_question', 'admiring_question'];

		const stream = await this.ctx.getFileStream();
		
		let {type, question, option, answer, analysis} = stream.fields;

		let result = {};

		if ( typeof type !== 'number' ) type = parseInt(type);

		let time = new Date();

		let fileName = time.getTime()+'_'+path.basename(stream.filename);

		let url = './app/public/'+ fileName;

		let saveUrl = this.ctx.request.header.host + '/public/'+ fileName;

		const writeStream = fs.createWriteStream(url);
		try {
		  await awaitWriteStream(stream.pipe(writeStream));
		} catch (err) {
		  await sendToWormhole(stream);
		  throw err;
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
					image: saveUrl
				});
				break;
			}
			case 1: {
				result = await this.app.mysql.insert(table[type], {
					question,
					answer,
					analysis,
					image: saveUrl
				});
				break;
			}
			case 2 : {
				result = await this.app.mysql.insert(table[type], {
					question,
					answer,
					option,
					analysis,
					video: saveUrl
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