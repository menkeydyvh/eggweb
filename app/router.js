'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {router, controller} = app;
  let baseName = '/eggweb';
  router.get(baseName + '/', controller.eggweb.home.index);
};
