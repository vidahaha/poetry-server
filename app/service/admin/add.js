const Service = require('egg').Service;

class AddService extends Service {
  	async checkReg( body ) {
        let {name, password} = body;
        let result = await this.app.mysql.get('admin', {name});

    	if( result ) {
            return {
                status: false,
                msg: '用户名已存在'
            }
        } else {
            await this.app.mysql.insert('admin', {
                name,
                password,
            });
    
            return {
                status: true,
                msg: '管理员添加成功'
            }
        } 

  	}
}

module.exports = AddService;