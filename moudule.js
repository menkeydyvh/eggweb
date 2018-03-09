const path = require('path');

module.exports = (app) => {
  let addController = path.join(__dirname, 'app', 'controller');
  app.loader.loadToApp(addController, 'controller');
};