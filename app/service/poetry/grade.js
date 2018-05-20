const Service = require('egg').Service;

class GradeService extends Service {
  	async index( body ) {
		this.ctx.session.libraryId = [[ 1 ], [ 2, 3, 1, 5, 4, 6 ], [ 1 ] ];
		let {id, answer} = body,
			table = ['choice_question', 'judge_question', 'admiring_question'],
			answerId = this.ctx.session.libraryId,
			grade = 0,
			rightAnswer = [],
			studentName = '',
			count = 0,
			result = {};
			console.log(this.ctx.session)
		let score = 100 / answerId.join().split(',').length;

		if ( answerId === null ) {
			return {
				status: false,
				msg: '内部错误'
			}
		} else {
			for ( let i = 0; i < answerId.length; i++ ) {
				rightAnswer.push([]);
				for ( let j = 0; j < answerId[i].length; j++ ) {
					let currentAnswerId = answerId[i][j];
					let currentAnswer = parseInt(answer[i][j]);
					result = await this.app.mysql.select(table[i], {
						where: {id: currentAnswerId},
						columns: ['answer']
					});
					rightAnswer[i].push(result[0].answer);
					if( currentAnswer === result[0].answer ) {
						grade += score;
					}
				}
			}

			result = await this.app.mysql.get('student',{id});

			if(result) {
				studentName = result.name;
			} else {
				return {
					status: false,
					msg: '无效的学生'
				}
			}

			result = await this.app.mysql.select('grade', {
				where: {studentId: id},
				columns: ['count'],
				orders: [['count','desc']],
				
			});
			if ( result.length !== 0 ) {
				count = result[0].count + 1;
			} else {
				count = 1;
			}

			let time = new Date();
			time = time.toLocaleDateString();

			result = await this.app.mysql.insert('grade', {
				name: studentName,
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