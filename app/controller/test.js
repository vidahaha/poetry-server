'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {

    constructor(ctx) {
        super(ctx);
        this.root = 'http://localhost:7001';
    }

    async test_5() {
        let data = {
            num: [1, 5, 1]
        }
        const result = await this.ctx.curl(`${this.root}/Poetry/Library`, {
            method: 'post',
            data,
            dataType: 'json',
            contentType: 'json',
        });
        this.ctx.body = result;
    }

    async test_6() {
        let data = {
            id: '12345678',
            answer: [
              [1,2,3,4,1,4,2,1,4,1], // 选择题 (1为A,4为D)
              [0,1,0,1,0], // 判断题 （0为错，1为对）
              [2,3,4,1,3] //欣赏题
            ]
        }

        const result = await this.ctx.curl(`${this.root}/Poetry/Grade`, {
            method: 'post',
            data,
            dataType: 'json',
            contentType: 'json',
          });
        this.ctx.body = result;
    }

    async test_12() {
        let data = {
            questionNum: 30
        }
        const result = await this.ctx.curl(`${this.root}/Global/QuestionNum`, {
            method: 'post',
            data,
            dataType: 'json',
            contentType: 'json',
          });
        this.ctx.body = result;
    }

    async test_13() {
        let data = {
            type: 0,
            question: '1+1=?',
            option: ['2', '3', '4', '5'],
            answer: 1,
            analysis: '简单的数学运算',
            image: 'C:/Users/vidahaha/Desktop/葫芦丝/简谱1.jpg'
          }
        const result = await this.ctx.curl(`${this.root}/Poetry/Add`, {
            method: 'post',
            data,
            dataType: 'json',
            contentType: 'json',
          });
        this.ctx.body = result;
    }

    async test_18() {
        let data = {
            id: '123456788',  //必选
            class: '2-3'      //可选
          }
        const result = await this.ctx.curl(`${this.root}/Student/Update`, {
            method: 'post',
            data,
            dataType: 'json',
            contentType: 'json',
          });
        this.ctx.body = result;
    }
}

module.exports = TestController;