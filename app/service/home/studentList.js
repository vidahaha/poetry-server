const Service = require('egg').Service;

class StudentListService extends Service {
  	async index() {

        let result = await this.app.mysql.select('student');

		for ( let val of result ) {
			let studentId = val.id;
			val.grade = [];

			let res = await this.app.mysql.select('grade',{
				where: {studentId}
			});

			if ( res === null ) continue;	

			res.forEach(ele => {
				val.grade.push([ele.grade, ele.time.toLocaleDateString(), ele.count]);
			});
		}

		return {
			status: true,
			data: result
		}

  	}
}

module.exports = StudentListService;