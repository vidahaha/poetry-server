'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525839123064_3168';

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://localhost:8080' ],
  };

  config.cors = {
    credentials: true,
  };

  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '123456',
      //password: 'qq937634115',
      // database
      database: 'poetry',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  // add your config here
  config.middleware = [];

  return config;
};
