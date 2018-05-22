const Service = require('egg').Service;

class UpdateService extends Service {
  	async index( body ) {
        let row = {};  
        console.log( body )
		for ( let key in body ) {
			row[key] = body[key]
		}
        let result = await this.app.mysql.update('student', row);

    	if( result ) {
            return {
                status: true,
                msg: '更新成功'
            }
        } else {
            return {
                status: false,
                msg: '更新失败'
            }
        } 

  	}
}

module.exports = UpdateService;