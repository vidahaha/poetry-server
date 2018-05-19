const fs = require('fs');
const Service = require('egg').Service;

class AddService extends Service {
  	async index( body ) {
		let {type, question, option, answer, analysis, image, video} = body,
			table = ['choice_question', 'judge_question', 'admiring_question'];
		console.log( image )

		let buffer = new Buffer(base64Data, 'base64');

		if ( typeof type !== 'number' ) type = parseInt(type);

		type == 2 ? buffer = video : buffer = image;

		let time = new Date();

		let url = `${table[type]}_${time.getTime()}`;
			
		fs.writeFile(url, buffer, err => {
			if (err) {
				console.log( '图片写入失败')
			}
		});

		if (option) {
			option = option.join('|');
		}

        switch (type) {
			case 0 : {
				let result = await this.app.mysql.insert(table[type], {
					question,
					answer,
					option,
					analysis,
					image: url
				});
				break;
			}
			case 1: {
				let result = await this.app.mysql.insert(table[type], {
					question,
					answer,
					analysis,
					image: url
				});
				break;
			}
			case 2 : {
				let result = await this.app.mysql.insert(table[type], {
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
                status: false,
                msg: '添加失败'
            }
        } else {
            return {
                status: true,
                msg: '添加成功'
            }
        } 

  	}
}

module.exports = AddService;