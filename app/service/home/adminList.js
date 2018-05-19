const Service = require('egg').Service;

class AdminListService extends Service {
  	async index() {

        let result = await this.app.mysql.select('admin', { 
			columns: ['id', 'name']
		});
        
        if (result === null ) {
            return {
                status: false,
                msg: '获取失败'
            }
        }  else {
            return {
                status: true,
                data: result
            }
        }  
  	}
}

module.exports = AdminListService;