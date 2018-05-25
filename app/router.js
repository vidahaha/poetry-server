'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/Login', controller.home.login); 
  router.post('/Reg', controller.home.reg);    
  router.post('/Admin/Login', controller.admin.login);    
  router.post('/Admin/Add', controller.admin.add);
  router.post('/Poetry/Library', controller.poetry.library);
  router.post('/Poetry/Grade', controller.poetry.grade);  
  router.get('/Global/QuestionNum', controller.global.questionNum); 
  router.get('/Global/Index', controller.global.index);   
  router.get('/StudentList', controller.home.studentList);        
  router.get('/AdminList', controller.home.adminList); 
  router.get('/QuestionList', controller.home.questionList); 
  router.post('/Global/QuestionNum', controller.global.updateQuestionNum);
  router.post('/Poetry/Add', controller.poetry.add);
  router.post('/Poetry/AddN', controller.poetry.addN);  
  router.post('/Poetry/Delete', controller.poetry.delete);
  router.post('/Poetry/Update', controller.poetry.update);  
  router.post('/Poetry/UpdateN', controller.poetry.updateN);   
  router.post('/Student/Add', controller.home.add);
  router.post('/Student/Delete', controller.home.delete);    
  router.post('/Student/Update', controller.home.update);
 
  
  //test
  router.get('/Test/5', controller.test.test_5);
  router.get('/Test/6', controller.test.test_6);  
  router.get('/Test/12', controller.test.test_12);
  router.get('/Test/13', controller.test.test_13); 
  router.get('/Test/18', controller.test.test_18);        
  router.get('/Test/19', controller.test.test_19);        
                                                                                                              
};
