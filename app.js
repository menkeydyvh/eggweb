'use strict';

const eggweb = require('./lib/eggweb');

module.exports = app => {
  if (app.config.eggweb) eggweb(app);
};
