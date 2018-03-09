'use strict';

const eggweb = require('./lib/eggweb');

module.exports = agent => {
  if (agent.config.eggweb.agent) eggweb(agent);
};