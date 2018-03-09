const path = require('path');

module.exports = app => {
  const directory = path.join(__dirname, 'app', 'controller');
  app.loader.loadToApp(directory, 'controller');
};