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
  
  //test
  router.get('/Test/5', controller.test.test_5);
  
};
