const Service = require('egg').Service;

class AddService extends Service {
  	async index( body ) {
        let {name, id} = body;
        let _class = body.class;
        let result = await this.app.mysql.get('student', {id});

    	if( result ) {
            return {
                status: false,
                msg: '学号已存在'
            }
        } else {
            await this.app.mysql.insert('student', {
                name,
                id,
                class: _class
            });
    
            return {
                status: true,
                msg: '添加成功'
            }
        }   
  	}
}

module.exports = AddService;