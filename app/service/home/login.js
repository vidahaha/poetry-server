const Service = require('egg').Service;

class LoginService extends Service {
  	async checkLogin( body ) {
        let {name, id} = body;
        let _class = body.class;

        let result = await this.app.mysql.get('student', {
                name,
                id,
                class: _class
            });
        
        if (result === null ) {
            return {
                status: false,
                msg: '信息错误，登录失败'
            }
        }  else {
            return {
                status: true,
                msg: '登录成功'
            }
        }  
  	}
}

module.exports = LoginService;