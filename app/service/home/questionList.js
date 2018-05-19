const Service = require('egg').Service;

class QuestionListService extends Service {
  	async index() {

		let data = {};

		let result = await this.app.mysql.select('admiring_question');
		
		let format = ( result ) => {
			for ( let val of result ) {
				console.log( val.option)
				val.option = val.option.split('|');
			}
		}

		format( result );
	   
		data.admiring = result;

		result = await this.app.mysql.select('choice_question');

		format( result );
		
		data.choice = result;		

		result = await this.app.mysql.select('judge_question');
		
		data.judge = result;				
        
        return {
            status: true,
            data
        }
  	}
}

module.exports = QuestionListService;