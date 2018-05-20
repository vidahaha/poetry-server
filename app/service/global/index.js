const Service = require('egg').Service;

class IndexService extends Service {
  	async index() {

        let result = await this.app.mysql.get('global');
        
        let questionNum = result.question_num;
		
		result = await this.app.mysql.select('student');

		let studentNum = result.length;

		result = await this.app.mysql.select('admiring_question');
		
		let poetryNum = result.length;

		result = await this.app.mysql.select('choice_question');
		
		poetryNum += result.length;

		result = await this.app.mysql.select('judge_question');
		
		poetryNum += result.length;

		return {
			status: true,
			questionNum,
			studentNum,
			poetryNum
		}
  	}
}

module.exports = IndexService;