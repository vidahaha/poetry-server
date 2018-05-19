const Service = require('egg').Service;

class LoginService extends Service {
  	async checkLogin( body ) {
        let {name, password} = body;

        let result = await this.app.mysql.get('admin', {
                name,
                password,
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