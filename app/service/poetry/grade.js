const Service = require('egg').Service;

class GradeService extends Service {
  	async index( body ) {
		let {id, answer} = body,
			table = ['choice_question', 'judge_question', 'admiring_question'],
			answerId = this.ctx.session.libraryId,
			grade = 0,
			rightAnswer = [],
			result = {};

		console.log(this.ctx.session)
		if ( answerId === null ) {
			return {
				status: false,
				msg: '内部错误'
			}
		} else {
			for ( let i = 0; i < answerId.length; i++ ) {
				rightAnswer.push([]);
				for ( let j = 0; j < answerId[i].length; j++ ) {
					currentAnswerId = answerId[i][j];
					currentAnswer = answer[i][j];
					result = await this.app.mysql.select(table[i], {
						where: {id: currentAnswerId},
						columns: ['answer']
					});
					rightAnswer[i].push(result.answer);
					if( currentAnswer === result.answer ) {
						grade += 5;
					}
				}
			}

			result = await this.app.mysql.get('student', {
				where: {id},
				columns: ['name']
			});

			let studentName = result.name;

			result = await this.app.mysql.get('grade', {
				where: {id},
				columns: ['count','desc'],
				limit: 1
			});

			if ( result ) {
				let count = result.count + 1;
			} else {
				let count = 1;
			}

			let time = new Date();
			time = time.toLocaleDateString();

			result = await this.app.mysql.insert('grade', {
				studentId: id,
				grade,
				count,
				time
			});

			if ( result ) {
				return {
					status: true,
					data: {
						grade,
						right_answer: rightAnswer
					}
				}
			} else {
				return {
					status: false,
					msg: '内部错误'
				}
			}
		}
  	}
}

module.exports = GradeService;