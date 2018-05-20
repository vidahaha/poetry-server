const Service = require('egg').Service;

class QuestionNumService extends Service {
  	async index() {

        let result = await this.app.mysql.get('global');
        
        if (result === null ) {
            return {
                status: false,
                msg: '内部错误'
            }
        }  else {
			let questionNum = result.question_num;
            return {
				status: true,
                msg: '读取成功',				
                questionNum
            }
        }  
      }
      
    async update( body ) {
        let {questionNum} = body;
        let result = await this.app.mysql.update('global', {
            id: 1,
            question_num: questionNum
        });
        if (result === null ) {
            return {
                status: false,
                msg: '内部错误'
            }
        }  else {
            return {
				status: true,
                msg: '修改成功',				
            }
        }  
    }
}

module.exports = QuestionNumService;