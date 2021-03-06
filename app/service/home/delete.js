const Service = require('egg').Service;

class DeleteService extends Service {
  	async index( body ) {
        let {id} = body;
        let result = await this.app.mysql.delete('student', {id});

    	if( result ) {
            return {
                status: true,
                msg: '删除成功'
            }
        } else {   
            return {
                status: false,
                msg: '删除失败'
            }
        }   
  	}
}

module.exports = DeleteService;