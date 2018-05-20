const Service = require('egg').Service;

class UpdateService extends Service {
  	async index( body ) {
		let row = {};  
		for ( let key in body ) {
			row[key] = body[key]
		}
        let result = await this.app.mysql.update('student', row);

    	if( result ) {
            return {
                status: false,
                msg: '更新失败'
            }
        } else {
            return {
                status: true,
                msg: '更新成功'
            }
        } 

  	}
}

module.exports = UpdateService;