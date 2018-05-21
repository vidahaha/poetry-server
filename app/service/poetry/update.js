const Service = require('egg').Service;
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');
const fs = require('fs');
const path = require('path');

class UpdateService extends Service {
  	async index( body ) {

        let table = ['choice_question', 'judge_question', 'admiring_question'];

        const stream = await this.ctx.getFileStream(); 
        
        let fields = stream.fields;
        let type = fields.type;
        let id = fields.id;

        let result = await this.ctx.app.mysql.get(table[type], {id});
        if ( result ) {
            console.log( result.url );
            fs.unlinkSync( result.url, res => {
                console.log( res )
            } );
        } else {
            return {
                status: false,
                msg: '未找到数据'
            }
        }

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
		} // 存文件

        for ( let key in fields ) {
            if ( key == 'type' || key == "id" ) continue;
            if ( key == 'option') fields[key] = fields[key].join('|'); 
            row[key] = fields[key];
        }
        row.url = saveUrl;

		result = await this.ctx.app.mysql.update(table[type], row);

    	if ( result ) {
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